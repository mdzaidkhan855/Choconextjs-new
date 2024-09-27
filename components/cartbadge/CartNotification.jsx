import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const CartNotification = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="cart-notification">
      <Link href="/cart">
        <div className="cart-icon">
          🛒
          {totalQuantity > 0 && (
            <span className="notification-badge">{totalQuantity}</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartNotification;
