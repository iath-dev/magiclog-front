import { useQuery } from '@tanstack/react-query';
import type { ProductFilter } from '../types/product';
import { getProducts } from '../api/services/products';

export const useProducts = (filter?: ProductFilter, key: string = 'admin-products') => {
  return useQuery({
    queryKey: [key, filter],
    queryFn: () => getProducts(filter),
  });
};
