import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface CartButtonProps {
  count: number;
  onClick?: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ count, onClick }) => (
  <button
    type="button"
    className="relative flex items-center px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
    onClick={onClick}
    aria-label="Ver carrito"
  >
    <FaShoppingCart className="text-xl" />
    <span className="ml-2 font-medium">Carrito</span>
    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 rounded-full">
      {count}
    </span>
  </button>
);

export default CartButton;
