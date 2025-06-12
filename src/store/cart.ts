import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '../types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (item) => {
        set((state) => {
          const found = state.items.find((i) => i.id === item.id);
          if (found) {
            return {
              items: state.items,
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        });
      },
      removeFromCart: (id) => {
        set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
      },
      clearCart: () => set({ items: [] }),
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        }));
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
