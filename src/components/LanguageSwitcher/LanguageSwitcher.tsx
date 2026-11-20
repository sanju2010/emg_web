import React from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Languages } from 'lucide-react'

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`language-switcher-group ${className}`} role="group" aria-label="Language selection">
      <Languages size={15} className="lang-icon" aria-hidden="true" />
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        English
      </button>
      <span className="lang-divider">/</span>
      <button
        type="button"
        className={`lang-btn telugu-script ${language === 'te' ? 'active' : ''}`}
        onClick={() => setLanguage('te')}
        aria-pressed={language === 'te'}
        title="తెలుగులోకి మారండి"
      >
        తెలుగు
      </button>
    </div>
  )
}
