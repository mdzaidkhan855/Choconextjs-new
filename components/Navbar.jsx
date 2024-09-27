"use client";

import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "@/cart/store";
import CartNotification from "@/components/cartbadge/CartNotification";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <img
          src="/images/logo1.png" // Path relative to the 'public' folder
          alt="My Image"
        />
      </div>
      <div>
        <ul className="nav-right">
          <li className="font-thin">Home</li>
          <Link href="/#product-section">
            <li>Product</li>
          </Link>

          <li>contact</li>
          <li>
            <Provider store={store}>
              <CartNotification />
            </Provider>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
