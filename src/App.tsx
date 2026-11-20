import { useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { HomePage } from './pages/Home/HomePage'
import { ProductModal } from './components/ProductModal/ProductModal'
import { BulkOrderModal } from './components/BulkOrderModal/BulkOrderModal'
import { CartDrawer } from './components/CartDrawer/CartDrawer'
import { FloatingCartButton } from './components/FloatingCartButton/FloatingCartButton'
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton'
import { CallButton } from './components/CallButton/CallButton'
import LegalPage from './pages/LegalPage'
import type { Product } from './data/products'
import './styles/index.css'

function MainContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isBulkOrderOpen, setIsBulkOrderOpen] = useState<boolean>(false)

  // Simple client route handling for legal pages
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/privacy-policy') return <LegalPage kind="privacy" />
  if (path === '/terms-of-use') return <LegalPage kind="terms" />

  return (
    <div className="site-wrapper">
      {/* Sticky Header with Bilingual Switcher & Cart Trigger */}
      <Header onOpenBulkOrder={() => setIsBulkOrderOpen(true)} />

      {/* Main Home Page Content with All Core Sections */}
      <HomePage
        onSelectProduct={setSelectedProduct}
        onOpenBulkOrder={() => setIsBulkOrderOpen(true)}
      />

      {/* Global Footer */}
      <Footer />

      {/* Product Details Modal with Size & Add to Cart */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Festival & Bulk Order Enquiry Modal */}
      <BulkOrderModal
        isOpen={isBulkOrderOpen}
        onClose={() => setIsBulkOrderOpen(false)}
      />

      {/* Slide-out Order Cart Drawer */}
      <CartDrawer />

      {/* Floating Bottom Cart Bar (active when cart has items) */}
      <FloatingCartButton />

      {/* Floating Action Buttons */}
      <WhatsAppButton />
      <CallButton />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </LanguageProvider>
  )
}
