import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BuyerMain = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState({
    name: '',
    sku: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de búsqueda
    alert(`Buscar: ${JSON.stringify(search)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MagicShop</h1>
          <div className="flex gap-4">
            <button
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              onClick={() => setShowSearch((s) => !s)}
            >
              Buscar producto
            </button>
            <Link to="/auth/login">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                Iniciar Sesión
              </button>
            </Link>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75m-9 7.5h9m-9 0l-1.5-6.75m10.5 6.75l1.5-6.75m-13.5 0h16.5"
                />
              </svg>
              Carrito
            </button>
          </div>
        </div>
        {showSearch && (
          <div className="bg-gray-100 dark:bg-gray-700 py-4">
            <form
              className="max-w-4xl mx-auto flex flex-wrap gap-4 items-end"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-200 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={search.name}
                  onChange={handleChange}
                  className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-200 mb-1">SKU</label>
                <input
                  type="text"
                  name="sku"
                  value={search.sku}
                  onChange={handleChange}
                  className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="SKU"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-200 mb-1">Precio mínimo (COP)</label>
                <input
                  type="number"
                  name="minPrice"
                  value={search.minPrice}
                  onChange={handleChange}
                  className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="0"
                  min="0"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-200 mb-1">Precio máximo (COP)</label>
                <input
                  type="number"
                  name="maxPrice"
                  value={search.maxPrice}
                  onChange={handleChange}
                  className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="0"
                  min="0"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Buscar
              </button>
            </form>
          </div>
        )}
      </header>
      <main className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6">Bienvenido, Comprador</h2>
        <p className="text-gray-600 mb-4">Explora y compra productos de nuestra tienda.</p>
        {/* Aquí irá el listado de productos para el comprador */}
        <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
          <p className="text-gray-500">No hay productos disponibles en este momento.</p>
        </div>
      </main>
    </div>
  );
};

export default BuyerMain;
