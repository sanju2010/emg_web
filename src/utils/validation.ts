// Form validation utilities

export function isIndianMobile(phone: string): boolean {
  // Strip all non-digit characters
  const clean = phone.replace(/\D/g, '')
  // Validates:
  // - 10 digits starting with 6, 7, 8, or 9 (standard Indian mobile)
  // - 12 digits starting with 91 followed by 6-9 and 9 digits
  // - 11 digits starting with 0 followed by 6-9 and 9 digits
  if (/^[6-9]\d{9}$/.test(clean)) return true
  if (/^91[6-9]\d{9}$/.test(clean)) return true
  if (/^0[6-9]\d{9}$/.test(clean)) return true
  return false
}

export function isEmail(email: string): boolean {
  if (!email) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export interface EnquiryValidationErrors {
  name?: string
  phone?: string
  email?: string
}

export function validateEnquiry({
  name,
  phone,
  email,
  lang = 'en',
}: {
  name: string
  phone: string
  email?: string
  lang?: 'en' | 'te'
}): { isValid: boolean; errors: EnquiryValidationErrors } {
  const errors: EnquiryValidationErrors = {}

  if (!name || !name.trim()) {
    errors.name = lang === 'te' ? 'దయచేసి మీ పేరును నమోదు చేయండి.' : 'Please enter your name.'
  }

  if (!phone || !phone.trim()) {
    errors.phone = lang === 'te' ? 'దయచేసి మీ మొబైల్ నంబర్‌ను నమోదు చేయండి.' : 'Please enter your mobile number.'
  } else if (!isIndianMobile(phone)) {
    errors.phone = lang === 'te' ? 'దయచేసి సరైన 10-అంకెల భారతీయ మొబైల్ నంబర్‌ను నమోదు చేయండి.' : 'Please enter a valid 10-digit Indian mobile number.'
  }

  if (email && email.trim() && !isEmail(email)) {
    errors.email = lang === 'te' ? 'దయచేసి సరైన ఈమెయిల్ చిరునామాను నమోదు చేయండి.' : 'Please enter a valid email address.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export interface BulkOrderValidationErrors {
  name?: string
  phone?: string
  eventType?: string
  quantity?: string
}

export function validateBulkOrder({
  name,
  phone,
  eventType,
  quantity,
  lang = 'en',
}: {
  name: string
  phone: string
  eventType: string
  quantity: string
  lang?: 'en' | 'te'
}): { isValid: boolean; errors: BulkOrderValidationErrors } {
  const errors: BulkOrderValidationErrors = {}

  if (!name || !name.trim()) {
    errors.name = lang === 'te' ? 'దయచేసి మీ పేరును నమోదు చేయండి.' : 'Please enter your name.'
  }

  if (!phone || !phone.trim()) {
    errors.phone = lang === 'te' ? 'దయచేసి మీ మొబైల్ నంబర్‌ను నమోదు చేయండి.' : 'Please enter your mobile number.'
  } else if (!isIndianMobile(phone)) {
    errors.phone = lang === 'te' ? 'దయచేసి సరైన 10-అంకెల భారతీయ మొబైల్ నంబర్‌ను నమోదు చేయండి.' : 'Please enter a valid 10-digit Indian mobile number.'
  }

  if (!eventType || !eventType.trim()) {
    errors.eventType = lang === 'te' ? 'దయచేసి వేడుక లేదా సందర్భాన్ని ఎంచుకోండి.' : 'Please select an event type.'
  }

  if (!quantity || !quantity.trim()) {
    errors.quantity = lang === 'te' ? 'దయచేసి సుమారు పరిమాణాన్ని నమోదు చేయండి.' : 'Please enter approximate quantity.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
