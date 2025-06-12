import React from 'react';
import { useCart } from '../../hooks/useCart';
import Button from '../ui/Button';
import { FiXCircle } from 'react-icons/fi';

const CartItemsList: React.FC = () => {
  const { items, updateQuantity, removeFromCart } = useCart();

  if (!items.length) {
    return <p className="text-gray-500">El carrito está vacío.</p>;
  }

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {items.map((item) => (
        <li key={item.id} className="py-3 flex items-center justify-between">
          <div>
            <span className="font-medium">{item.name}</span>
            <span className="ml-2 text-sm text-gray-500">x{item.quantity}</span>
            <span className="ml-2 text-sm text-gray-700">${item.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
              className="w-16 px-2 py-1 border rounded text-center"
            />
            <Button
              type="button"
              variant="danger"
              size="sm"
              outline
              icon={<FiXCircle />}
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItemsList;
