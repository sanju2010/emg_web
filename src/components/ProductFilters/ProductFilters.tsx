import React from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { categories } from '../../data/categories'
import { useLanguage } from '../../i18n/LanguageContext'

interface ProductFiltersProps {
  selectedCategory: string
  onSelectCategory: (cat: string) => void
  searchQuery: string
  onSearchChange: (q: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  const { language, t } = useLanguage()

  return (
    <div className="catalogue-controls-wrapper">
      {/* Search and Sort Toolbar */}
      <div className="catalogue-toolbar">
        <div className="catalogue-search-bar">
          <Search size={18} className="search-icon" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.catalogue.searchPlaceholder}
            aria-label="Search products"
            className="catalogue-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div className="catalogue-sort-bar">
          <SlidersHorizontal size={15} className="sort-icon" aria-hidden="true" />
          <label htmlFor="product-sort" className="sr-only">
            {t.catalogue.sortLabel}
          </label>
          <select
            id="product-sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="catalogue-sort-select"
          >
            <option value="name-asc">{t.catalogue.sortAZ}</option>
            <option value="name-desc">{t.catalogue.sortZA}</option>
            <option value="price-asc">{t.catalogue.sortPriceLow}</option>
            <option value="price-desc">{t.catalogue.sortPriceHigh}</option>
          </select>
        </div>
      </div>

      {/* Filter Category Chips / Tabs */}
      <div className="category-chips-scroll" role="tablist" aria-label="Product category filters">
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'all'}
          className={`category-chip ${selectedCategory === 'all' ? 'is-active' : ''}`}
          onClick={() => onSelectCategory('all')}
        >
          {t.catalogue.allFilter}
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={selectedCategory === cat.id}
            className={`category-chip ${selectedCategory === cat.id ? 'is-active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {language === 'te' ? cat.nameTe : cat.nameEn}
          </button>
        ))}
      </div>
    </div>
  )
}
