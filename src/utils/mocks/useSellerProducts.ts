import { mockProductList } from './product';

export const useSellerProductsMock = () => ({
  data: mockProductList,
  isLoading: false,
  error: null,
});
