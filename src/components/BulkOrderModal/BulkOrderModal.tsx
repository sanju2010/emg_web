import React, { useState } from 'react'
import { X, MessageCircle, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { validateBulkOrder, type BulkOrderValidationErrors } from '../../utils/validation'
import { openWhatsApp, createBulkOrderEnquiry } from '../../utils/whatsapp'

interface BulkOrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export const BulkOrderModal: React.FC<BulkOrderModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [eventType, setEventType] = useState('')
  const [quantity, setQuantity] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<BulkOrderValidationErrors>({})
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const eventOptions = [
    { value: 'Diwali Celebration', labelEn: 'Diwali Festival (దీపావళి)', labelTe: 'దీపావళి పండుగ' },
    { value: 'Sankranti Festival', labelEn: 'Sankranti Festival (సంక్రాంతి)', labelTe: 'సంక్రాంతి పండుగ' },
    { value: 'Ugadi Festival', labelEn: 'Ugadi Festival (ఉగాది)', labelTe: 'ఉగాది పండుగ' },
    { value: 'Wedding & Reception', labelEn: 'Wedding / Reception (వివాహం)', labelTe: 'వివాహ వేడుక' },
    { value: 'Birthday Party', labelEn: 'Birthday Celebration (పుట్టినరోజు)', labelTe: 'పుట్టినరోజు వేడుక' },
    { value: 'Family Function / Pooja', labelEn: 'Family Function / Pooja (పూజ / శుభకార్యం)', labelTe: 'కుటుంబ వేడుక / పూజ' },
    { value: 'Corporate Gifting', labelEn: 'Corporate Gifting (కార్పొరేట్ బహుమతులు)', labelTe: 'కార్పొరేట్ బహుమతులు' },
    { value: 'Other Gathering', labelEn: 'Other Special Gathering (ఇతర సందర్భాలు)', labelTe: 'ఇతర సందర్భాలు' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { isValid, errors: valErrors } = validateBulkOrder({
      name,
      phone,
      eventType,
      quantity,
      lang: language,
    })

    if (!isValid) {
      setErrors(valErrors)
      return
    }

    setErrors({})
    setSubmitted(true)

    const whatsappMessage = createBulkOrderEnquiry({
      name,
      phone,
      eventType,
      quantity,
      date: date || undefined,
      message: message || undefined,
    })

    openWhatsApp(whatsappMessage)
  }

  return (
    <div
      className="modal-backdrop-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bulk-modal-title"
      onClick={onClose}
    >
      <div className="bulk-order-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-icon-btn"
          aria-label={t.productModal.close}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="bulk-modal-header">
          <span className="bulk-modal-badge">
            <Sparkles size={14} />
            <span>EAT MOVE GROW</span>
          </span>
          <h2 id="bulk-modal-title">{t.bulkModal.title}</h2>
          <p>{t.bulkModal.subtitle}</p>
        </div>

        {submitted ? (
          <div className="bulk-modal-success" role="status">
            <CheckCircle size={44} className="success-icon" />
            <h3>{language === 'te' ? 'విచారణ సిద్ధమైంది!' : 'Enquiry Prepared!'}</h3>
            <p>{t.bulkModal.successNotice}</p>
            <button
              type="button"
              className="button button-primary"
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
            >
              {language === 'te' ? 'సరే, ముగించు' : 'Done / Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="bulk-modal-form">
            <div className="form-fields-grid">
              {/* Customer Name */}
              <div className="form-group">
                <label htmlFor="bulk-name">{t.bulkModal.nameLabel}</label>
                <input
                  id="bulk-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.bulkModal.namePlaceholder}
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
                <label htmlFor="bulk-phone">{t.bulkModal.phoneLabel}</label>
                <input
                  id="bulk-phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.bulkModal.phonePlaceholder}
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
              {/* Event Type */}
              <div className="form-group">
                <label htmlFor="bulk-event">{t.bulkModal.eventLabel}</label>
                <select
                  id="bulk-event"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className={errors.eventType ? 'has-error' : ''}
                >
                  <option value="">-- {t.bulkModal.eventSelectPlaceholder} --</option>
                  {eventOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {language === 'te' ? opt.labelTe : opt.labelEn}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <span className="field-error-text" role="alert">
                    <AlertCircle size={13} /> {errors.eventType}
                  </span>
                )}
              </div>

              {/* Quantity */}
              <div className="form-group">
                <label htmlFor="bulk-qty">{t.bulkModal.quantityLabel}</label>
                <input
                  id="bulk-qty"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder={t.bulkModal.quantityPlaceholder}
                  className={errors.quantity ? 'has-error' : ''}
                />
                {errors.quantity && (
                  <span className="field-error-text" role="alert">
                    <AlertCircle size={13} /> {errors.quantity}
                  </span>
                )}
              </div>
            </div>

            {/* Delivery Date */}
            <div className="form-group">
              <label htmlFor="bulk-date">{t.bulkModal.dateLabel}</label>
              <input
                id="bulk-date"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder={t.bulkModal.datePlaceholder}
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="bulk-msg">{t.bulkModal.messageLabel}</label>
              <textarea
                id="bulk-msg"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.bulkModal.messagePlaceholder}
              />
            </div>

            <p className="bulk-note-text">{t.bulkModal.note}</p>

            <button type="submit" className="button button-primary button-full">
              <MessageCircle size={18} />
              <span>{t.bulkModal.submitButton}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
