import React, { useEffect, useState } from 'react';
import Header from '../../components/layout/Header/Header';
import { Input, Pagination, SellerSelector, Spinner, Table } from '../../components';
import { useProducts } from '../../hooks/useProducts';
import { AdminProductTableColumns } from '../../utils/table';

interface AdminFilters {
  name: string;
  username: string;
}

const AdminProductList = () => {
  const [filters, setFilters] = useState<AdminFilters>({
    name: '',
    username: '',
  });
  const [debouncedFilters, setDebouncedFilters] = useState<AdminFilters>({
    name: '',
    username: '',
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilters(filters);
      setCurrentPage(1); // Reset to first page on filter change
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [filters]);

  const { isLoading, data } = useProducts({
    limit: 10,
    page: currentPage,
    ...debouncedFilters,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto">
      <Header title="Lista de Productos (Admin)" />
      <div className="flex gap-4 mb-6 px-4">
        <Input
          type="text"
          name="name"
          placeholder="Buscar por nombre"
          value={filters.name}
          onChange={handleChange}
        />
        <SellerSelector onChange={handleChange} />
      </div>
      <section className="px-4">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Spinner size="xl" />
          </div>
        )}
        {!!data && (
          <div className="space-y-4">
            <Table data={data.items} columns={AdminProductTableColumns} bordered />
            <Pagination
              currentPage={currentPage}
              totalPages={data.totalPages}
              onPageChange={handlePageChange}
              className="mb-6"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminProductList;
