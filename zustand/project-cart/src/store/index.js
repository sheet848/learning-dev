import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// to make it sessionStorage -> pass storage: createJSONStorage(() => sessionStorage) inside the persist config.

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const exists = state.cart.find((item) => item.id === product.id);
          if (exists) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "cart-storage", // key name in localStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
