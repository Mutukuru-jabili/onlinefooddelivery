import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleOrderNow = () => {
    navigate("/menu");
  };

  const restaurants = [
    {
      name: "Biryani Palace",
      image: "/images/bp.jpg",
      description: "Spicy Andhra biryanis & meals",
      tags: "biryani andhra spice",
    },
    {
      name: "Green Bowl",
      image: "/images/gb.jpg",
      description: "Fresh and healthy vegetarian picks",
      tags: "veg healthy organic salad",
    },
    {
      name: "Pizza Hub",
      image: "/images/ph.jpg",
      description: "Cheesy pizzas and cold beverages",
      tags: "pizza italian cheese fastfood",
    },
    {
      name: "Tandoori Flames",
      image: "/images/tandoori.jpg",
      description: "Grilled tandoori and North Indian delights",
      tags: "tandoori grill north indian",
    },
  ];

  const filteredRestaurants = restaurants.filter((restaurant) =>
    (restaurant.name + " " + restaurant.description + " " + restaurant.tags)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* 🔶 Header Banner */}
      <section className="hero-banner">
        <div className="hero-left">
          <h1>Order food & groceries</h1>
          <p>Discover the best restaurants near you</p>
          <div className="search-box">
            <select>
              <option>Vaddeswaram, Andhra Pradesh</option>
              <option>Vijayawada</option>
              <option>Guntur</option>
            </select>
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="hero-right">
          <img src="/images/food-left.jpg" alt="Delivery" />
          <button onClick={handleOrderNow}>Order Now</button>
        </div>
      </section>

      {/* 🍱 Categories */}
      <section className="categories">
        <div className="category-card">
          <h3>FOOD DELIVERY</h3>
          <p>From Restaurants</p>
          <span>UP TO 60% OFF</span>
        </div>
        <div className="category-card">
          <h3>INSTAMART</h3>
          <p>Instant Grocery</p>
          <span>UP TO 60% OFF</span>
        </div>
        <div className="category-card">
          <h3>DINEOUT</h3>
          <p>Eat Out & Save</p>
          <span>UP TO 50% OFF</span>
        </div>
        <div className="category-card">
          <h3>GENIE</h3>
          <p>Pick-up & Drop</p>
          <span>Reliable Delivery</span>
        </div>
      </section>

      {/* 🍴 Restaurant Grid */}
      <section className="restaurant-section">
        <h2>Restaurants near you</h2>
        <div className="restaurant-grid">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant, index) => (
              <div className="restaurant-card" key={index}>
                <img src={restaurant.image} alt={restaurant.name} />
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description}</p>
              </div>
            ))
          ) : (
            <p>No matching restaurants found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
