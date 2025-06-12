import type { Product } from '../../types/product';
import { useCart } from '../../hooks/useCart';
import ProductListItem from './ProductListItem';

interface ProductListProps {
  products: Product[];
}

const BuyerProductList: React.FC<ProductListProps> = ({ products }) => {
  const { items, addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    const quantityInCart = items.find((item) => item.id === product.id)?.stock || 0;

    addToCart({ ...product, quantity: quantityInCart + 1 });
  };

  if (!products.length) {
    return <p className="text-gray-500">No hay productos disponibles en este momento.</p>;
  }
  return (
    <ul className="w-full divide-y mb-4">
      {products.map((product) => (
        <ProductListItem
          product={product}
          key={product.id}
          showAddToCartButton
          onAddToCart={handleAddToCart}
        />
      ))}
    </ul>
  );
};

export default BuyerProductList;
