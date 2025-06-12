import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Alert, Button, Header, Modal, ProductForm, Spinner } from '../../components';
import type { FormError } from '../../types/general';
import { FiPlus } from 'react-icons/fi';
import { createProduct } from '../../api';
import type { ProductFormData } from '../../types/product';
import { productSchema } from '../../schemas/schemas';
import { useOwnProducts } from '../../hooks/useOwnProducts';
import { useQueryClient } from '@tanstack/react-query';

const SellerProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formError, setFormError] = useState<FormError>({});

  const { user, token } = useAuth();
  const { data: products, isLoading } = useOwnProducts();

  const queryClient = useQueryClient();

  const handleCreateProduct = async (data: ProductFormData) => {
    if (!user) return;

    const result = productSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: FormError = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setFormError(fieldErrors);
      return;
    } else {
      setFormError({});

      await createProduct(token!, data).then((newProduct) => {
          console.log('Producto creado:', newProduct);
          setModalOpen(false);
          queryClient.invalidateQueries({ queryKey: ['sellers-products']});
        }).catch((err) => {
          console.error('Error creando producto:', err);
          setFormError({ general: 'Error al crear el producto' });
        });
    }

  };

  return (
    <div className="container mx-auto">
      <Header title="Mis Productos (Vendedor)" />
      <div className="flex items-center justify-end container mx-auto mb-4">
        <Button variant='primary' outline icon={<FiPlus />} onClick={() => setModalOpen(true)}>Crear producto</Button>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Crear producto</h2>
          <ProductForm onSubmit={handleCreateProduct} onCancel={() => setModalOpen(false)} errors={formError} />
          {formError.general && <Alert variant='danger' message={formError.general} />}
        </Modal>
      </div>
      {isLoading &&
        <div className="flex justify-center items-center h-64">
          <Spinner size='xl' />
        </div>
      }
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
          {!!products &&  (
        <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
          {products.map((product) => (
            <li className="first:pb-3 last:pt-3 py-3 sm:first:pb-4 sm:last:pt-4 sm:py-4" key={product.id}>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {product.sku}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {product.price.toLocaleString('es-CO', {
                      style: 'currency',
                      currency: 'COP',
                    })}
                </div>
              </div>
            </li>
            ))}
        </ul>
          )}
      </div>
    </div>
  );
};

export default SellerProducts;
