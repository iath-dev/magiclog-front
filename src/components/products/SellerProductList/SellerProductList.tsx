import type { Product } from '../../../types/product';
import ProductListBase from '../ProductListBase/ProductListBase';
import ProductListItem from '../ProductListItem/ProductListItem';

interface SellerProductListProps {
  products: Product[];
}

const SellerProductList: React.FC<SellerProductListProps> = ({ products }) => {
  return (
    <ProductListBase
      products={products}
      renderProduct={(product) => <ProductListItem product={product} />}
    />
  );
};

export default SellerProductList;
