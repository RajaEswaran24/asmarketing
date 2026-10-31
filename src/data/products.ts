import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ================= SMARTPHONES =================
  {
    id: 'itel-color-pro-5g',
    name: 'itel Color Pro 5G',
    category: 'smartphones',
    subCategory: '5G Smartphone',
    badge: 'NEW 5G LAUNCH',
    tagline: 'Next-Gen 5G with IVCO Color Change Technology',
    image: '/products/color_pro_5g.jpg',
    specs: [
      { label: 'Processor', value: 'MediaTek Dimensity 6080 5G (6nm)' },
      { label: 'Display', value: '6.6" HD+ 90Hz Smooth Punch-Hole' },
      { label: 'Camera', value: '50MP AI Dual Rear Camera' },
      { label: 'Battery', value: '5000 mAh + 18W Fast Charging Type-C' },
      { label: 'Storage & RAM', value: '128GB ROM | Up to 12GB RAM (Fusion)' },
      { label: 'Connectivity', value: 'NR 5G Dual SIM + VoNR' }
    ],
    highlights: [
      'IVCO Photolithography Color-Changing Back Panel',
      'Dual 5G Standby with Dimensity 6080 High-Speed Processor',
      '50MP Ultra Clear AI Camera with Super Night Mode',
      'Side-Mounted Fingerprint & Face Unlock Security'
    ],
    inStock: true,
    warranty: '100 Days Free Screen Replacement + 1 Year Warranty',
    verified: true
  },
  {
    id: 'itel-s24',
    name: 'itel S24',
    category: 'smartphones',
    subCategory: 'Camera Smartphone',
    badge: '108MP FLAGSHIP CAMERA',
    tagline: '108MP Ultra-Clear Masterpiece with 3X In-Sensor Zoom',
    image: '/products/s24.jpg',
    specs: [
      { label: 'Processor', value: 'MediaTek Helio G91 Ultra Octa-Core' },
      { label: 'Display', value: '6.6" 90Hz Punch-Hole with Dynamic Bar' },
      { label: 'Camera', value: '108MP Samsung ISOCELL Sensor + 3X Zoom' },
      { label: 'Battery', value: '5000 mAh with 18W Type-C Fast Charge' },
      { label: 'Storage & RAM', value: '128GB ROM | Up to 16GB RAM (Fusion)' },
      { label: 'OS', value: 'itel OS 13.5 (Android 13)' }
    ],
    highlights: [
      '108MP Ultra-Clear Photography with 3X Lossless Zoom',
      'Color-Changing Texture Finish under Sunlight',
      'Dynamic Bar for Instant Notifications & Battery Status',
      'Dual Stereo Speakers with DTS Audio Enhancement'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-s23-plus',
    name: 'itel S23+',
    category: 'smartphones',
    subCategory: 'Curved AMOLED Flagship',
    badge: '3D CURVED AMOLED',
    tagline: 'India’s Most Accessible 3D Curved AMOLED Smartphone',
    image: '/products/s23_plus.jpg',
    specs: [
      { label: 'Display', value: '6.78" FHD+ 3D Curved AMOLED (Gorilla Glass 5)' },
      { label: 'Front Camera', value: '32MP AI Glowing Selfie Camera' },
      { label: 'Rear Camera', value: '50MP Super Night AI Camera' },
      { label: 'Battery', value: '5000 mAh + 18W Type-C Fast Charging' },
      { label: 'Storage & RAM', value: '256GB UFS 2.2 ROM | 16GB RAM (8+8 Fusion)' },
      { label: 'Security', value: 'In-Display Fingerprint Sensor' }
    ],
    highlights: [
      '59° Golden Curvature 3D AMOLED Display',
      'Corning Gorilla Glass 5 Toughened Protection',
      'In-Display Fingerprint Sensor in Segment',
      'Sleek 7.9mm Ultra-Slim Aesthetic Profile'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-p55-plus',
    name: 'itel P55+ / P55 5G',
    category: 'smartphones',
    subCategory: 'Speed & Battery',
    badge: '45W POWERCHARGE',
    tagline: '45W Super-Fast Charging Powerhouse with Vegan Leather',
    image: '/products/p55_plus.jpg',
    specs: [
      { label: 'Charging', value: '45W Hyper Charge (0 to 70% in 30 mins)' },
      { label: 'Display', value: '6.6" 90Hz Smooth Display with Dynamic Bar' },
      { label: 'Camera', value: '50MP AI Dual Camera with Panorama' },
      { label: 'Battery', value: '5000 mAh Multi-day Battery' },
      { label: 'Storage & RAM', value: '128GB / 256GB ROM | Up to 16GB RAM' },
      { label: 'Design', value: 'Two-Tone 3D Vegan Leather Finish' }
    ],
    highlights: [
      'Fastest 45W Charging in its price segment',
      '3-Level Smart Charging Protection (Low Temp / Smart / Hyper)',
      'Luxurious stitched vegan leather dual-tone back',
      'Side fingerprint sensor & Face unlock'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-a70',
    name: 'itel A70',
    category: 'smartphones',
    subCategory: 'Mass Retail Smartphone',
    badge: '256GB BIG STORAGE',
    tagline: 'Segment-First 256GB Massive Storage Smartphone',
    image: '/products/a70.jpg',
    specs: [
      { label: 'Storage & RAM', value: 'Up to 256GB ROM + 12GB RAM (4+8 Fusion)' },
      { label: 'Display', value: '6.6" HD+ Big Screen with Dynamic Bar' },
      { label: 'Battery', value: '5000 mAh with Type-C Charging' },
      { label: 'Camera', value: '13MP HDR Dual AI Camera' },
      { label: 'Processor', value: 'Unisoc T603 Octa-Core' },
      { label: 'Design', value: 'Futuristic Sandblasted Matte Finish' }
    ],
    highlights: [
      'High-demand retail model with best-in-class storage',
      'Dynamic Bar smart pill notification experience',
      'Massive 5000mAh battery for 2-day retail customer reliability',
      'Slim 8.6mm comfortable ergonomic grip'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-a05s',
    name: 'itel A05s',
    category: 'smartphones',
    subCategory: 'Value Entry Smartphone',
    badge: 'HIGH MARGIN ENTRY PHONE',
    tagline: 'Big 6.6" Display with Type-C & Fingerprint Security',
    image: '/products/a05s.jpg',
    specs: [
      { label: 'Display', value: '6.6" HD+ Waterdrop Full-Screen' },
      { label: 'Battery', value: '4000 mAh Long-Life Battery' },
      { label: 'Port', value: 'Modern Type-C Port' },
      { label: 'Security', value: 'Fingerprint Sensor + Face Unlock' },
      { label: 'Camera', value: '8MP Rear Camera with LED Flash' },
      { label: 'RAM / ROM', value: '4GB (2+2) RAM | 32GB Storage' }
    ],
    highlights: [
      'Extremely popular entry-level model for rural & suburban buyers',
      'Modern Type-C charging port even at affordable price point',
      'Fingerprint sensor for enhanced user trust',
      'Vibrant crystal glass-like gradient back cover'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },

  // ================= FEATURE PHONES =================
  {
    id: 'itel-super-guru-4g',
    name: 'itel Super Guru 4G',
    category: 'feature-phones',
    subCategory: 'Smart Keypad 4G',
    badge: 'YOUTUBE & UPI ENABLED',
    tagline: 'Keypad Phone with 4G VoLTE, YouTube & Built-In UPI',
    image: '/products/super_guru_4g.jpg',
    specs: [
      { label: 'Network', value: 'Dual 4G VoLTE with Crystal Clear Calls' },
      { label: 'Display', value: '2.8" QVGA Bright Display' },
      { label: 'Smart Apps', value: 'YouTube, YouTube Shorts & BBC News' },
      { label: 'Payments', value: 'Built-in UPI Scan & Pay functionality' },
      { label: 'Battery', value: '1000 mAh with Super Battery Mode' },
      { label: 'Features', value: 'King Voice Talking Assistant + Wireless FM' }
    ],
    highlights: [
      'Watch YouTube & YouTube Shorts on keypad device',
      'Instant UPI payment scan support with sound feedback',
      'King Voice reads out caller names, menus, and incoming SMS',
      'Strong retail pull across Tamil Nadu rural & retail markets'
    ],
    inStock: true,
    warranty: '111 Days Free Replacement + 1 Year Warranty',
    verified: true
  },
  {
    id: 'itel-it2163s',
    name: 'itel it2163S',
    category: 'feature-phones',
    subCategory: 'Essential Keypad',
    badge: 'BESTSELLER KEYPAD',
    tagline: 'India’s Favorite High-Durability Everyday Keypad Phone',
    image: '/products/it2163s.jpg',
    specs: [
      { label: 'Display', value: '1.8" (4.5cm) High-Contrast Color Screen' },
      { label: 'Battery', value: '1200 mAh Big Battery (Up to 14 Days Standby)' },
      { label: 'Features', value: 'King Voice Audio Assistant' },
      { label: 'Radio', value: 'Wireless FM with Recording' },
      { label: 'Torch', value: 'Bright LED Torch Light' },
      { label: 'Languages', value: 'Multi-Language (Tamil, English, Hindi, etc.)' }
    ],
    highlights: [
      'Number one wholesale volume mover for mobile shops',
      'BT Caller feature: Pair as a Bluetooth handset for smartphones',
      'Auto call recording with micro-SD expansion up to 32GB',
      'Legendary itel build durability with 111-day replacement promise'
    ],
    inStock: true,
    warranty: '111 Days Replacement Guarantee + 1 Year Service',
    verified: true
  },
  {
    id: 'itel-it5026',
    name: 'itel it5026',
    category: 'feature-phones',
    subCategory: 'Executive Keypad',
    badge: 'METALLIC BRUSH FINISH',
    tagline: 'Premium Metallic Finish Feature Phone with Camera',
    image: '/products/it5026.jpg',
    specs: [
      { label: 'Display', value: '2.4" QVGA High Resolution Display' },
      { label: 'Camera', value: 'Rear Digital Camera with Bright Flash' },
      { label: 'Battery', value: '1200 mAh Long Standby Battery' },
      { label: 'Finish', value: 'Brushed Metal Textured Back & Trim' },
      { label: 'Tools', value: 'King Voice, Smart LED Torch, Wireless FM' },
      { label: 'Sim Slot', value: 'Dual SIM Standby' }
    ],
    highlights: [
      'Sophisticated metallic exterior loved by mature customers',
      'Large comfortable tactile keypad with clear Tamil font markings',
      'Camera with flash doubles as emergency flashlight',
      'High wholesale profit margins for retail counters'
    ],
    inStock: true,
    warranty: '111 Days Replacement + 1 Year Warranty',
    verified: true
  },
  {
    id: 'itel-super-guru-4g-max',
    name: 'itel Super Guru 4G Max',
    category: 'feature-phones',
    subCategory: 'Premium 4G Keypad',
    badge: 'MAX SCREEN & UPI SOUNDBOX',
    tagline: 'Largest 2.8" Screen with Built-In QR Scanner & Soundbox',
    image: '/products/super_guru_4g_max.jpg',
    specs: [
      { label: 'Display', value: '2.8" Extra Large Sharp QVGA Screen' },
      { label: 'Connectivity', value: 'Dual 4G VoLTE + High Speed Browsing' },
      { label: 'Payment', value: 'QR Payment Support + Soundbox Confirmation' },
      { label: 'Media', value: 'YouTube Video & Shorts Player' },
      { label: 'Battery', value: '1200 mAh Battery with Type-C Option' },
      { label: 'Audio', value: 'Extra Loud Stereo Box Speaker' }
    ],
    highlights: [
      'Ideal for small business owners wanting a payment keypad phone',
      'Voice readout of UPI payments received directly on the device',
      'Large keypad buttons for effortless dialing and SMS typing',
      'Premium gold & dark navy color trims'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },

  // ================= MOBILE ACCESSORIES =================
  {
    id: 'itel-25w-pd-charger',
    name: 'itel 25W PD Dual Port Fast Charger',
    category: 'accessories',
    subCategory: 'Charging Accessories',
    badge: 'FAST CHARGE 25W',
    tagline: 'Dual Port Type-C PD + USB-A with SafeVolt Multi-Protection',
    image: '/products/charger_25w_pd.jpg',
    specs: [
      { label: 'Power Output', value: '25W Max Power Delivery & Quick Charge' },
      { label: 'Ports', value: '1x USB Type-C (PD) + 1x USB-A (QC 3.0)' },
      { label: 'Certification', value: 'BIS Certified with Fire-Retardant PC Body' },
      { label: 'Safety', value: 'Over-Voltage, Over-Current & Surge Shield' },
      { label: 'Compatibility', value: 'itel, Samsung, Xiaomi, Realme, Apple' }
    ],
    highlights: [
      'Universal fast charging for smartphones, tablets, and power banks',
      'Charge two devices simultaneously without power drops',
      'Compact travel-friendly plug design tailored for Indian sockets',
      'High retail margin item in tamper-proof retail packaging'
    ],
    inStock: true,
    warranty: '6 Months Brand Warranty',
    verified: true
  },
  {
    id: 'itel-18w-charger',
    name: 'itel 18W Qualcomm Quick Charger',
    category: 'accessories',
    subCategory: 'Charging Accessories',
    badge: 'HIGH VOLUME FAST SELLER',
    tagline: 'Reliable 18W Qualcomm Quick Charge 3.0 Adapter',
    image: '/products/charger_18w.jpg',
    specs: [
      { label: 'Output', value: '18W Fast Charging (5V-3A / 9V-2A / 12V-1.5A)' },
      { label: 'Technology', value: 'Qualcomm Quick Charge 3.0 Supported' },
      { label: 'Safety', value: 'Smart Temp Protection & Anti-Burn Technology' },
      { label: 'Port', value: 'USB-A High Speed Power Port' }
    ],
    highlights: [
      'Standard high-demand replacement adapter for all Android phones',
      'Engineered to withstand Indian voltage fluctuations (90V-300V)',
      'BIS approved for highest commercial safety standards',
      'Bulk pack cartons available with retail display hang-tags'
    ],
    inStock: true,
    warranty: '6 Months Brand Warranty',
    verified: true
  },
  {
    id: 'itel-star-10000-powerbank',
    name: 'itel Star 10,000 mAh 22.5W Power Bank',
    category: 'accessories',
    subCategory: 'Power Banks',
    badge: '22.5W TWO-WAY FAST CHARGE',
    tagline: 'Ultra-Slim 10,000mAh Power Bank with Digital Display',
    image: '/products/powerbank_star_10000.jpg',
    specs: [
      { label: 'Capacity', value: '10,000 mAh High-Density Lithium-Polymer' },
      { label: 'Max Output', value: '22.5W Super Fast Charging' },
      { label: 'Ports', value: 'Dual USB-A Out + Type-C In/Out PD Port' },
      { label: 'Display', value: 'Intelligent Numeric LED Percentage Screen' },
      { label: 'Flight Safe', value: 'DGCA & Airline Approved Travel Capacity' }
    ],
    highlights: [
      'Charges modern smartphones 2 to 3 times on a single full charge',
      'Two-way fast charging: rapidly recharges power bank in 3.5 hours',
      'Textured scratch-resistant outer casing with premium grip',
      '12-layer advanced circuit chip protection'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-star-20000-powerbank',
    name: 'itel Star 20,000 mAh Power Bank',
    category: 'accessories',
    subCategory: 'Power Banks',
    badge: 'MASSIVE MULTI-DAY POWER',
    tagline: 'Heavy-Duty 20,000mAh Backup for Retailers & Frequent Travelers',
    image: '/products/powerbank_star_20000.jpg',
    specs: [
      { label: 'Capacity', value: '20,000 mAh Giant Battery Capacity' },
      { label: 'Output', value: '18W Fast Dual Device Charging' },
      { label: 'Input Options', value: 'Dual Input: Type-C and Micro-USB' },
      { label: 'Indicators', value: '4-Stage LED Power Reserve Level' }
    ],
    highlights: [
      'Provides 4 to 5 full smartphone recharge cycles',
      'Simultaneous dual output for charging phone + earbuds together',
      'Heat dissipation cooling architecture for safe charging',
      'Always in high demand among shop customers, tourists, and drivers'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-buds-ace-anc',
    name: 'itel Buds Ace ANC True Wireless',
    category: 'accessories',
    subCategory: 'Audio & Bluetooth',
    badge: '25dB ANC + 50H PLAYTIME',
    tagline: 'Active Noise Cancellation Earbuds with Mega 50 Hours Battery',
    image: '/products/earbuds_buds_ace.jpg',
    specs: [
      { label: 'Noise Cancellation', value: '25dB Active Noise Cancellation (ANC)' },
      { label: 'Playtime', value: 'Up to 50 Hours Total Playtime with Case' },
      { label: 'Microphones', value: 'Quad-Mic Environmental Noise Cancellation (ENC)' },
      { label: 'Driver Size', value: '10mm Dynamic Deep Bass Acoustic Drivers' },
      { label: 'Bluetooth', value: 'v5.3 with Instant Auto-Pairing & Low Latency' },
      { label: 'Water Resistance', value: 'IPX5 Sweat & Splash Proof' }
    ],
    highlights: [
      'Crystal clear phone calling even in noisy wholesale markets or streets',
      'Fast charge support: 10 minutes charging gives 120 minutes playback',
      'Ultra-comfortable lightweight ergonomic in-ear stem design',
      'Premium glossy-matte duo-tone charging case'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-earbuds-rhythm',
    name: 'itel Earbuds Rhythm',
    category: 'accessories',
    subCategory: 'Audio & Bluetooth',
    badge: '30H PLAYTIME BASS BOOST',
    tagline: '30 Hours Non-Stop Rhythm with Dual-Mic ENC for Calling',
    image: '/products/earbuds_rhythm.jpg',
    specs: [
      { label: 'Playtime', value: '30 Hours Continuous Backup' },
      { label: 'Bluetooth', value: 'v5.3 Low Energy Connection' },
      { label: 'Microphones', value: '2-Mic ENC for Clear Calls' },
      { label: 'Controls', value: 'Full Smart Touch Gesture Sensors' },
      { label: 'Waterproof', value: 'IPX5 Rated Splash Shield' }
    ],
    highlights: [
      'Best-selling budget TWS earbud for retail shop counters',
      'Punchy bass curve tuned specifically for Indian music preferences',
      'Compact pebble pocket case with magnetic snap closure',
      'Voice Assistant activation (Google Assistant / Siri)'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-roar-64-neckband',
    name: 'itel ROAR 64 Magnetic Neckband',
    category: 'accessories',
    subCategory: 'Audio & Bluetooth',
    badge: '30H BATTERY LIFE',
    tagline: 'Magnetic Earbuds with Flexible Liquid Silicone Neckband',
    image: '/products/neckband_ieb_64.jpg',
    specs: [
      { label: 'Playback Time', value: '30 Hours Continuous Music & Calls' },
      { label: 'Fast Charging', value: 'Type-C: 10 mins Charge = 10 Hours Music' },
      { label: 'Drivers', value: '10mm Bass Boost Drivers' },
      { label: 'Magnets', value: 'Magnetic Instant Snap Clasp' },
      { label: 'Band Material', value: 'Skin-Friendly Memory Alloy Silicone' }
    ],
    highlights: [
      'High-reliability neckband for two-wheeler riders, workers, and students',
      'Magnetic lock prevents tangled wires and automatically sleeps device',
      'Integrated volume, music playback, and call buttons',
      'Extremely durable build resistant to sweat and rain'
    ],
    inStock: true,
    warranty: '1 Year Brand Warranty',
    verified: true
  },
  {
    id: 'itel-ibs-21-speaker',
    name: 'itel IBS-21 Portable Bluetooth Speaker',
    category: 'accessories',
    subCategory: 'Audio & Bluetooth',
    badge: 'RGB AMBIENT LIGHT',
    tagline: 'Compact Wireless Party Speaker with RGB Rhythm Lights & FM',
    image: '/products/speaker_ibs_21.jpg',
    specs: [
      { label: 'Sound Output', value: '3W RMS with Bass Reflex Diaphragm' },
      { label: 'Lighting', value: 'Dynamic RGB Beat Pulsing Lights' },
      { label: 'Battery', value: '6 Hours Continuous Playback' },
      { label: 'Inputs', value: 'Bluetooth 5.0, Micro-SD Card, USB Flash, FM' },
      { label: 'Handsfree', value: 'Built-in Mic for Speakerphone Calls' }
    ],
    highlights: [
      'Eye-catching RGB lights attract immediate retail counter attention',
      'TWS feature allows pairing two speakers for true stereo sound',
      'Sturdy braided carry loop for outdoor hanging and portability',
      'Complete retail box with USB charging cable included'
    ],
    inStock: true,
    warranty: '6 Months Brand Warranty',
    verified: true
  },
  {
    id: 'itel-cable-type-c-3a',
    name: 'itel ToughBraided Type-C 3A Cable',
    category: 'accessories',
    subCategory: 'Charging Cables',
    badge: '3A FAST CHARGE & SYNC',
    tagline: '1.2m Tangle-Free High-Tensile Nylon Braided Data Cable',
    image: '/products/cable_type_c_3a.jpg',
    specs: [
      { label: 'Current Rating', value: '3.0A Max Fast Charging Current' },
      { label: 'Length', value: '1.2 Meters (4 Feet)' },
      { label: 'Material', value: 'High-Density Double Nylon Braiding' },
      { label: 'Data Speed', value: '480 Mbps High Speed Sync' },
      { label: 'Durability', value: '15,000+ Bend Lifespan Tested' }
    ],
    highlights: [
      'Reinforced aluminum alloy connector joints prevent cable breakage',
      'Universal compatibility with all Type-C Android phones & tablets',
      'Essential daily accessory that sells in bulk quantities at retail',
      'Available in wholesale bundles of 10, 50, and 100 units'
    ],
    inStock: true,
    warranty: '6 Months Brand Warranty',
    verified: true
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Wholesale Products', count: PRODUCTS.length },
  { id: 'smartphones', label: 'itel Smartphones', count: PRODUCTS.filter(p => p.category === 'smartphones').length },
  { id: 'feature-phones', label: 'itel Feature Phones', count: PRODUCTS.filter(p => p.category === 'feature-phones').length },
  { id: 'accessories', label: 'itel Mobile Accessories', count: PRODUCTS.filter(p => p.category === 'accessories').length }
];
