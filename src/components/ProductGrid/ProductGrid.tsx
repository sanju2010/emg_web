import React from 'react'
import type { Product } from '../../data/products'
import { ProductCard } from '../ProductCard/ProductCard'

interface ProductGridProps {
  products: Product[]
  onSelect: (product: Product) => void
  emptyMessage?: string
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onSelect,
  emptyMessage,
}) => {
  if (products.length === 0) {
    return (
      <div className="product-grid-empty" role="status">
        <p>{emptyMessage || 'No treats found in this selection.'}</p>
      </div>
    )
  }

  return (
    <div className="product-catalog-grid" role="region" aria-label="Products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  )
}
