import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  Heart,
  Leaf,
  MessageCircle,
  PackageCheck,
  Phone,
  Sparkles,
  Award,
  ChevronDown,
  X,
} from 'lucide-react'
import { business } from '../../config/business'
import { products, type Product } from '../../data/products'
import { categories } from '../../data/categories'
import { testimonials } from '../../data/testimonials'
import { useLanguage } from '../../i18n/LanguageContext'
import { openWhatsApp, callBusiness } from '../../utils/whatsapp'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { ProductGrid } from '../../components/ProductGrid/ProductGrid'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'
import { ProductFilters, CatalogueToolbar } from '../../components/ProductFilters/ProductFilters'
import { EnquiryForm } from '../../components/EnquiryForm/EnquiryForm'
import { TestimonialCard } from '../../components/TestimonialCard/TestimonialCard'

interface HomePageProps {
  onSelectProduct: (product: Product) => void
  onOpenBulkOrder: () => void
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectProduct,
  onOpenBulkOrder,
}) => {
  const { language, t } = useLanguage()

  // Catalogue state - multi-category selection
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('name-asc')
  const [showAllInCatalogue, setShowAllInCatalogue] = useState<boolean>(false)

  // Precompute category product counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const p of products) {
      counts[p.categoryId] = (counts[p.categoryId] || 0) + 1
    }
    return counts
  }, [])

  // Featured 8 products for homepage
  const featuredProducts = useMemo(() => {
    return products.filter((p) => p.featured).slice(0, 8)
  }, [])

  // Category toggle handler for multi-select
  const handleToggleCategory = (catId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(catId)) {
        return prev.filter((id) => id !== catId)
      } else {
        return [...prev, catId]
      }
    })
    setShowAllInCatalogue(true)
  }

  const handleSelectAllCategories = () => {
    setSelectedCategories([])
  }

  const handleClearCategories = () => {
    setSelectedCategories([])
  }

  // Filtered catalogue products
  const filteredCatalogue = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          selectedCategories.length === 0 || selectedCategories.includes(p.categoryId)
        const nameToSearch = (language === 'te' ? p.nameTe + ' ' + p.nameEn : p.nameEn + ' ' + p.nameTe).toLowerCase()
        const matchesSearch =
          !searchQuery.trim() || nameToSearch.includes(searchQuery.toLowerCase().trim())
        return matchesCategory && matchesSearch
      })
      .sort((a, b) => {
        const nameA = language === 'te' ? a.nameTe : a.nameEn
        const nameB = language === 'te' ? b.nameTe : b.nameEn
        if (sortBy === 'name-asc') return nameA.localeCompare(nameB)
        if (sortBy === 'name-desc') return nameB.localeCompare(nameA)
        const priceA = Object.values(a.prices)[0] || 9999
        const priceB = Object.values(b.prices)[0] || 9999
        if (sortBy === 'price-asc') return priceA - priceB
        if (sortBy === 'price-desc') return priceB - priceA
        return 0
      })
  }, [selectedCategories, searchQuery, sortBy, language])

  // Limit initially displayed in catalogue unless expanded, searching, or filtering
  const displayedCatalogue = useMemo(() => {
    if (showAllInCatalogue || searchQuery.trim() || selectedCategories.length > 0) {
      return filteredCatalogue
    }
    return filteredCatalogue.slice(0, 8)
  }, [filteredCatalogue, showAllInCatalogue, searchQuery, selectedCategories])

  // Category card click handler: smoothly scroll to catalogue with that category active
  const handleCategoryCardClick = (catId: string) => {
    setSelectedCategories([catId])
    setShowAllInCatalogue(true)
    const el = document.querySelector('#catalogue')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="home-page-root">
      {/* 1. HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-container shell">
          <div className="hero-content-col">
            <span className="hero-eyebrow">
              <Sparkles size={14} className="eyebrow-icon" />
              <span>{t.hero.eyebrow}</span>
            </span>

            <h1 className="hero-main-title">
              {t.hero.headlineStart}{' '}
              <span className="hero-highlight">{t.hero.headlineHighlight}</span>
            </h1>

            <p className="hero-supporting-text">{t.hero.supporting}</p>

            <div className="hero-actions-group">
              <a href="#catalogue" className="button button-primary">
                <span>{t.hero.exploreProducts}</span>
                <ArrowRight size={17} />
              </a>

              <button
                type="button"
                className="button button-outline"
                onClick={() =>
                  openWhatsApp(
                    `Hello ${business.name}, I would like to order fresh South Indian sweets and snacks.`
                  )
                }
              >
                <MessageCircle size={17} />
                <span>{t.hero.orderWhatsApp}</span>
              </button>

              <button
                type="button"
                className="button button-ghost"
                onClick={callBusiness}
              >
                <Phone size={16} />
                <span>{t.hero.callUs}</span>
              </button>
            </div>

            <div className="hero-kitchen-note">
              <span className="hero-note-symbol">
                <Heart size={16} fill="currentColor" />
              </span>
              <div className="hero-note-text">
                <strong>{t.hero.noteTitle}</strong>
                <small>{t.hero.noteSub}</small>
              </div>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-image-frame">
              <img
                src="/images/hero-assortment.jpeg"
                alt="Festive assortment of authentic South Indian sweets and snacks on a brass thali"
                fetchPriority="high"
                className="hero-featured-image"
              />
              <div className="hero-authentic-stamp">
                <span className="stamp-line-1">{t.hero.stampText1}</span>
                <Heart size={18} fill="currentColor" className="stamp-heart" />
                <span className="stamp-line-2">{t.hero.stampText2}</span>
              </div>
              <div className="hero-floating-caption">{t.hero.badgeText}</div>
            </div>
          </div>
        </div>

        <a href="#promise" className="hero-scroll-cue" aria-label="Scroll down to discover more">
          <ChevronDown size={20} />
        </a>
      </section>

      {/* 2. WHY CHOOSE EAT MOVE GROW (4 Feature Cards) */}
      <section className="section-block promise-section" id="promise">
        <div className="shell">
          <div className="section-header-centered">
            <span className="section-eyebrow">{t.whyChoose.eyebrow}</span>
            <h2 className="section-title">{t.whyChoose.headline}</h2>
          </div>

          <div className="promise-cards-grid">
            <div className="promise-card">
              <div className="promise-icon-wrap">
                <Heart size={22} />
              </div>
              <h3>{t.whyChoose.card1Title}</h3>
              <p>{t.whyChoose.card1Desc}</p>
            </div>

            <div className="promise-card">
              <div className="promise-icon-wrap">
                <Sparkles size={22} />
              </div>
              <h3>{t.whyChoose.card2Title}</h3>
              <p>{t.whyChoose.card2Desc}</p>
            </div>

            <div className="promise-card">
              <div className="promise-icon-wrap">
                <Leaf size={22} />
              </div>
              <h3>{t.whyChoose.card3Title}</h3>
              <p>{t.whyChoose.card3Desc}</p>
            </div>

            <div className="promise-card">
              <div className="promise-icon-wrap">
                <PackageCheck size={22} />
              </div>
              <h3>{t.whyChoose.card4Title}</h3>
              <p>{t.whyChoose.card4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="section-block categories-section" id="categories">
        <div className="shell">
          <div className="section-header-centered">
            <span className="section-eyebrow">{t.categories.eyebrow}</span>
            <h2 className="section-title">{t.categories.headline}</h2>
            <p className="section-subtitle">{t.categories.supporting}</p>
          </div>

          <div className="categories-cards-grid">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onSelectCategory={handleCategoryCardClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (8 Products) */}
      <section className="section-block featured-products-section" id="products">
        <div className="shell">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow">{t.featured.eyebrow}</span>
              <h2 className="section-title">{t.featured.headline}</h2>
              <p className="section-subtitle">{t.featured.supporting}</p>
            </div>

            <button
              type="button"
              className="text-action-link"
              onClick={onOpenBulkOrder}
            >
              <span>{t.featured.customRequestPrompt}</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="product-catalog-grid">
            {featuredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={onSelectProduct}
              />
            ))}
          </div>

          <div className="section-footer-cta">
            <a href="#catalogue" className="button button-outline">
              <span>{t.featured.viewAllCatalogue}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. FESTIVAL & BULK ORDERS PROMOTIONAL SECTION */}
      <section className="bulk-promo-section" id="bulk-orders">
        <div className="bulk-promo-inner shell">
          <div className="bulk-promo-copy">
            <span className="bulk-promo-eyebrow">
              <Sparkles size={14} />
              <span>{t.bulkSection.eyebrow}</span>
            </span>

            <h2 className="bulk-promo-title">
              {t.bulkSection.headline}{' '}
              <em>{t.bulkSection.headlineHighlight}</em>
            </h2>

            <p className="bulk-promo-text">{t.bulkSection.description}</p>

            <button
              type="button"
              className="button button-gold-solid"
              onClick={onOpenBulkOrder}
            >
              <span>{t.bulkSection.cta}</span>
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="bulk-occasions-grid">
            <div className="occasion-item-card">
              <span className="occasion-index">01</span>
              <div>
                <h4>{t.bulkSection.festivalsTitle}</h4>
                <p>{t.bulkSection.festivalsSub}</p>
              </div>
            </div>

            <div className="occasion-item-card">
              <span className="occasion-index">02</span>
              <div>
                <h4>{t.bulkSection.celebrationsTitle}</h4>
                <p>{t.bulkSection.celebrationsSub}</p>
              </div>
            </div>

            <div className="occasion-item-card">
              <span className="occasion-index">03</span>
              <div>
                <h4>{t.bulkSection.giftingTitle}</h4>
                <p>{t.bulkSection.giftingSub}</p>
              </div>
            </div>

            <div className="occasion-item-card">
              <span className="occasion-index">04</span>
              <div>
                <h4>{t.bulkSection.corporateTitle}</h4>
                <p>{t.bulkSection.corporateSub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPLETE PRODUCT CATALOGUE WITH FILTERS */}
      <section className="section-block catalogue-section" id="catalogue">
        <div className="shell">
          <div className="section-header-centered">
            <span className="section-eyebrow">{t.catalogue.eyebrow}</span>
            <h2 className="section-title">{t.catalogue.headline}</h2>
            <p className="section-subtitle">{t.catalogue.supporting}</p>
          </div>

          <div className="catalogue-layout-container">
            {/* Left Sidebar Menu with Category Checkboxes */}
            <ProductFilters
              selectedCategories={selectedCategories}
              onToggleCategory={handleToggleCategory}
              onSelectAll={handleSelectAllCategories}
              onClearCategories={handleClearCategories}
              categoryCounts={categoryCounts}
              totalCount={products.length}
            />

            {/* Right Main Column with Toolbar, Active Chips, and Products */}
            <div className="catalogue-main-content">
              <CatalogueToolbar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalShowing={displayedCatalogue.length}
                totalAvailable={filteredCatalogue.length}
              />

              {/* Active Filter Chips */}
              {selectedCategories.length > 0 && (
                <div className="active-filters-bar" aria-label="Active category filters">
                  <span className="active-filters-label">
                    {language === 'te' ? 'ఎంపిక చేసిన వర్గాలు:' : 'Active filters:'}
                  </span>
                  <div className="active-filter-chips-list">
                    {selectedCategories.map((catId) => {
                      const cat = categories.find((c) => c.id === catId)
                      if (!cat) return null
                      const label = language === 'te' ? cat.nameTe : cat.nameEn
                      return (
                        <button
                          key={catId}
                          type="button"
                          className="active-filter-chip"
                          onClick={() => handleToggleCategory(catId)}
                          title={language === 'te' ? `${label} తీసివేయి` : `Remove ${label}`}
                        >
                          <span>{label}</span>
                          <X size={13} className="chip-remove-icon" />
                        </button>
                      )
                    })}
                    <button
                      type="button"
                      className="active-filters-clear-btn"
                      onClick={handleClearCategories}
                    >
                      {t.catalogue.clearFilters}
                    </button>
                  </div>
                </div>
              )}

              <ProductGrid
                products={displayedCatalogue}
                onSelect={onSelectProduct}
                emptyMessage={t.catalogue.emptyState}
              />

              {!showAllInCatalogue &&
                !searchQuery.trim() &&
                selectedCategories.length === 0 &&
                filteredCatalogue.length > 8 && (
                  <div className="section-footer-cta">
                    <button
                      type="button"
                      className="button button-outline"
                      onClick={() => setShowAllInCatalogue(true)}
                    >
                      <span>
                        {t.catalogue.showAll} ({products.length})
                      </span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT US SECTION */}
      <section className="section-block about-heritage-section" id="about">
        <div className="about-grid-wrapper shell">
          <div className="about-visual-column">
            <div className="about-image-frame">
              <img
                src="/images/kitchen-prep.jpeg"
                alt="Traditional brass uruli sweet preparation in a home kitchen"
                loading="lazy"
                className="about-kitchen-image"
              />
              <div className="about-heritage-seal">
                <span>{t.about.sealText1}</span>
                <strong>{t.about.sealText2}</strong>
                <Heart size={14} fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="about-story-column">
            <span className="section-eyebrow">{t.about.eyebrow}</span>
            <h2 className="section-title">
              {t.about.headline} <em>{t.about.headlineHighlight}</em>
            </h2>

            <div className="about-narrative-paragraphs">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="about-action-row">
              <a href="#contact" className="button button-outline">
                <span>{t.about.cta}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="section-block testimonials-section">
        <div className="shell">
          <div className="section-header-centered">
            <span className="section-eyebrow">{t.testimonials.eyebrow}</span>
            <h2 className="section-title">{t.testimonials.headline}</h2>
            <span className="sample-disclaimer-pill">
              <Award size={13} />
              <span>{t.testimonials.sampleBadge}</span>
            </span>
          </div>

          <div className="testimonials-cards-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <p className="testimonials-footnote">{t.testimonials.disclaimer}</p>
        </div>
      </section>

      {/* 10. CONTACT US SECTION (DIRECT CTAs + FORM) */}
      <section className="section-block contact-enquiry-section" id="contact">
        <div className="contact-grid-wrapper shell">
          {/* Direct Contact Methods */}
          <div className="contact-info-column">
            <span className="section-eyebrow">{t.enquiryForm.sectionEyebrow}</span>
            <h2 className="section-title">
              {t.enquiryForm.sectionHeadline}{' '}
              <em>{t.enquiryForm.sectionHeadlineHighlight}</em>
            </h2>
            <p className="contact-column-desc">{t.enquiryForm.sectionDesc}</p>

            <div className="contact-channels-list">
              <button
                type="button"
                className="channel-card-btn"
                onClick={() =>
                  openWhatsApp(
                    `Hello ${business.name}, I would like to place an order or ask a question.`
                  )
                }
              >
                <div className="channel-icon-circle is-whatsapp">
                  <MessageCircle size={20} />
                </div>
                <div className="channel-text-meta">
                  <small>{t.enquiryForm.chatWhatsAppTitle}</small>
                  <strong>WhatsApp ({business.whatsappNumber})</strong>
                </div>
                <ArrowRight size={17} className="channel-arrow" />
              </button>

              <button
                type="button"
                className="channel-card-btn"
                onClick={callBusiness}
              >
                <div className="channel-icon-circle is-phone">
                  <Phone size={20} />
                </div>
                <div className="channel-text-meta">
                  <small>{t.enquiryForm.callUsTitle}</small>
                  <strong>{business.phone}</strong>
                </div>
                <ArrowRight size={17} className="channel-arrow" />
              </button>

              <a href={`mailto:${business.email}`} className="channel-card-btn">
                <div className="channel-icon-circle is-email">
                  <span>✉</span>
                </div>
                <div className="channel-text-meta">
                  <small>{t.enquiryForm.dropNoteTitle}</small>
                  <strong>{business.email}</strong>
                </div>
                <ArrowRight size={17} className="channel-arrow" />
              </a>
            </div>
          </div>

          {/* Interactive Enquiry Form */}
          <div className="contact-form-column">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  )
}
