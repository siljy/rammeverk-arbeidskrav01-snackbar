import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (newItem) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.name === newItem.name
      );

      if (existingItem)
        return {
          cartItems: state.cartItems.map((item) =>
            item.product.name === newItem.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      else
        return {
          cartItems: [...state.cartItems, { product: newItem, quantity: 1 }],
        };
    });
  },

  //   removeFromCart:
}));
