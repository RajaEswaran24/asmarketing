export const BUSINESS_CONFIG = {
  name: 'AS MARKETING MOBILE ACCESSORIES',
  shortName: 'AS Marketing',
  legalName: 'AS Marketing Mobile Accessories (Wholesale Dealership)',
  tagline: 'Your Wholesale Partner for itel Mobiles & Accessories',
  motto: 'Smarter Sourcing. Better Wholesale Opportunities.',
  
  // Location & Address
  address: {
    line1: '7/576, Bharathinagar, Bhagat Singh Road',
    line2: 'Bharathinagar Rmn',
    city: 'Ramanathapuram',
    pincode: '623503',
    state: 'Tamil Nadu',
    country: 'India',
    fullFormatted: '7/576, Bharathinagar, Bhagat Singh Road, Bharathinagar Rmn, Ramanathapuram – 623503, Tamil Nadu, India'
  },

  // Contact Numbers (From physical shop signage)
  phones: [
    { label: 'Primary Contact', number: '+91 78456 72537', raw: '7845672537' },
    { label: 'Secondary Contact', number: '+91 76399 41997', raw: '7639941997' }
  ],

  // Central WhatsApp Configuration
  // Used across all enquiry buttons, floating button, and wholesale order submissions
  whatsapp: {
    countryCode: '91',
    phoneNumber: '7845672537', // Default active shop number
    formatted: '+91 78456 72537',
    defaultMessage: 'Hello AS Marketing, I am interested in purchasing itel mobile phones and accessories at wholesale prices. Please share the available products and wholesale details.'
  },

  // Business Hours (Configurable)
  timings: {
    weekdays: 'Monday – Saturday: 9:30 AM – 8:30 PM',
    sunday: 'Sunday: 10:00 AM – 6:00 PM (Wholesale Appointments & Enquiries)',
    currentStatus: 'Open Today for Retailers & Bulk Orders'
  },

  // Established & Statutory
  yearEstablished: 2024,
  businessType: 'Independent Wholesale Distributor & Dealership',
  paymentModes: ['Cash', 'UPI (GPay / PhonePe / Paytm / BHIM)'],

  // Google Maps Directions
  maps: {
    searchQuery: 'AS Marketing Mobile Accessories Bharathinagar Ramanathapuram Tamil Nadu 623503',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=7/576,+Bharathinagar,+Bhagat+Singh+Road,+Bharathinagar+Rmn,+Ramanathapuram+-+623503,+Tamil+Nadu'
  },

  // Target Audience
  targetAudience: [
    'Mobile Phone Retailers',
    'Mobile Shop Owners',
    'Mobile Accessories Retailers',
    'Regional Mobile Dealers',
    'Bulk Purchasers & Enterprise Buyers'
  ],

  // Independent Wholesale Disclaimer
  disclaimer: 'AS Marketing Mobile Accessories is an independent wholesale business based in Ramanathapuram, Tamil Nadu, India. We specialize in supplying genuine itel smartphones, feature phones, and original mobile accessories directly to retail businesses and bulk purchasers. We are an independent commercial entity and not the official corporate website of itel Mobile.'
};

/**
 * Builds a direct WhatsApp click-to-chat URL with prefilled text
 */
export function buildWhatsAppLink(customMessage?: string, phoneNumber = BUSINESS_CONFIG.whatsapp.phoneNumber): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const fullPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  const text = encodeURIComponent(customMessage || BUSINESS_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${fullPhone}?text=${text}`;
}

/**
 * Builds a product-specific WhatsApp wholesale enquiry link
 */
export function buildProductEnquiryLink(productName: string, category?: string): string {
  const msg = `Hello AS Marketing! I am a mobile retailer/dealer interested in wholesale pricing for:
📌 Product: ${productName}
📦 Category: ${category || 'itel Wholesale'}
📍 Location: Ramanathapuram / Tamil Nadu

Please share wholesale tier pricing, minimum order quantity (MOQ), and stock availability. Thank you!`;
  return buildWhatsAppLink(msg);
}
