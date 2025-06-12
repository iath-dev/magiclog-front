import api from '../config/api';
import type { Product, ProductFilter, ProductFormData } from '../../types/product';
import type { PageResponse } from '../../types/response';

export const getProducts = async (
  token: string,
  filter?: ProductFilter
): Promise<PageResponse<Product>> => {
  const res = await api.get<PageResponse<Product>>('/products/search', {
    params: filter,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getOwnProducts = async (token: string): Promise<Product[]> => {
  const res = await api.get<Product[]>('/products/own', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const createProduct = async (token: string, product: ProductFormData): Promise<Product> => {
  const res = await api.post<Product>('/products', product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
