import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-900 dark:text-white">MagicShop</h1>
          <nav>
            <a href="#" className="text-gray-700 dark:text-gray-200 mx-2 hover:underline">Inicio</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 mx-2 hover:underline">Productos</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 mx-2 hover:underline">Carrito</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 mx-2 hover:underline">Contacto</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-10 px-4">
        <section className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Bienvenido a MagicShop</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Tu tienda de compras favorita para productos mágicos y más.</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Productos Destacados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Producto ejemplo */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
              <img src="/assets/react.svg" alt="Producto" className="w-24 h-24 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Varita Mágica</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Haz realidad tus sueños con esta varita única.</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">Agregar al carrito</button>
            </div>
            {/* Puedes duplicar este bloque para más productos */}
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-800 mt-10 py-4 text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MagicShop. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default HomePage;
