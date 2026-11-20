import React from 'react'
import { MessageCircle, Phone, Mail, MapPin, Heart } from 'lucide-react'
import { business } from '../../config/business'
import { categories } from '../../data/categories'
import { useLanguage } from '../../i18n/LanguageContext'
import { openWhatsApp, callBusiness } from '../../utils/whatsapp'

export const Footer: React.FC = () => {
  const { language, t } = useLanguage()

  const handleCategoryClick = (e: React.MouseEvent, _catId: string) => {
    e.preventDefault()
    const catalogueEl = document.querySelector('#catalogue')
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-top-grid shell">
        {/* Brand Column */}
        <div className="footer-col-brand">
          <a href="#home" className="footer-brand-logo">
            <img
              src={business.logo}
              alt={business.name}
              className="footer-logo-img"
            />
            <span className="brand-text-wrap">
              <span className="brand-title">{business.name}</span>
              <span className="brand-tagline-sub">
                {language === 'te' ? business.taglineTe : business.tagline}
              </span>
            </span>
          </a>

          <p className="footer-brand-description">{t.footer.tagline}</p>

          <div className="footer-social-row">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="social-circle-link"
            >
              IG
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
              className="social-circle-link"
            >
              FB
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col-links">
          <h4 className="footer-col-heading">{t.footer.exploreTitle}</h4>
          <ul className="footer-links-list">
            <li><a href="#home">{t.nav.home}</a></li>
            <li><a href="#catalogue">{t.nav.products}</a></li>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#bulk-orders">{t.nav.bulkOrders}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
            <li><a href="/privacy-policy">{t.footer.privacy}</a></li>
            <li><a href="/terms-of-use">{t.footer.terms}</a></li>
          </ul>
        </div>

        {/* Categories Column */}
        <div className="footer-col-links">
          <h4 className="footer-col-heading">{t.footer.treatsTitle}</h4>
          <ul className="footer-links-list">
            {categories.slice(0, 5).map((cat) => (
              <li key={cat.id}>
                <a href="#catalogue" onClick={(e) => handleCategoryClick(e, cat.id)}>
                  {language === 'te' ? cat.nameTe : cat.nameEn}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col-contact">
          <h4 className="footer-col-heading">{t.footer.contactTitle}</h4>

          <div className="footer-contact-items">
            <button
              type="button"
              className="footer-contact-link-btn"
              onClick={callBusiness}
            >
              <Phone size={15} />
              <span>{business.phone}</span>
            </button>

            <a
              href={`mailto:${business.email}`}
              className="footer-contact-link-btn"
            >
              <Mail size={15} />
              <span>{business.email}</span>
            </a>

            <div className="footer-contact-info-row">
              <MapPin size={15} />
              <span>{business.address}</span>
            </div>

            <button
              type="button"
              className="footer-wa-pill-btn"
              onClick={() =>
                openWhatsApp(
                  `Hello ${business.name}, I would like to order homemade South Indian sweets and snacks.`
                )
              }
            >
              <MessageCircle size={15} />
              <span>{t.nav.orderWhatsApp}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar shell">
        <div className="footer-bottom-copy">
          <span>© {new Date().getFullYear()} {business.name}. {t.footer.copyright}</span>
          <span className="footer-config-note">{t.footer.sampleNotice}</span>
        </div>

        <div className="footer-bottom-love">
          <span>{t.footer.loveBadge}</span>
          <Heart size={13} fill="currentColor" className="footer-heart-icon" />
        </div>
      </div>
    </footer>
  )
}
