"use client";

// components/Cart.js
import { Provider } from "react-redux";
import store from "@/cart/store";
import Cart from "@/components/cart/CartComponent";

const CartPage = () => {
  return (
    <div>
      <Provider store={store}>
        <Cart />
      </Provider>
    </div>
  );
};

export default CartPage;
