import { business } from '../config/business'

export function cleanPhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}

export function cleanWhatsAppNumber(number: string): string {
  return number.replace(/\D/g, '')
}

export function whatsappUrl(message: string): string {
  const number = cleanWhatsAppNumber(business.whatsappNumber)
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message: string): void {
  const url = whatsappUrl(message)
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function callBusiness(): void {
  const phone = cleanPhone(business.rawPhone || business.phone)
  window.location.href = `tel:${phone}`
}

export interface ProductEnquiryParams {
  productName: string
  category?: string
  packageSize?: string
  price?: number | string
}

export function createProductEnquiry({ productName, packageSize, price }: ProductEnquiryParams): string {
  let msg = `Hello ${business.name}, I am interested in ordering ${productName}.`
  if (packageSize && price) {
    msg += ` Selected package: ${packageSize} (${typeof price === 'number' ? `₹${price}` : price}).`
  }
  msg += ` Please share the available quantities and pricing details.`
  return msg
}

export function productEnquiry(name: string): string {
  return createProductEnquiry({ productName: name })
}

export interface BulkOrderEnquiryParams {
  name: string
  phone: string
  eventType: string
  quantity: string
  date?: string
  message?: string
}

export function createBulkOrderEnquiry({
  name,
  phone,
  eventType,
  quantity,
  date,
  message,
}: BulkOrderEnquiryParams): string {
  const lines = [
    `Hello ${business.name}, I would like to enquire about a Bulk / Festival Order.`,
    `Name: ${name}`,
    `Mobile: ${phone}`,
    `Occasion / Event: ${eventType}`,
    `Approximate Quantity: ${quantity}`,
  ]
  if (date) {
    lines.push(`Required Date: ${date}`)
  }
  if (message) {
    lines.push(`Special Requests / Details: ${message}`)
  }
  lines.push(`Please share the menu options, availability, and pricing. Thank you!`)
  return lines.join('\n')
}

export interface CartOrderItem {
  name: string
  packageSize: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface CartOrderParams {
  customerName: string
  customerPhone: string
  deliveryAddress?: string
  notes?: string
  items: CartOrderItem[]
  totalAmount: number
}

export function createCartOrderMessage({
  customerName,
  customerPhone,
  deliveryAddress,
  notes,
  items,
  totalAmount,
}: CartOrderParams): string {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const lines: string[] = [
    `🛒 *NEW ORDER - ${business.name}*`,
    `--------------------------------`,
    `👤 *Customer Name:* ${customerName.trim()}`,
    `📱 *Mobile / WhatsApp:* ${customerPhone.trim()}`,
  ]

  if (deliveryAddress && deliveryAddress.trim()) {
    lines.push(`📍 *Delivery Address:* ${deliveryAddress.trim()}`)
  }

  lines.push(`--------------------------------`)
  lines.push(`📦 *Ordered Items (${totalQuantity} item${totalQuantity === 1 ? '' : 's'}):*`)

  items.forEach((item, index) => {
    lines.push(
      `${index + 1}. *${item.name}* (${item.packageSize}) x ${item.quantity} = ₹${item.totalPrice}`
    )
  })

  lines.push(`--------------------------------`)
  lines.push(`💰 *Total Amount:* ₹${totalAmount}`)

  if (notes && notes.trim()) {
    lines.push(`📝 *Special Instructions:* ${notes.trim()}`)
  }

  lines.push(`--------------------------------`)
  lines.push(`Please confirm this order, estimated delivery timeline, and share UPI/payment details. Thank you! 🙏`)

  return lines.join('\n')
}
