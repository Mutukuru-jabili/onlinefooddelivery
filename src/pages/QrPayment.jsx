

import React from 'react';
import '../styles/QrPayment.css';

const QrPayment = () => {
  return (
    <div className="qr-container">
      <h2>Scan to Pay</h2>
      <div className="qr-box">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay&size=200x200"
          alt="QR Code"
          className="qr-img"
        />
        <p>Scan this code with any UPI app</p>
      </div>
      <button className="btn-payment">Payment Done</button>
    </div>
  );
};

export default QrPayment;
