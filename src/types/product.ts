import type { User } from './auth';

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  owner: User;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilter {
  name?: string;
  sku?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}
