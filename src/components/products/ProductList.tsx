
import { FiShoppingCart } from 'react-icons/fi';
import type { Product } from '../../types/product';
import Button from '../ui/Button';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  if (!products.length) {
    return <p className="text-gray-500">No hay productos disponibles en este momento.</p>;
  }
  return (
    <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
      {products.map((product) => (
        <li key={product.id} className="py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">${product.sku}</p>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <span className='text-sm text-gray-600 dark:text-gray-400'>+ {product.price}</span>
              <Button
                variant='success'
                outline
                size='sm'
                icon={<FiShoppingCart className="text-lg" />}
                onClick={() => onAddToCart({ ...product, stock: 1 })}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
