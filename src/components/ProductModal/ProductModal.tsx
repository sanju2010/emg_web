import React, { useState, useEffect } from 'react'
import {
  X,
  MessageCircle,
  Phone,
  CheckCircle2,
  ShieldAlert,
  ShoppingCart,
  Plus,
  Minus,
  Check,
  ArrowRight,
} from 'lucide-react'
import type { Product } from '../../data/products'
import { useLanguage } from '../../i18n/LanguageContext'
import { useCart } from '../../context/CartContext'
import { openWhatsApp, callBusiness, createProductEnquiry } from '../../utils/whatsapp'
import { business } from '../../config/business'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { language, t } = useLanguage()
  const { addToCart, setIsCartOpen } = useCart()

  const [quantity, setQuantity] = useState<number>(1)
  const [justAdded, setJustAdded] = useState<boolean>(false)

  // Initialize selectedSize from product when product changes
  const priceEntries = product
    ? (Object.entries(product.prices) as [string, number][])
    : []
  const initialSize = priceEntries.length > 0 ? priceEntries[0][0] : product?.packageSizes[0] || '500g'
  const [selectedSize, setSelectedSize] = useState<string>(initialSize)

  useEffect(() => {
    if (product) {
      const entries = Object.entries(product.prices) as [string, number][]
      const defSize = entries.length > 0 ? entries[0][0] : product.packageSizes[0] || '500g'
      setSelectedSize(defSize)
      setQuantity(1)
      setJustAdded(false)
    }
  }, [product])

  if (!product) return null

  const name = language === 'te' ? product.nameTe : product.nameEn
  const categoryName = language === 'te' ? product.categoryNameTe : product.categoryNameEn
  const description = language === 'te' ? product.descriptionTe : product.descriptionEn
  const ingredients = language === 'te' ? product.ingredientsTe : product.ingredientsEn
  const availability = language === 'te' ? product.availabilityTe : product.availabilityEn

  const selectedPrice = product.prices[selectedSize as '250g' | '500g' | '1kg']
  const hasPrice = typeof selectedPrice === 'number' && !product.contactForPrice
  const itemTotal = hasPrice ? selectedPrice * quantity : null

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2500)
  }

  const handleEnquireWhatsApp = () => {
    const msg = createProductEnquiry({
      productName: product.nameEn,
      packageSize: selectedSize,
      price: selectedPrice,
    })
    openWhatsApp(msg)
  }

  return (
    <div
      className="modal-backdrop-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div className="product-details-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-icon-btn"
          aria-label={t.productModal.close}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="product-modal-grid">
          {/* Large Image Showcase */}
          <div className="product-modal-visual">
            <img src={product.image} alt={name} className="product-modal-img" />
            <span className="product-modal-tag">{categoryName}</span>
          </div>

          {/* Product Details Section */}
          <div className="product-modal-info">
            <span className="modal-category-eyebrow">{categoryName}</span>
            <h2 id="product-modal-title" className="modal-product-title">
              {name}
            </h2>
            <p className="modal-product-desc">{description}</p>

            {/* Package Sizes Selection */}
            <div className="modal-package-section">
              <label className="modal-section-label">{t.productModal.availableSizes}</label>
              <div className="modal-size-pills">
                {product.packageSizes.map((size) => {
                  const price = product.prices[size as '250g' | '500g' | '1kg']
                  const isSelected = selectedSize === size
                  return (
                    <button
                      key={size}
                      type="button"
                      className={`modal-size-pill ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      <span className="size-label">{size}</span>
                      {price ? (
                        <span className="size-price">₹{price}</span>
                      ) : (
                        <span className="size-contact">{t.catalogue.contactForPrice}</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quantity Selector if priced */}
            {hasPrice && (
              <div className="modal-quantity-row">
                <label className="modal-section-label">{t.cart.quantityLabel}</label>
                <div className="modal-qty-selector">
                  <button
                    type="button"
                    className="modal-qty-btn"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="modal-qty-value">{quantity}</span>
                  <button
                    type="button"
                    className="modal-qty-btn"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>
                </div>
                {itemTotal && (
                  <span className="modal-calc-total">
                    = <strong>₹{itemTotal}</strong>
                  </span>
                )}
              </div>
            )}

            {/* Ingredients & Prep */}
            {ingredients && (
              <div className="modal-meta-box" style={{ display: 'none'}}>
                <h4>{t.productModal.ingredientsTitle}</h4>
                <p>{ingredients}</p>
              </div>
            )}

            {/* Availability */}
            {availability && (
              <div className="modal-meta-box">
                <h4>{t.productModal.availabilityTitle}</h4>
                <p className="modal-availability-row">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>{availability}</span>
                </p>
              </div>
            )}

            <p className="modal-disclaimer-text">
              <ShieldAlert size={14} className="alert-icon" />
              <span>{t.productModal.disclaimer}</span>
            </p>

            {/* Action CTAs */}
            <div className="modal-cta-row">
              {hasPrice ? (
                <>
                  <button
                    type="button"
                    className={`button button-full button-primary ${justAdded ? 'is-added-state' : ''}`}
                    onClick={handleAddToCart}
                  >
                    {justAdded ? (
                      <>
                        <Check size={18} />
                        <span>{t.cart.addedToCart}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={18} />
                        <span>
                          {t.cart.addToCart} • ₹{itemTotal}
                        </span>
                      </>
                    )}
                  </button>

                  {justAdded && (
                    <button
                      type="button"
                      className="button button-full button-gold-solid modal-view-cart-btn"
                      onClick={() => {
                        onClose()
                        setIsCartOpen(true)
                      }}
                    >
                      <span>{t.cart.viewCart}</span>
                      <ArrowRight size={16} />
                    </button>
                  )}

                  <div className="modal-secondary-buttons-row">
                    <button
                      type="button"
                      className="button button-outline button-small"
                      onClick={handleEnquireWhatsApp}
                    >
                      <MessageCircle size={15} />
                      <span>{t.productModal.enquireWhatsApp}</span>
                    </button>

                    <button
                      type="button"
                      className="button button-ghost button-small"
                      onClick={callBusiness}
                    >
                      <Phone size={15} />
                      <span>{t.productModal.callNow}</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="button button-primary button-full"
                    onClick={handleEnquireWhatsApp}
                  >
                    <MessageCircle size={18} />
                    <span>{t.productModal.enquireWhatsApp}</span>
                  </button>

                  <button
                    type="button"
                    className="button button-outline button-full"
                    onClick={callBusiness}
                  >
                    <Phone size={17} />
                    <span>{t.productModal.callNow} ({business.phone})</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
