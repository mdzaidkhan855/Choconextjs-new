"use client";

import React from "react";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
import { Provider } from "react-redux";
import store from "@/cart/store";

export default function ProductCardList({ products }) {
  return (
    <Provider store={store}>
      <div id="product-section" className={`${styles.productSection}`}>
        <h1 className={`${styles.productTitle}`}>OUR PRODUCTS</h1>
        {products.length === 0 ? (
          <p>No Products</p>
        ) : (
          <div className={`${styles.cardList}`}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Provider>
  );
}
