import { Header, Pagination, Spinner } from '../../components';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../hooks/useCart';
import type { Product } from '../../types/product';
import { useEffect, useState } from 'react';
import ProductList from '../../components/products/ProductList';
import FilterForm from '../../components/form/FilterForm';
import type { FilterFormValues } from '../../components/form/FilterForm';

const FILTER_DEFAULTS: FilterFormValues = {
  name: '',
  sku: '',
  minPrice: '',
  maxPrice: ''
};

const DEBOUNCE_TIMEOUT = 300;

const BuyerMain = () => {
  const { items, addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterFormValues>(FILTER_DEFAULTS);
  const [debounceFilters, setDebounceFilters] = useState<FilterFormValues>(FILTER_DEFAULTS)
  
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceFilters(filters);
    }, DEBOUNCE_TIMEOUT);
  
    return () => {
      clearTimeout(handler);
    }
  }, [filters])
  

  const { data, isLoading } = useProducts({
    ...debounceFilters,
    minPrice: debounceFilters.minPrice ? Number(debounceFilters.minPrice) : undefined,
    maxPrice: debounceFilters.maxPrice ? Number(debounceFilters.maxPrice) : undefined,
    limit: 5,
    page: currentPage,
  });

  const handleAddToCart = (product: Product) => {
    const quantityInCart = items.find((item) => item.id === product.id)?.stock || 0;

    addToCart({ ...product, stock: quantityInCart + 1 });
  };

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header title="MagicShop" />
      <main className="container mx-auto py-4">
        <FilterForm onChange={handleChangeFilter} filterData={filters} />
        <p className="text-gray-600 mb-4">Explora y compra productos de nuestra tienda.</p>
        <div className="bg-white dark:bg-gray-800 rounded shadow px-6 py-2">
          {isLoading &&
            <div className="flex justify-center items-center h-64">
              <Spinner size='xl' />
            </div>
          }
          {!!data && (
            <>
              <ProductList products={data.items} onAddToCart={handleAddToCart} />
              <Pagination
                totalPages={data.totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default BuyerMain;
