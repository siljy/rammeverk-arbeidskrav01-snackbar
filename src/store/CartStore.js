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

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.product.id !== id),
    })),

  increase: (id) => {
    set((state) => {
      const updatedCart = state.cartItems.map((item) => {
        if (item.product.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return { cartItems: updatedCart };
    });
  },

  decrease: (id) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === id
      );

      if (existingItem && existingItem.quantity <= 1) {
        alert(
          "Kan ikke fjerne flere av denne varen, så varen fjernes fra din handlekurv"
        );
        return {
          cartItems: state.cartItems.filter((item) => item.product.id !== id),
        };
      }
      return {
        cartItems: state.cartItems.map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    });
  },
}));
