import React from 'react'
import { X, MessageCircle } from 'lucide-react'
import type { GalleryItem } from '../../data/gallery'
import { useLanguage } from '../../i18n/LanguageContext'
import { openWhatsApp } from '../../utils/whatsapp'
import { business } from '../../config/business'

interface GalleryLightboxProps {
  item: GalleryItem | null
  onClose: () => void
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose }) => {
  const { language, t } = useLanguage()

  if (!item) return null

  const title = language === 'te' ? item.titleTe : item.titleEn
  const categoryLabel = language === 'te' ? item.categoryLabelTe : item.categoryLabelEn
  const desc = language === 'te' ? item.descriptionTe : item.descriptionEn

  const handleEnquire = () => {
    openWhatsApp(
      `Hello ${business.name}, I loved your photo of "${item.titleEn}" in the gallery! Could you share availability and ordering details?`
    )
  }

  return (
    <div
      className="modal-backdrop-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-icon-btn lightbox-close"
          aria-label={t.productModal.close}
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <div className="lightbox-image-container">
          <img src={item.image} alt={title} className="lightbox-full-img" />
        </div>

        <div className="lightbox-details-bar">
          <div className="lightbox-copy">
            <span className="lightbox-category-tag">{categoryLabel}</span>
            <h3 id="lightbox-title" className="lightbox-title">
              {title}
            </h3>
            <p className="lightbox-desc">{desc}</p>
          </div>

          <button
            type="button"
            className="button button-primary lightbox-enquire-btn"
            onClick={handleEnquire}
          >
            <MessageCircle size={17} />
            <span>{t.catalogue.enquire}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
