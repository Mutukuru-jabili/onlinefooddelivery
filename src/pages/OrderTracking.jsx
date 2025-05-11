// Tracking.jsx
import React, { useEffect, useState } from "react";
import "../styles/OrderTracking.css";

function Tracking() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("order"));
    setOrder(savedOrder);
  }, []);

  if (!order) return <p>No order found.</p>;

  return (
    <div className="tracking-container">
      <h2>Order Tracking</h2>
      <p>Status: <strong>{order.status}</strong></p>
      <p>Estimated Time: {order.estimatedTime}</p>
      <p>Delivery Address: {order.address}</p>

      <h3>Items:</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>

      <div className="map-container">
        <iframe
          title="Delivery Location"
          src="https://maps.google.com/maps?q=Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Tracking;