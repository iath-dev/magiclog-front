import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import {
  Alert,
  Button,
  Header,
  Modal,
  ProductForm,
  SellerProductList,
  Spinner,
} from '../../components';
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

      await createProduct(token!, data)
        .then(() => {
          setModalOpen(false);
          queryClient.invalidateQueries({ queryKey: ['sellers-products'] });
        })
        .catch((err) => {
          console.error('Error creando producto:', err);
          setFormError({ general: 'Error al crear el producto' });
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-150 dark:bg-gray-900">
      <Header
        title="Mis Productos (Vendedor)"
        actions={() => (
          <div>
            <Button
              variant="primary"
              size="lg"
              outline
              icon={<FiPlus />}
              className="mr-2"
              onClick={() => setModalOpen(true)}
            >
              <span className="hidden md:block">Crear producto</span>
            </Button>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
              <h2 className="text-xl font-bold mb-4">Crear producto</h2>
              <ProductForm
                onSubmit={handleCreateProduct}
                onCancel={() => setModalOpen(false)}
                errors={formError}
              />
              {formError.general && <Alert variant="danger" message={formError.general} />}
            </Modal>
          </div>
        )}
      />
      <div className="container mx-auto max-w lg">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Spinner size="xl" />
          </div>
        )}
        <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
          {!!products && <SellerProductList products={products} />}
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
