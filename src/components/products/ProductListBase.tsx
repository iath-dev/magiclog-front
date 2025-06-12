import type { Product } from '../../types/product';

interface ProductListBaseProps {
  products: Product[];
  renderProduct: (product: Product) => React.ReactNode;
  emptyMessage?: string;
  className?: string;
}

const ProductListBase: React.FC<ProductListBaseProps> = ({
  products,
  renderProduct,
  emptyMessage = 'No hay productos disponibles en este momento.',
  className = '',
}) => {
  if (!products.length) {
    return <p className="text-gray-500">{emptyMessage}</p>;
  }
  return (
    <ul className={`w-full divide-y divide-gray-200 dark:divide-gray-700 ${className}`}>
      {products.map(renderProduct)}
    </ul>
  );
};

export default ProductListBase;
