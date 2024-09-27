"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/cart/cartSlice";
import styles from "./cart.module.css";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  console.log("Cart Items: ", cartItems);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    router.push("/cart");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {/* <ul> */}
          {cartItems?.map((item) => (
            // <li key={item.id} className={styles.cartItem}>
            <div key={item.id} className={styles.cartItem}>
              <strong>{item.name}</strong>
              <span>${item.price}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Total: ${item.total}</span>

              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>

            // </li>
          ))}
          {/* </ul> */}
          <div className={styles.cartSummary}>
            <p>Total Items: {totalQuantity}</p>
            {/* <p>Total Price: ${totalPrice.toFixed(2)}</p> */}
            <p>Total Price: ${totalPrice}</p>
          </div>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
