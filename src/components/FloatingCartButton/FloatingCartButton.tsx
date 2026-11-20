import React from 'react'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../i18n/LanguageContext'

export const FloatingCartButton: React.FC = () => {
  const { totalCount, totalAmount, isCartOpen, setIsCartOpen } = useCart()
  const { t } = useLanguage()

  // If cart is already open or empty, hide the floating bar
  if (totalCount === 0 || isCartOpen) return null

  return (
    <button
      type="button"
      className="floating-cart-pill-widget"
      onClick={() => setIsCartOpen(true)}
      aria-label={`${totalCount} items in cart, total ₹${totalAmount}. Click to view cart.`}
    >
      <div className="floating-cart-badge">
        <ShoppingCart size={18} />
        <span className="floating-cart-count">{totalCount}</span>
      </div>

      <div className="floating-cart-meta">
        <span className="floating-cart-items-text">
          {totalCount} {totalCount === 1 ? t.cart.itemCountSingular : t.cart.itemCountPlural}
        </span>
        <span className="floating-cart-dot">•</span>
        <strong className="floating-cart-price">₹{totalAmount}</strong>
      </div>

      <div className="floating-cart-action-text">
        <span>{t.cart.viewCart}</span>
        <ArrowRight size={15} />
      </div>
    </button>
  )
}
