import { useCartStore } from '../store/cart';

export const useCart = () => {
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  return { items, addToCart, removeFromCart, clearCart, updateQuantity };
};
