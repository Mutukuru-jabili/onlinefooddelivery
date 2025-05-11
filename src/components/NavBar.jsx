import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  }, []);

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/signin");
  };

  const toggleProfileMenu = () => setShowProfileMenu((prev) => !prev);
  const toggleAdminMenu = () => setShowAdminMenu((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">🍔 <span className="brand">Foodie!!</span></Link>
        </div>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/order-tracking">Track Order</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="dropdown">
            <button className="dropdown-toggle" onClick={toggleAdminMenu}>Admin ▾</button>
            {showAdminMenu && (
              <ul className="dropdown-menu vertical-menu">
                <li><Link to="/insert">Insert</Link></li>
                <li><Link to="/show">Show</Link></li>
                <li><Link to="/update/1">Update</Link></li>
                <li><Link to="/delete/1">Delete</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        {currentUser ? (
          <div className="dropdown">
            <button onClick={toggleProfileMenu} className="dropdown-toggle username">
              👤 {currentUser.name} ▾
            </button>
            {showProfileMenu && (
              <ul className="dropdown-menu profile-menu">
                <li>
                  <button onClick={handleLogout} className="logout-button">Logout</button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}

        <div className="cart-container">
          <Link to="/cart" className="cart-icon">
            🛒 <span className="cart-count">{totalCartItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
