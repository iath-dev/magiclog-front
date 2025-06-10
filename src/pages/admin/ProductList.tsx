import React from "react";

const AdminProductList = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Lista de Productos (Admin)</h1>
      <p className="text-gray-600 mb-4">Aquí puedes ver y administrar todos los productos de la tienda.</p>
      {/* Aquí irá la tabla/listado de productos */}
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
        <p className="text-gray-500">No hay productos para mostrar.</p>
      </div>
    </div>
  );
};

export default AdminProductList;
