import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">FoodieExpress</h4>
          <p>Delivering happiness at your doorstep!</p>
        </div>

        <div className="footer-section">
          <h5 className="footer-subtitle">Quick Links</h5>
          <ul className="footer-links">
            <li><a href="/menu">Menu</a></li>
            <li><a href="/order-tracking">Track Order</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5 className="footer-subtitle">Contact Us</h5>
          <p>Email: support@foodieexpress.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 FoodieExpress. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
