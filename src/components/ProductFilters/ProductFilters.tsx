import React, { useState } from 'react'
import { Check, Filter, RotateCcw, Search, SlidersHorizontal, X, ChevronDown, ChevronUp } from 'lucide-react'
import { categories } from '../../data/categories'
import { useLanguage } from '../../i18n/LanguageContext'

export interface ProductFiltersProps {
  selectedCategories: string[]
  onToggleCategory: (catId: string) => void
  onSelectAll: () => void
  onClearCategories: () => void
  categoryCounts: Record<string, number>
  totalCount: number
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategories,
  onToggleCategory,
  onSelectAll,
  onClearCategories,
  categoryCounts,
  totalCount,
}) => {
  const { language, t } = useLanguage()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isAllSelected = selectedCategories.length === 0
  const selectedCount = selectedCategories.length

  return (
    <aside className="catalogue-sidebar" aria-label="Category filters">
      {/* Mobile Accordion Toggle Header */}
      <button
        type="button"
        className="mobile-filter-toggle"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-expanded={isMobileOpen}
        aria-controls="catalogue-category-list"
      >
        <span className="mobile-toggle-left">
          <Filter size={16} />
          <span className="mobile-toggle-title">
            {t.catalogue.filterBtnMobile}
            {selectedCount > 0 && (
              <span className="filter-count-badge">{selectedCount}</span>
            )}
          </span>
        </span>
        <span className="mobile-toggle-arrow">
          {isMobileOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {/* Sidebar Panel Content */}
      <div
        id="catalogue-category-list"
        className={`catalogue-sidebar-content ${isMobileOpen ? 'is-mobile-open' : ''}`}
      >
        <div className="sidebar-header">
          <div className="sidebar-title-group">
            <Filter size={17} className="sidebar-title-icon" aria-hidden="true" />
            <h3 className="sidebar-title">{t.catalogue.categoriesTitle}</h3>
            {selectedCount > 0 && (
              <span className="filter-count-badge" title={`${selectedCount} selected`}>
                {selectedCount}
              </span>
            )}
          </div>

          {selectedCount > 0 && (
            <button
              type="button"
              className="sidebar-clear-btn"
              onClick={onClearCategories}
              aria-label="Clear all category filters"
            >
              <RotateCcw size={12} />
              <span>{t.catalogue.clearFilters}</span>
            </button>
          )}
        </div>

        <div className="category-checkbox-list" role="group" aria-label="Categories">
          {/* All Categories Option */}
          <label className={`category-checkbox-item ${isAllSelected ? 'is-selected' : ''}`}>
            <input
              type="checkbox"
              className="category-checkbox-native"
              checked={isAllSelected}
              onChange={onSelectAll}
              aria-label={t.catalogue.allFilter}
            />
            <span className={`category-custom-checkbox ${isAllSelected ? 'is-checked' : ''}`}>
              {isAllSelected && <Check size={12} strokeWidth={3} />}
            </span>
            <span className="category-item-label">{t.catalogue.allFilter}</span>
            <span className="category-item-count">{totalCount}</span>
          </label>

          <div className="category-divider" role="separator" />

          {/* Individual Category Checkboxes */}
          {categories.map((cat) => {
            const isChecked = selectedCategories.includes(cat.id)
            const count = categoryCounts[cat.id] || 0
            const name = language === 'te' ? cat.nameTe : cat.nameEn

            return (
              <label
                key={cat.id}
                className={`category-checkbox-item ${isChecked ? 'is-selected' : ''}`}
              >
                <input
                  type="checkbox"
                  className="category-checkbox-native"
                  checked={isChecked}
                  onChange={() => onToggleCategory(cat.id)}
                  aria-label={name}
                />
                <span className={`category-custom-checkbox ${isChecked ? 'is-checked' : ''}`}>
                  {isChecked && <Check size={12} strokeWidth={3} />}
                </span>
                <span className="category-item-label">{name}</span>
                <span className="category-item-count">{count}</span>
              </label>
            )
          })}
        </div>

        {/* Mobile Close/Apply Button */}
        {isMobileOpen && (
          <div className="mobile-filter-footer">
            <button
              type="button"
              className="button button-primary mobile-apply-btn"
              onClick={() => setIsMobileOpen(false)}
            >
              <span>{language === 'te' ? 'ఫిల్టర్లు వర్తింపజేయి' : 'Apply Filters'} ({selectedCount > 0 ? selectedCount : totalCount})</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}

export interface CatalogueToolbarProps {
  searchQuery: string
  onSearchChange: (q: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
  totalShowing: number
  totalAvailable: number
}

export const CatalogueToolbar: React.FC<CatalogueToolbarProps> = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalShowing,
  totalAvailable,
}) => {
  const { language, t } = useLanguage()

  return (
    <div className="catalogue-toolbar">
      {/* Search Input Bar */}
      <div className="catalogue-search-bar">
        <Search size={18} className="search-icon" aria-hidden="true" />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.catalogue.searchPlaceholder}
          aria-label="Search catalogue"
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

      {/* Sort Select Dropdown & Results Counter */}
      <div className="catalogue-toolbar-right">
        <div className="catalogue-results-badge">
          <span className="results-count-text">
            {language === 'te'
              ? `${totalAvailable} లో ${totalShowing} ఉత్పత్తులు`
              : `Showing ${totalShowing} of ${totalAvailable}`}
          </span>
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
    </div>
  )
}
