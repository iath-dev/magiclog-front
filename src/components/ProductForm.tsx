import React, { useState } from 'react';

interface ProductFormProps {
  onSubmit: (data: { name: string; price: string; sku: string }) => void;
  onCancel: () => void;
  errors?: { [key: string]: string };
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, onCancel, errors = {} }) => {
  const [form, setForm] = useState({ name: '', price: '', sku: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre del producto"
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={form.name}
        onChange={handleChange}
        required
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      <input
        type="number"
        name="price"
        placeholder="Precio"
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={form.price}
        onChange={handleChange}
        min="0"
        required
      />
      {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
      <input
        type="text"
        name="sku"
        placeholder="SKU"
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={form.sku}
        onChange={handleChange}
        required
      />
      {errors.sku && <span className="text-red-500 text-sm">{errors.sku}</span>}
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Crear
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
