import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../../ui/Button/Button';
import type { FormError } from '../../../types/general';
import type { ProductFormData } from '../../../types/product';

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
  errors?: FormError;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, onCancel, errors = {} }) => {
  const [form, setForm] = useState<ProductFormData>({
    name: '',
    price: '0',
    stock: '0',
    sku: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form data-testid="product-form" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="name"
        label="Nombre del producto"
        placeholder="Nombre del producto"
        value={form.name}
        onChange={handleChange}
        hasError={!!errors.name}
        error={errors.name}
        required
      />
      <FormInput
        type="text"
        name="sku"
        label="SKU"
        placeholder="SKU"
        value={form.sku}
        onChange={handleChange}
        hasError={!!errors.sku}
        error={errors.sku}
        required
      />
      <FormInput
        type="currency"
        name="price"
        label="Precio (COP)"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
        min="0"
        hasError={!!errors.price}
        error={errors.price}
        required
      />
      <FormInput
        type="number"
        name="stock"
        label="Stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
        hasError={!!errors.stock}
        error={errors.stock}
        required
      />
      <div className="flex gap-2 justify-end">
        <Button type="button" variant="danger" outline onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" variant="primary">
          Crear
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
