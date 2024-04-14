import { Subcategory } from './category';

export interface Product {
  id: number;
  slug: string;
  code: string;
  name: string;
  description: string;
  mainImage: string;
  price: number;
  isOnSale: boolean;
  salePercentage: number;
  salePrice: number;
  finalPrice: number;
  hasCardMessage: boolean;
  hasBoxMessage: boolean;
  hasBalloonMessage: boolean;
  isExpress: boolean;
  isAnExtra: boolean;
  createdAt: string;
  subcategories: Subcategory[];
  images: ProductImages[];
  points: number;
  variants: Variant[];
}

export interface ProductImages {
  id: number;
  url: string;
}

export interface Variant {
  id: number;
  name: string;
  price: number;
  stock: number;
  sku: string;
  // images: VariantImages[];
  images: string[];
}
