import React from 'react'
import { Star, Heart } from 'lucide-react'
import type { Testimonial } from '../../data/testimonials'
import { useLanguage } from '../../i18n/LanguageContext'

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const { language } = useLanguage()

  const name = language === 'te' ? testimonial.nameTe : testimonial.nameEn
  const location = language === 'te' ? testimonial.locationTe : testimonial.locationEn
  const occasion = language === 'te' ? testimonial.occasionTe : testimonial.occasionEn
  const quote = language === 'te' ? testimonial.quoteTe : testimonial.quoteEn

  return (
    <article className="testimonial-card-item">
      <div className="testimonial-stars-row" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={15} className="star-filled" fill="currentColor" />
        ))}
      </div>

      <blockquote className="testimonial-quote-text">
        "{quote}"
      </blockquote>

      <div className="testimonial-author-meta">
        <div className="testimonial-avatar-symbol">
          <Heart size={14} fill="currentColor" />
        </div>
        <div className="testimonial-author-info">
          <cite className="testimonial-author-name">{name}</cite>
          <span className="testimonial-occasion-tag">
            {occasion} · {location}
          </span>
        </div>
      </div>
    </article>
  )
}
