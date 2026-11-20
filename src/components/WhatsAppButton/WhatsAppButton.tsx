import React from 'react'
import { MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../../utils/whatsapp'
import { useLanguage } from '../../i18n/LanguageContext'
import { business } from '../../config/business'

export const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage()

  const handleClick = () => {
    openWhatsApp(`Hello ${business.name}, I would like to enquire about your homemade sweets and savouries.`)
  }

  return (
    <button
      type="button"
      className="floating-whatsapp-widget"
      onClick={handleClick}
      aria-label="Order on WhatsApp"
      title="Chat with Eat Move Grow on WhatsApp"
    >
      <span className="wa-icon-glow">
        <MessageCircle size={22} />
      </span>
      <span className="wa-label-text">{t.floating.chat}</span>
    </button>
  )
}
