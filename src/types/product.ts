import type { User } from './auth';

export interface ProductFormData extends Omit<Product, 'id' | 'owner' | 'price' | 'stock'> {
  price: string;
  stock: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  owner: User;
}

export interface ProductFilter {
  name?: string;
  sku?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}
