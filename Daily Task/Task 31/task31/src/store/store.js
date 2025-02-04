import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    decrement: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          const index = state.findIndex((item) => item.id === action.payload);
          if (index !== -1) state.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decrement } = cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });
