"use client";

import { useState, useRef } from "react";
import styles from "./product.module.css";

// components/ProductCard.js
import { useDispatch } from "react-redux";
import { addToCart } from "@/cart/cartSlice";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const selectQuantity = useRef(null);
  // State to handle the visibility of the overlay
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Function to open overlay
  const handleCardClick = () => {
    setOverlayVisible(true);
  };

  // Function to close overlay
  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: selectQuantity.current.value }));
    setOverlayVisible(false);
    router.push("/cart");
  };

  return (
    <div>
      <div className={styles.card} onClick={handleCardClick}>
        <img src={product.image} alt="preview" />
        <h2>{product.name}</h2>
        <span>Rs: {product.price}</span>
      </div>

      {/* Overlay Component */}
      {isOverlayVisible && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h2>{product.name}</h2>
            <p>Rs: {product.price}</p>
            <p>{product.description}</p>
            <div className={styles.quantity}>
              <label htmlFor="quantitySelect">Quantity: </label>
              <select ref={selectQuantity} id="quantitySelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className={styles.overlayButton}>
            <button className={styles.closeButton} onClick={closeOverlay}>
              Close
            </button>
            <button className={styles.closeButton} onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
