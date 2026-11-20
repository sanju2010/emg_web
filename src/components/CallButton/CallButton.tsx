import React from 'react'
import { Phone } from 'lucide-react'
import { callBusiness } from '../../utils/whatsapp'
import { useLanguage } from '../../i18n/LanguageContext'
import { business } from '../../config/business'

export const CallButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t } = useLanguage()

  return (
    <button
      type="button"
      className={`floating-call-widget ${className}`}
      onClick={callBusiness}
      aria-label={`Call ${business.name}`}
      title={`Call Eat Move Grow: ${business.phone}`}
    >
      <span className="call-icon-wrap">
        <Phone size={18} />
      </span>
      <span className="call-label-text">{t.floating.call}</span>
    </button>
  )
}
