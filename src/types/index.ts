export type ProductCategory = 'all' | 'smartphones' | 'feature-phones' | 'accessories';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'smartphones' | 'feature-phones' | 'accessories';
  subCategory?: string;
  badge?: string;
  tagline: string;
  image: string;
  specs: ProductSpec[];
  highlights: string[];
  inStock: boolean;
  warranty: string;
  verified: boolean;
}

export interface WholesaleService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface WhyChoosePoint {
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  src: string;
  tag: string;
}

export interface WholesaleEnquiryData {
  customerName: string;
  mobileNumber: string;
  businessName: string;
  city: string;
  category: string;
  productModel: string;
  quantity: string;
  message: string;
}
