import api from '../config/api';
import type { Product, ProductFilter } from '../../types/product';
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
