import React, { useState, useEffect } from 'react'
import {
  X,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Copy,
  Check,
  Phone,
  ArrowRight,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../i18n/LanguageContext'
import { openWhatsApp, callBusiness, createCartOrderMessage } from '../../utils/whatsapp'
import { business } from '../../config/business'

const CUSTOMER_INFO_KEY = 'emg_customer_checkout_info'

export const CartDrawer: React.FC = () => {
  const {
    items,
    totalCount,
    totalAmount,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart()
  const { t, language } = useLanguage()

  // Customer checkout inputs
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [notes, setNotes] = useState('')

  const [formError, setFormError] = useState<string | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  // Load saved customer info
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_INFO_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.name) setCustomerName(parsed.name)
        if (parsed.phone) setCustomerPhone(parsed.phone)
        if (parsed.address) setDeliveryAddress(parsed.address)
      }
    } catch {
      // ignore storage errors
    }
  }, [])

  // Save customer info when changed
  const saveCustomerInfo = (name: string, phone: string, address: string) => {
    try {
      localStorage.setItem(
        CUSTOMER_INFO_KEY,
        JSON.stringify({ name, phone, address })
      )
    } catch {
      // ignore
    }
  }

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCartOpen, setIsCartOpen])

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  if (!isCartOpen) return null

  const validateForm = (): boolean => {
    if (!customerName.trim() || !customerPhone.trim()) {
      setFormError(t.cart.requiredField)
      return false
    }
    setFormError(null)
    saveCustomerInfo(customerName, customerPhone, deliveryAddress)
    return true
  }

  const prepareOrderData = () => {
    const orderItems = items.map((i) => ({
      name: language === 'te' ? i.nameTe : i.nameEn,
      packageSize: i.packageSize,
      quantity: i.quantity,
      unitPrice: i.unitPrice,
      totalPrice: i.unitPrice * i.quantity,
    }))

    return createCartOrderMessage({
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      deliveryAddress: deliveryAddress.trim(),
      notes: notes.trim(),
      items: orderItems,
      totalAmount,
    })
  }

  const handleOrderWhatsApp = () => {
    if (!validateForm()) return
    const msg = prepareOrderData()
    openWhatsApp(msg)
  }

  const handleCopyOrder = async () => {
    if (!validateForm()) return
    const msg = prepareOrderData()
    try {
      await navigator.clipboard.writeText(msg)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2500)
    } catch {
      // fallback
      const textArea = document.createElement('textarea')
      textArea.value = msg
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2500)
    }
  }

  const handleBrowseCatalog = () => {
    setIsCartOpen(false)
    const el = document.querySelector('#catalogue')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="cart-drawer-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t.cart.title}
      onClick={() => setIsCartOpen(false)}
    >
      <div className="cart-drawer-container" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <header className="cart-drawer-header">
          <div className="cart-header-title-wrap">
            <div className="cart-icon-circle">
              <ShoppingCart size={18} />
            </div>
            <div>
              <h2 className="cart-header-heading">{t.cart.title}</h2>
              <span className="cart-header-sub">
                {totalCount} {totalCount === 1 ? t.cart.itemCountSingular : t.cart.itemCountPlural}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </header>

        {/* Drawer Content */}
        {items.length === 0 ? (
          <div className="cart-empty-state">
            <div className="cart-empty-icon-wrap">
              <ShoppingBag size={48} className="cart-empty-bag-icon" />
            </div>
            <h3>{t.cart.emptyTitle}</h3>
            <p>{t.cart.emptySubtitle}</p>
            <button
              type="button"
              className="button button-primary"
              onClick={handleBrowseCatalog}
            >
              <span>{t.cart.exploreButton}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="cart-content-scroll">
            {/* Items List */}
            <div className="cart-items-section">
              <div className="cart-items-list">
                {items.map((item) => {
                  const displayName = language === 'te' ? item.nameTe : item.nameEn
                  const itemSubtotal = item.unitPrice * item.quantity

                  return (
                    <article
                      key={`${item.productId}-${item.packageSize}`}
                      className="cart-item-card"
                    >
                      <img
                        src={item.image}
                        alt={displayName}
                        className="cart-item-image"
                        loading="lazy"
                      />

                      <div className="cart-item-details">
                        <div className="cart-item-top-row">
                          <h4 className="cart-item-title">{displayName}</h4>
                          <button
                            type="button"
                            className="cart-item-delete-btn"
                            onClick={() => removeFromCart(item.productId, item.packageSize)}
                            aria-label={`Remove ${displayName} from cart`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="cart-item-meta-row">
                          <span className="cart-item-size-pill">{item.packageSize}</span>
                          <span className="cart-item-unit-price">
                            ₹{item.unitPrice} {t.cart.packageLabel ? '' : ''}
                          </span>
                        </div>

                        <div className="cart-item-bottom-row">
                          {/* Quantity selector */}
                          <div className="cart-quantity-group">
                            <button
                              type="button"
                              className="cart-qty-btn"
                              onClick={() => updateQuantity(item.productId, item.packageSize, -1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="cart-qty-count">{item.quantity}</span>
                            <button
                              type="button"
                              className="cart-qty-btn"
                              onClick={() => updateQuantity(item.productId, item.packageSize, 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <span className="cart-item-subtotal">₹{itemSubtotal}</span>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="cart-clear-row">
                <button
                  type="button"
                  className="cart-clear-btn"
                  onClick={clearCart}
                >
                  <Trash2 size={13} />
                  <span>{t.cart.clearCart}</span>
                </button>
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="cart-customer-section">
              <h3 className="cart-section-title">
                <Sparkles size={15} />
                <span>{t.cart.customerInfoTitle}</span>
              </h3>

              {formError && (
                <div className="cart-form-error-banner" role="alert">
                  {formError}
                </div>
              )}

              <div className="cart-form-fields">
                <div className="cart-field-group">
                  <label htmlFor="cart-name" className="cart-input-label">
                    {t.cart.nameLabel}
                  </label>
                  <input
                    id="cart-name"
                    type="text"
                    className="cart-text-input"
                    placeholder={t.cart.namePlaceholder}
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value)
                      if (formError) setFormError(null)
                    }}
                  />
                </div>

                <div className="cart-field-group">
                  <label htmlFor="cart-phone" className="cart-input-label">
                    {t.cart.phoneLabel}
                  </label>
                  <input
                    id="cart-phone"
                    type="tel"
                    className="cart-text-input"
                    placeholder={t.cart.phonePlaceholder}
                    value={customerPhone}
                    onChange={(e) => {
                      setCustomerPhone(e.target.value)
                      if (formError) setFormError(null)
                    }}
                  />
                </div>

                <div className="cart-field-group">
                  <label htmlFor="cart-address" className="cart-input-label">
                    {t.cart.addressLabel}
                  </label>
                  <textarea
                    id="cart-address"
                    rows={2}
                    className="cart-textarea-input"
                    placeholder={t.cart.addressPlaceholder}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  />
                </div>

                <div className="cart-field-group">
                  <label htmlFor="cart-notes" className="cart-input-label">
                    {t.cart.notesLabel}
                  </label>
                  <input
                    id="cart-notes"
                    type="text"
                    className="cart-text-input"
                    placeholder={t.cart.notesPlaceholder}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Bill Summary */}
            <div className="cart-summary-section">
              <div className="cart-summary-row">
                <span>{t.cart.subtotal} ({totalCount} {totalCount === 1 ? t.cart.itemCountSingular : t.cart.itemCountPlural})</span>
                <strong>₹{totalAmount}</strong>
              </div>

              <p className="cart-delivery-note">{t.cart.deliveryNote}</p>

              <div className="cart-total-bar">
                <span>{t.cart.subtotal}</span>
                <span className="cart-total-amount">₹{totalAmount}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="cart-actions-footer">
              <button
                type="button"
                className="button button-full button-wa-order"
                onClick={handleOrderWhatsApp}
              >
                <MessageCircle size={20} />
                <span>{t.cart.orderViaWhatsApp}</span>
              </button>

              <div className="cart-secondary-actions">
                <button
                  type="button"
                  className={`cart-action-btn ${isCopied ? 'is-copied' : ''}`}
                  onClick={handleCopyOrder}
                >
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{isCopied ? t.cart.orderCopied : t.cart.copyOrder}</span>
                </button>

                <button
                  type="button"
                  className="cart-action-btn"
                  onClick={callBusiness}
                >
                  <Phone size={15} />
                  <span>{t.cart.callToOrder}</span>
                </button>
              </div>

              <div className="cart-business-trust-row">
                <small>Freshly made to order • 100% Homemade by {business.name}</small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
