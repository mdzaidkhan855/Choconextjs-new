//"use client";

// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart slice reducer to the store
  },
});

export default store;
