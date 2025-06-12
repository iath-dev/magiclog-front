import { FiShoppingCart } from 'react-icons/fi';
import type { Product } from '../../types/product';
import Button from '../ui/Button';

interface ProductListItemProps {
  product: Product;
  showAddToCartButton?: boolean;
  onAddToCart?: (product: Product) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  showAddToCartButton = false,
  onAddToCart,
}) => {
  return (
    <li className="py-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{product.sku}</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {product.price.toLocaleString('es-CO', {
              style: 'currency',
              currency: 'COP',
            })}
          </span>
          {showAddToCartButton && onAddToCart && (
            <Button
              variant="success"
              outline
              size="sm"
              icon={<FiShoppingCart className="text-lg" />}
              onClick={() => onAddToCart({ ...product, stock: 1 })}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductListItem;
