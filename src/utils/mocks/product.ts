import type { User } from '../../types/auth';
import type { Product } from '../../types/product';

export const mockOwner: User = {
  username: 'vendedor1',
  role: 'seller',
  id: '1',
};

export const mockProduct: Product = {
  id: '1',
  name: 'Producto de prueba',
  sku: 'SKU-001',
  price: 10000,
  stock: 5,
  owner: mockOwner,
};

export const mockProductList: Product[] = [
  {
    id: '1',
    name: 'Producto de prueba 1',
    sku: 'SKU-001',
    price: 10000,
    stock: 5,
    owner: mockOwner,
  },
  {
    id: '2',
    name: 'Producto de prueba 2',
    sku: 'SKU-002',
    price: 20000,
    stock: 10,
    owner: mockOwner,
  },
  {
    id: '3',
    name: 'Producto de prueba 3',
    sku: 'SKU-003',
    price: 15000,
    stock: 8,
    owner: mockOwner,
  },
];
