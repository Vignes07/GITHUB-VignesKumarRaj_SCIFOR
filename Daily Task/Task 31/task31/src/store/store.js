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
      return state.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        return state.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } =
  cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });
