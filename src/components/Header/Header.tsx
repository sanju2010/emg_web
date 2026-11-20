import React, { useState } from 'react'
import { Menu, MessageCircle, Phone, X, Sparkles, ShoppingCart } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useCart } from '../../context/CartContext'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { openWhatsApp, callBusiness } from '../../utils/whatsapp'
import { business } from '../../config/business'

interface HeaderProps {
  onOpenBulkOrder?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenBulkOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, language } = useLanguage()
  const { totalCount, setIsCartOpen } = useCart()

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.products, href: '#catalogue' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.bulkOrders, href: '#bulk-orders' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="site-header">
      {/* Top Banner Notice */}
      <div className="topline-banner">
        <div className="topline-content">
          <span>{t.topbar.message}</span>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <nav className="nav-container shell" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}>
          <img
            src={business.logo}
            alt={business.name}
            className="brand-logo-img"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-item"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="desktop-header-actions">
          {/* Cart Trigger Button */}
          <button
            type="button"
            className="header-cart-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label={`View shopping cart, ${totalCount} items`}
          >
            <div className="header-cart-icon-wrap">
              <ShoppingCart size={17} />
              {totalCount > 0 && <span className="header-cart-badge">{totalCount}</span>}
            </div>
            <span className="header-cart-text">{t.cart.title}</span>
          </button>

          <LanguageSwitcher />

          <button
            type="button"
            className="header-wa-cta button button-small"
            onClick={() =>
              openWhatsApp(
                `Hello ${business.name}, I would like to enquire about your homemade sweets and savouries.`
              )
            }
          >
            <MessageCircle size={15} />
            <span>{t.nav.orderWhatsApp}</span>
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="mobile-header-controls">
          <button
            type="button"
            className="header-cart-btn mobile-cart-pill"
            onClick={() => setIsCartOpen(true)}
            aria-label={`View cart, ${totalCount} items`}
          >
            <div className="header-cart-icon-wrap">
              <ShoppingCart size={19} />
              {totalCount > 0 && <span className="header-cart-badge">{totalCount}</span>}
            </div>
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-lang">
          <LanguageSwitcher />
        </div>

        <div className="mobile-links-list">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mobile-drawer-actions">
          <button
            type="button"
            className="button button-full button-primary"
            onClick={() => {
              setMobileMenuOpen(false)
              setIsCartOpen(true)
            }}
          >
            <ShoppingCart size={18} />
            <span>{t.cart.title} ({totalCount})</span>
          </button>

          <button
            type="button"
            className="button button-full button-wa-order"
            onClick={() => {
              setMobileMenuOpen(false)
              openWhatsApp(`Hello ${business.name}, I would like to order homemade sweets and snacks.`)
            }}
          >
            <MessageCircle size={18} />
            <span>{t.nav.orderWhatsApp}</span>
          </button>

          <button
            type="button"
            className="button button-full button-outline"
            onClick={() => {
              setMobileMenuOpen(false)
              callBusiness()
            }}
          >
            <Phone size={17} />
            <span>{t.nav.callUs} ({business.phone})</span>
          </button>

          {onOpenBulkOrder && (
            <button
              type="button"
              className="button button-full button-beige"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenBulkOrder()
              }}
            >
              <Sparkles size={16} />
              <span>{t.bulkSection.cta}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
