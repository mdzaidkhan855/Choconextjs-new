//"use client";

// store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Cart items
  totalQuantity: 0, // Total number of items in the cart
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem._id);

      if (!existingItem) {
        state.items.push({
          id: newItem._id,
          name: newItem.name,
          price: newItem.price,
          // quantity: 1,
          quantity: newItem.quantity,
          total: parseInt(newItem.price) * parseInt(newItem.quantity),
        });
      } else {
        existingItem.quantity++;
        existingItem.total += parseInt(newItem.price);
      }
      state.totalQuantity += parseInt(newItem.quantity);
      state.totalPrice += parseInt(newItem.price) * parseInt(newItem.quantity);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= parseInt(existingItem.quantity);
        state.totalPrice -=
          parseInt(existingItem.price) * parseInt(existingItem.quantity);
        state.items = state.items.filter((item) => item.id !== id);
        // state.items.pop(existingItem);
        // if (existingItem.quantity === 1) {
        //   state.items = state.items.filter((item) => item.id !== id);
        // } else {
        //   existingItem.quantity--;
        //   existingItem.total -= existingItem.price;
        // }
        // state.totalQuantity--;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
