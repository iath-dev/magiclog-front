import React from "react";

const SellerProducts = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Mis Productos (Vendedor)</h1>
      <p className="text-gray-600 mb-4">Administra los productos que tienes a la venta.</p>
      {/* Aquí irá la tabla/listado de productos del vendedor */}
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
        <p className="text-gray-500">No tienes productos publicados.</p>
      </div>
    </div>
  );
};

export default SellerProducts;
