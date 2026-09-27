import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a product to the cart, or increase its quantity if it already exists.
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: product.quantity ?? 1,
        });
      }
    },

    // Remove a product from the cart using its product ID.
    removeItem: (state, action) => {
      const productId =
        typeof action.payload === "object" ? action.payload.id : action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },

    // Set the quantity for a product. A quantity of 0 or less removes it.
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((entry) => entry.id === id);

      if (!item) return;

      const nextQuantity = Number(quantity);
      if (!Number.isFinite(nextQuantity) || nextQuantity <= 0) {
        state.items = state.items.filter((entry) => entry.id !== id);
      } else {
        item.quantity = Math.floor(nextQuantity);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
