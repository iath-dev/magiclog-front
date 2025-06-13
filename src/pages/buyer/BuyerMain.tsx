import {
  Alert,
  BuyerProductList,
  CartButton,
  FilterForm,
  Header,
  Pagination,
  Spinner,
} from '../../components';
import { useProducts } from '../../hooks/useProducts';
import { useEffect, useState } from 'react';
import type { FilterFormValues } from '../../components/form/FilterForm/FilterForm';

const FILTER_DEFAULTS: FilterFormValues = {
  name: '',
  sku: '',
  minPrice: '',
  maxPrice: '',
};

const DEBOUNCE_TIMEOUT = 300;

const BuyerMain = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterFormValues>(FILTER_DEFAULTS);
  const [debounceFilters, setDebounceFilters] = useState<FilterFormValues>(FILTER_DEFAULTS);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceFilters(filters);
    }, DEBOUNCE_TIMEOUT);

    return () => {
      clearTimeout(handler);
    };
  }, [filters]);

  const { data, isLoading, isError } = useProducts(
    {
      ...debounceFilters,
      minPrice: debounceFilters.minPrice ? Number(debounceFilters.minPrice) : undefined,
      maxPrice: debounceFilters.maxPrice ? Number(debounceFilters.maxPrice) : undefined,
      limit: 5,
      page: currentPage,
    },
    'buyer-products'
  );

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        title="MagicShop"
        actions={() => (
          <span className="mr-2">
            <CartButton />
          </span>
        )}
      />
      <main className="container mx-auto p-4">
        <FilterForm onChange={handleChangeFilter} filterData={filters} />
        <p className="text-gray-600 mb-4">Explora y compra productos de nuestra tienda.</p>

        {isError && <Alert variant="danger" message="No se pudo acceder a los productos" />}
        <div className="bg-white dark:bg-gray-800 rounded shadow px-6 py-2">
          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Spinner size="xl" />
            </div>
          )}
          {!!data && (
            <>
              <BuyerProductList products={data.items} />
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
