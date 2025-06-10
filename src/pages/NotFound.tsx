import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Página no encontrada</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">La página que buscas no existe o ha sido movida.</p>
      <a href="/" className="text-indigo-600 hover:underline">Volver al inicio</a>
    </div>
  );
};

export default NotFound;
