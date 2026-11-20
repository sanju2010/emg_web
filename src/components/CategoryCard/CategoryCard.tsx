import React from 'react'
import { ArrowRight } from 'lucide-react'
import type { ProductCategory } from '../../data/categories'
import { useLanguage } from '../../i18n/LanguageContext'

interface CategoryCardProps {
  category: ProductCategory
  onSelectCategory: (categoryId: string) => void
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelectCategory }) => {
  const { language, t } = useLanguage()

  const name = language === 'te' ? category.nameTe : category.nameEn
  const desc = language === 'te' ? category.shortDescTe : category.shortDescEn

  return (
    <div
      className="category-card-item"
      onClick={() => onSelectCategory(category.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelectCategory(category.id)
      }}
    >
      <div className="category-card-image-wrap">
        <img src={category.image} alt={name} loading="lazy" />
        <div className="category-overlay-gradient" />
      </div>

      <div className="category-card-content">
        <span className="category-group-tag">
          {category.group === 'millets'
            ? (language === 'te' ? 'చిరుధాన్యాలు' : 'Millet Snacks')
            : category.group === 'sweets'
            ? (language === 'te' ? 'మిఠాయిలు' : 'Sweets')
            : (language === 'te' ? 'పిండివంటలు' : 'Savouries')}
        </span>
        <h3 className="category-card-title">{name}</h3>
        <p className="category-card-desc">{desc}</p>

        <span className="category-card-cta">
          <span>{t.categories.explore}</span>
          <ArrowRight size={16} className="category-arrow-icon" />
        </span>
      </div>
    </div>
  )
}
