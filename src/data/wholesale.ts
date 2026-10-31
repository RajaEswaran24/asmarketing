import { WholesaleService, WhyChoosePoint, GalleryPhoto } from '../types';

export const WHOLESALE_SERVICES: WholesaleService[] = [
  {
    id: 'mobile-wholesale',
    title: 'ITEL MOBILE WHOLESALE',
    subtitle: 'Smartphones & Feature Phones',
    description: 'Explore available itel smartphone and feature phone models with verified specifications and immediate stock availability for retailers.',
    iconName: 'Smartphone',
    features: [
      'Latest 5G and 4G itel smartphones',
      'High-demand keypad and feature phone stock',
      'Original manufacturer sealed units',
      'Consistent product availability for shop owners'
    ]
  },
  {
    id: 'accessories-wholesale',
    title: 'MOBILE ACCESSORIES',
    subtitle: 'Fast Turnaround Products',
    description: 'Find available mobile accessories and essential products including high-power chargers, fast charging cables, power banks, and audio headsets.',
    iconName: 'Headphones',
    features: [
      'Dual port fast chargers & certified adapters',
      'Tangle-free braided Type-C & USB cables',
      'High-capacity 10,000mAh & 20,000mAh power banks',
      'TWS earbuds, neckbands, and Bluetooth speakers'
    ]
  },
  {
    id: 'bulk-orders',
    title: 'BULK ORDER ENQUIRIES',
    subtitle: 'Competitive Wholesale Tiers',
    description: 'Connect with us for bulk purchase requirements. Whether you run a single retail counter or a regional multi-outlet chain, we cater to all volume needs.',
    iconName: 'Package',
    features: [
      'Tiered wholesale pricing based on order quantity',
      'Flexible assortment mixing (mobiles + accessories)',
      'Direct order processing via WhatsApp & phone',
      'Quick invoice and immediate dispatch preparation'
    ]
  },
  {
    id: 'retailer-support',
    title: 'RETAILER SUPPORT',
    subtitle: 'Dedicated Business Assistance',
    description: 'Contact us for product availability and wholesale enquiries. We support local shop owners with prompt stock updates, new launch info, and local assistance.',
    iconName: 'Users',
    features: [
      'Instant stock & price quotation on WhatsApp',
      'Guidance on high-velocity models in Ramanathapuram',
      'Convenient local collection or delivery arrangements',
      'Hassle-free brand warranty coordination'
    ]
  }
];

export const WHY_CHOOSE_POINTS: WhyChoosePoint[] = [
  {
    title: 'Wholesale-Focused Mobile Business',
    description: 'Dedicated entirely to B2B mobile supply, ensuring retail shop owners receive attentive wholesale service without retail distractions.',
    iconName: 'Store'
  },
  {
    title: 'itel Mobile Phone Product Range',
    description: 'Comprehensive inventory across latest itel 5G smartphones, feature phones, and UPI-enabled keypad devices ready for retail display.',
    iconName: 'Smartphone'
  },
  {
    title: 'Mobile Accessories Availability',
    description: 'One-stop sourcing for fast chargers, braided charging cables, high-capacity power banks, and wireless audio equipment.',
    iconName: 'BatteryCharging'
  },
  {
    title: 'Bulk Purchase Enquiries',
    description: 'Open to both small starter batch orders for emerging shops and large quantity consignments for established mobile showrooms.',
    iconName: 'Layers'
  },
  {
    title: 'Cash and UPI Payment Options',
    description: 'Smooth business transactions with versatile payment support including Cash and all major UPI platforms (GPay, PhonePe, Paytm, BHIM).',
    iconName: 'CreditCard'
  },
  {
    title: 'Convenient Ramanathapuram Location',
    description: 'Easily accessible store located at Bharathinagar, Bhagat Singh Road, Ramanathapuram – enabling convenient stock pickups and fast dispatch.',
    iconName: 'MapPin'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'store-exterior',
    title: 'Store Front & Glass Signage',
    caption: 'Official AS Marketing wholesale store front in Bharathinagar, Ramanathapuram featuring transparent glass branding and direct dealer contact details.',
    src: '/gallery/as_store_front.jpg',
    tag: 'Physical Storefront'
  },
  {
    id: 'banner-signage',
    title: 'AS Marketing Wholesale Signage',
    caption: 'In-store wholesale branding banner highlighting itel mobile phone distribution, audio accessories, and genuine products display.',
    src: '/gallery/as_banner_signage.jpg',
    tag: 'Store Signage'
  }
];
