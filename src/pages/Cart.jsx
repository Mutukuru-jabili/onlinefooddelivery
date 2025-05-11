import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("UPI");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleQrOrder = () => {
    const order = {
      id: Date.now(),
      status: "Preparing",
      estimatedTime: "30 mins",
      address: "123, Food Street, MyCity",
      items: cartItems,
      paymentMode: selectedPayment,
    };
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.removeItem("cart");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list-horizontal">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item-horizontal">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="total-price">Total: ₹{getTotalPrice()}</h3>

          <div className="payment-options">
            <h4>Select Payment Method</h4>
            <div className="payment-methods">
              {[
                { value: "UPI", label: "UPI (Google Pay, PhonePe)" },
                { value: "Wallet", label: "Wallet (Paytm, Amazon Pay)" },
                { value: "Card", label: "Debit/Credit Card" },
                { value: "COD", label: "Cash on Delivery" },
              ].map(({ value, label }) => (
                <label key={value}>
                  <input
                    type="radio"
                    value={value}
                    checked={selectedPayment === value}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="checkout-buttons">
            <Link to="/payment" onClick={handleQrOrder}>
              <button className="checkout-btn">Proceed to QR Payment</button>
            </Link>
            <Link to="/success" onClick={handleQrOrder}>
              <button className="checkout-btn secondary">Direct Payment Success</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;