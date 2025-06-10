import React, { useState } from 'react';

const mockProducts = [
  { name: 'Producto 1', user: 'admin', sku: 'SKU001', price: 10000 },
  { name: 'Producto 2', user: 'seller1', sku: 'SKU002', price: 25000 },
  { name: 'Producto 3', user: 'seller2', sku: 'SKU003', price: 15000 },
];

const AdminProductList = () => {
  const [filters, setFilters] = useState({ name: '', user: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = mockProducts.filter(
    (prod) =>
      prod.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      prod.user.toLowerCase().includes(filters.user.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Lista de Productos (Admin)</h1>
      <p className="text-gray-600 mb-4">
        Aquí puedes ver y administrar todos los productos de la tienda.
      </p>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Buscar por nombre"
          className="p-2 rounded border border-gray-300"
          value={filters.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="user"
          placeholder="Buscar por usuario"
          className="p-2 rounded border border-gray-300"
          value={filters.user}
          onChange={handleChange}
        />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left py-2 px-4">Nombre</th>
              <th className="text-left py-2 px-4">Usuario</th>
              <th className="text-left py-2 px-4">SKU</th>
              <th className="text-left py-2 px-4">Precio (COP)</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No hay productos para mostrar.
                </td>
              </tr>
            ) : (
              filteredProducts.map((prod, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 px-4">{prod.name}</td>
                  <td className="py-2 px-4">{prod.user}</td>
                  <td className="py-2 px-4">{prod.sku}</td>
                  <td className="py-2 px-4">${prod.price.toLocaleString('es-CO')}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductList;