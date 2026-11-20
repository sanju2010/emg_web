import React, { useState } from 'react'
import { ArrowRight, MessageCircle, Eye, ShoppingCart, Plus, Minus, Check } from 'lucide-react'
import type { Product } from '../../data/products'
import { useLanguage } from '../../i18n/LanguageContext'
import { useCart } from '../../context/CartContext'
import { openWhatsApp, createProductEnquiry } from '../../utils/whatsapp'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { language, t } = useLanguage()
  const { addToCart, updateQuantity, getItemQuantity, setIsCartOpen } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const name = language === 'te' ? product.nameTe : product.nameEn
  const categoryName = language === 'te' ? product.categoryNameTe : product.categoryNameEn
  const description = language === 'te' ? product.descriptionTe : product.descriptionEn

  // Get price entries
  const priceEntries = Object.entries(product.prices) as [string, number][]
  const hasPrices = priceEntries.length > 0 && !product.contactForPrice
  const defaultSize = hasPrices ? priceEntries[0][0] : product.packageSizes[0] || 'Standard'
  const firstPrice = hasPrices ? priceEntries[0] : null

  const inCartQty = getItemQuantity(product.id, defaultSize)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(product, defaultSize, 1)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1600)
  }

  const handleQuantityDelta = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation()
    updateQuantity(product.id, defaultSize, delta)
  }

  const handleEnquire = (e: React.MouseEvent) => {
    e.stopPropagation()
    const msg = createProductEnquiry({
      productName: product.nameEn,
      packageSize: firstPrice ? firstPrice[0] : undefined,
      price: firstPrice ? firstPrice[1] : undefined,
    })
    openWhatsApp(msg)
  }

  return (
    <article className="product-card-item">
      {/* Product Image and Overlay */}
      <div
        className="product-card-media"
        onClick={() => onSelect(product)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${name}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onSelect(product)
        }}
      >
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          className="product-card-thumb"
        />
        <span className="product-badge-category">{categoryName}</span>
        <div className="product-media-hover-hint">
          <Eye size={16} />
          <span>{t.catalogue.viewDetails}</span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="product-card-body">
        <h3
          className="product-card-name"
          onClick={() => onSelect(product)}
        >
          {name}
        </h3>
        <p className="product-card-desc">{description}</p>

        {/* Pricing info */}
        <div className="product-card-price-bar">
          {hasPrices && firstPrice ? (
            <span className="product-price-display">
              <span className="price-lead">{t.catalogue.from} </span>
              <strong>₹{firstPrice[1]}</strong>
              <small> / {firstPrice[0]}</small>
            </span>
          ) : (
            <span className="product-contact-price">{t.catalogue.contactForPrice}</span>
          )}
        </div>

        {/* Action buttons */}
        <div className="product-card-footer">
          {hasPrices ? (
            inCartQty > 0 ? (
              <div className="product-card-qty-ctrl">
                <button
                  type="button"
                  className="card-qty-btn"
                  onClick={(e) => handleQuantityDelta(e, -1)}
                  aria-label="Decrease quantity in cart"
                >
                  <Minus size={13} />
                </button>
                <button
                  type="button"
                  className="card-qty-indicator"
                  onClick={() => setIsCartOpen(true)}
                  title={t.cart.viewCart}
                >
                  <span>{inCartQty} {t.cart.itemsInCart}</span>
                </button>
                <button
                  type="button"
                  className="card-qty-btn"
                  onClick={(e) => handleQuantityDelta(e, 1)}
                  aria-label="Increase quantity in cart"
                >
                  <Plus size={13} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className={`product-add-cart-btn ${justAdded ? 'is-added' : ''}`}
                onClick={handleAddToCart}
                aria-label={`Add ${name} to cart`}
              >
                {justAdded ? (
                  <>
                    <Check size={15} />
                    <span>{t.cart.addedToCart}</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={15} />
                    <span>{t.cart.addToCart}</span>
                  </>
                )}
              </button>
            )
          ) : (
            <button
              type="button"
              className="product-quick-enquire-btn"
              onClick={handleEnquire}
              aria-label={`Enquire on WhatsApp about ${name}`}
            >
              <MessageCircle size={15} />
              <span>{t.catalogue.enquire}</span>
            </button>
          )}

          <button
            type="button"
            className="product-view-details-btn"
            onClick={() => onSelect(product)}
            aria-label={`More details about ${name}`}
            title={t.catalogue.viewDetails}
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </article>
  )
}
