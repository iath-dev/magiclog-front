import React, { useState } from 'react';
import { productSchema } from '../../schemas/schemas';
import Modal from '../../components/Modal';
import ProductForm from '../../components/ProductForm';

const SellerProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState<{ name: string; price: string; sku: string }[]>([]);
  const [formError, setFormError] = useState<{ [key: string]: string }>({});

  const handleCreateProduct = (data: { name: string; price: string; sku: string }) => {
    const result = productSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setFormError(fieldErrors);
      return;
    }
    setFormError({});
    setProducts([...products, data]);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Mis Productos (Vendedor)</h1>
      <p className="text-gray-600 mb-4">Administra los productos que tienes a la venta.</p>
      <button
        className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        onClick={() => setModalOpen(true)}
      >
        Crear nuevo producto
      </button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Crear producto</h2>
        <ProductForm
          onSubmit={handleCreateProduct}
          onCancel={() => setModalOpen(false)}
          errors={formError}
        />
      </Modal>
      {/* Aquí irá la tabla/listado de productos del vendedor */}
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
        {products.length === 0 ? (
          <p className="text-gray-500">No tienes productos publicados.</p>
        ) : (
          <ul>
            {products.map((prod, idx) => (
              <li key={idx} className="mb-2">
                <span className="font-semibold">{prod.name}</span> | ${prod.price} | SKU: {prod.sku}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SellerProducts;
