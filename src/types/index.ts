export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  scent: string;
  burnTime: string;
  size: string;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  ingredients: string[];
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  products: string[];
  savings: number;
  badge?: string;
  popular?: boolean;
}

export interface CartItem {
  product: Product | Package;
  quantity: number;
  type: 'product' | 'package';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
