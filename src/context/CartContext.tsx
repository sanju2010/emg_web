import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Product } from '../data/products'

export interface CartItem {
  productId: string
  packageSize: string
  nameEn: string
  nameTe: string
  categoryNameEn: string
  categoryNameTe: string
  image: string
  unitPrice: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  totalCount: number
  totalAmount: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  addToCart: (product: Product, packageSize?: string, quantity?: number) => void
  updateQuantity: (productId: string, packageSize: string, deltaOrExact: number, isExact?: boolean) => void
  removeFromCart: (productId: string, packageSize: string) => void
  clearCart: () => void
  getItemQuantity: (productId: string, packageSize?: string) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = 'emg_cart_items_v1'

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) return parsed
      }
    } catch {
      // ignore storage errors
    }
    return []
  })

  const [isCartOpen, setIsCartOpen] = useState(false)

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage errors
    }
  }, [items])

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)

  const addToCart = (product: Product, packageSize?: string, quantity: number = 1) => {
    if (quantity <= 0) return

    const priceEntries = Object.entries(product.prices) as [string, number][]
    const chosenSize = packageSize || (priceEntries.length > 0 ? priceEntries[0][0] : product.packageSizes[0] || 'Standard')
    const unitPrice = product.prices[chosenSize as '250g' | '500g' | '1kg'] || (priceEntries.length > 0 ? priceEntries[0][1] : 0)

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) => i.productId === product.id && i.packageSize === chosenSize
      )

      if (existingIndex > -1) {
        const updated = [...prevItems]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }

      return [
        ...prevItems,
        {
          productId: product.id,
          packageSize: chosenSize,
          nameEn: product.nameEn,
          nameTe: product.nameTe,
          categoryNameEn: product.categoryNameEn,
          categoryNameTe: product.categoryNameTe,
          image: product.image,
          unitPrice,
          quantity,
        },
      ]
    })
  }

  const updateQuantity = (
    productId: string,
    packageSize: string,
    deltaOrExact: number,
    isExact: boolean = false
  ) => {
    setItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.productId === productId && item.packageSize === packageSize) {
            const newQty = isExact ? deltaOrExact : item.quantity + deltaOrExact
            return { ...item, quantity: newQty }
          }
          return item
        })
        .filter((item) => item.quantity > 0)
    })
  }

  const removeFromCart = (productId: string, packageSize: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.productId === productId && item.packageSize === packageSize)
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getItemQuantity = (productId: string, packageSize?: string): number => {
    if (packageSize) {
      const match = items.find((i) => i.productId === productId && i.packageSize === packageSize)
      return match ? match.quantity : 0
    }
    return items
      .filter((i) => i.productId === productId)
      .reduce((sum, i) => sum + i.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        totalCount,
        totalAmount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
