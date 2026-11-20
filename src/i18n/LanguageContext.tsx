import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Language, TranslationDictionary } from './types'
import { en } from './en'
import { te } from './te'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationDictionary
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'eat_move_grow_lang'

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'te' || saved === 'en') return saved
    } catch {
      // ignore storage error
    }
    return 'en'
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // ignore storage error
    }
    document.documentElement.lang = language
    if (language === 'te') {
      document.body.classList.add('telugu-active')
    } else {
      document.body.classList.remove('telugu-active')
    }
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'te' : 'en'))
  }

  const t = language === 'te' ? te : en

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
