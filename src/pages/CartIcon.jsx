import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartIcon.css";

function CartIcon() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCount(totalCount);
    }, 500); // Update every 0.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/cart" className="cart-icon">
      <FaShoppingCart />
      {count > 0 && <span className="cart-count">{count}</span>}
    </Link>
  );
}

export default CartIcon;
