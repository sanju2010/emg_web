import React, { useState } from 'react'
import { MessageCircle, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { validateEnquiry, type EnquiryValidationErrors } from '../../utils/validation'
import { openWhatsApp } from '../../utils/whatsapp'
import { business } from '../../config/business'

interface EnquiryFormProps {
  initialProduct?: string
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialProduct = '' }) => {
  const { language, t } = useLanguage()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [product, setProduct] = useState(initialProduct)
  const [quantity, setQuantity] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<EnquiryValidationErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { isValid, errors: valErrors } = validateEnquiry({
      name,
      phone,
      email: email || undefined,
      lang: language,
    })

    if (!isValid) {
      setErrors(valErrors)
      return
    }

    setErrors({})
    setSubmitted(true)

    // Build the formatted WhatsApp message
    const lines = [
      `Hello ${business.name}, I would like to place an enquiry for homemade sweets/snacks:`,
      `• Name: ${name.trim()}`,
      `• Mobile: ${phone.trim()}`,
    ]
    if (email.trim()) lines.push(`• Email: ${email.trim()}`)
    if (product.trim()) lines.push(`• Product Interested In: ${product.trim()}`)
    if (quantity.trim()) lines.push(`• Quantity: ${quantity.trim()}`)
    if (message.trim()) lines.push(`• Notes / Special Requests: ${message.trim()}`)
    lines.push(`Please share the current pricing, package sizes, and delivery timeline. Thank you!`)

    openWhatsApp(lines.join('\n'))
  }

  return (
    <div className="enquiry-card-wrapper">
      <div className="enquiry-header">
        <span className="enquiry-badge">{t.enquiryForm.formHeadingBadge}</span>
        <h3 className="enquiry-heading">{t.enquiryForm.formHeadingTitle}</h3>
        <p className="enquiry-subtext">{t.enquiryForm.formHeadingDesc}</p>
      </div>

      {submitted && (
        <div className="form-feedback-alert is-success" role="status">
          <CheckCircle size={18} />
          <span>{t.enquiryForm.successNotice}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="site-enquiry-form">
        <div className="form-fields-grid">
          {/* Customer Name */}
          <div className="form-group">
            <label htmlFor="enquiry-name">{t.enquiryForm.nameLabel}</label>
            <input
              id="enquiry-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.enquiryForm.namePlaceholder}
              className={errors.name ? 'has-error' : ''}
            />
            {errors.name && (
              <span className="field-error-text" role="alert">
                <AlertCircle size={13} /> {errors.name}
              </span>
            )}
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label htmlFor="enquiry-phone">{t.enquiryForm.phoneLabel}</label>
            <input
              id="enquiry-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.enquiryForm.phonePlaceholder}
              className={errors.phone ? 'has-error' : ''}
            />
            {errors.phone && (
              <span className="field-error-text" role="alert">
                <AlertCircle size={13} /> {errors.phone}
              </span>
            )}
          </div>
        </div>

        <div className="form-fields-grid">
          {/* Email (Optional) */}
          <div className="form-group">
            <label htmlFor="enquiry-email">
              {t.enquiryForm.emailLabel} <small>{t.enquiryForm.optional}</small>
            </label>
            <input
              id="enquiry-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.enquiryForm.emailPlaceholder}
              className={errors.email ? 'has-error' : ''}
            />
            {errors.email && (
              <span className="field-error-text" role="alert">
                <AlertCircle size={13} /> {errors.email}
              </span>
            )}
          </div>

          {/* Product Interested In */}
          <div className="form-group">
            <label htmlFor="enquiry-product">{t.enquiryForm.productLabel}</label>
            <input
              id="enquiry-product"
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder={t.enquiryForm.productPlaceholder}
            />
          </div>
        </div>

        {/* Quantity */}
        <div className="form-group">
          <label htmlFor="enquiry-qty">
            {t.enquiryForm.quantityLabel} <small>{t.enquiryForm.optional}</small>
          </label>
          <input
            id="enquiry-qty"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder={t.enquiryForm.quantityPlaceholder}
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="enquiry-message">{t.enquiryForm.messageLabel}</label>
          <textarea
            id="enquiry-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.enquiryForm.messagePlaceholder}
          />
        </div>

        <button type="submit" className="button button-primary button-full">
          <span>{t.enquiryForm.submitButton}</span>
          <MessageCircle size={18} />
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  )
}
