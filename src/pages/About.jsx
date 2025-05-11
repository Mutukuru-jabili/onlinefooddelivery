import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>FoodDelivery</strong>! We are committed to bringing you the
        most delicious food, freshly prepared and delivered straight to your door.
      </p>
      <p>
        Our mission is to make online food ordering seamless, reliable, and full
        of delightful experiences. Whether you're craving a burger, pizza, or a
        healthy meal, we have it all!
      </p>
      <h3>Why Choose Us?</h3>
      <ul>
        <li>🍽️ Wide variety of cuisines</li>
        <li>🚀 Fast and reliable delivery</li>
        <li>💳 Secure payment options</li>
        <li>🌱 Fresh and high-quality ingredients</li>
      </ul>
      <h3>Our Story</h3>
      <p>
        Started in 2024, FoodDelivery began as a small initiative to connect local
        restaurants with food lovers. Today, we are proud to serve thousands of
        happy customers every day.
      </p>
      <h3>Contact Us</h3>
      <p>📍 Location: Vijayawada, India</p>
      <p>📞 Phone: +91 98765 43210</p>
      <p>📧 Email: support@fooddelivery.com</p>
    </div>
  );
};

export default About;
