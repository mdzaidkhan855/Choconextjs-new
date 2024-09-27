"use client";

// pages/_app.js
import { Provider } from "react-redux";
import store from "@/cart/store"; // Adjust this path based on your folder structure
//import "@/glo"; // Import global styles if any

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
