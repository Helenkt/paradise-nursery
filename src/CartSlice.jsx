import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.find((item) => item.id === plant.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      return state.filter((cartItem) => cartItem.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((cartItem) => cartItem.id === id);

      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export const selectCartItems = (state) => state.cart;

export const selectCartCount = (state) =>
  state.cart.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.reduce((total, item) => total + (item.cost ?? item.price) * item.quantity, 0);

export default CartSlice.reducer;
