import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">My Profile</h2>
      <p><strong>Name:</strong> Jane Doe</p>
      <p><strong>Email:</strong> janedoe@example.com</p>
      <p><strong>Phone:</strong> +91-9876543210</p>

      <div className="mt-6 space-y-3">
        <Link to="/order-tracking" className="block text-orange-600 hover:underline">
          ➤ Order Tracking
        </Link>
        <Link to="/delivery-details" className="block text-orange-600 hover:underline">
          ➤ Delivery Partner Details
        </Link>
        <Link to="/about-us" className="block text-orange-600 hover:underline">
          ➤ About Us
        </Link>
      </div>
    </div>
  );
};

export default Profile;
