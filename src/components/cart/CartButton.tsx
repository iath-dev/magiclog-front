import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import CartItemsList from './CartItemsList';

const CartButton: React.FC = () => {
  const { items } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        type="button"
        variant="info"
        outline
        aria-label="Ver carrito"
        icon={<FaShoppingCart className="text-xl" />}
        onClick={() => setOpen(true)}
      >
        <span className="ml-2 font-medium">Carrito</span>
        <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-cyan-600 rounded-full">
          {items.length}
        </span>
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Carrito de compras</h2>
        <CartItemsList />
        {/* Total y botón de comprar al final del modal */}
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total:</span>
            <span>
              {items
                .map((item) => item.price * item.quantity)
                .reduce((a, b) => a + b, 0)
                .toLocaleString('es-CO', {
                  style: 'currency',
                  currency: 'COP',
                })}
            </span>
          </div>
          <Button type="button" variant="success" fullWidth>
            Comprar
          </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default CartButton;
