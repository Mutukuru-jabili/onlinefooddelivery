import { useState } from "react";
import { FaStar, FaTags } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Menu.css";

// CATEGORY DEFINITIONS
const categories = [
  { label: "Veg Starters", type: "Veg", category: "Starter" },
  { label: "Veg Meals", type: "Veg", category: "Meal" },
  { label: "Non-Veg Starters", type: "Non-Veg", category: "Starter" },
  { label: "Non-Veg Meals", type: "Non-Veg", category: "Meal" },
  { label: "Tiffins", type: "Veg", category: "Tiffin" },
  { label: "Soups", type: "Veg", category: "Soup" },
  { label: "Soups (Non-Veg)", type: "Non-Veg", category: "Soup" },
  { label: "Softdrinks", type: "Veg", category: "Softdrink" },
  { label: "Snacks", type: "Veg", category: "Snack" },
  { label: "Ice Creams", type: "Veg", category: "IceCream" },
  { label: "Dinner Combos", type: "Veg", category: "DinnerCombo" },
  { label: "Beverages", type: "Veg", category: "Beverage" },
];

const imageFiles = {
  "Veg Starters": [
    "/images/vegstarter1.jpg",
    "/images/vegstarter2.jpg",
    "/images/vegstarter3.jpg",
    "/images/vegstarter4.jpg",
    "/images/vegstarter5.jpg",
    "/images/vegstarter6.jpg",
    "/images/vegstarter7.jpg",
    "/images/vegstarter8.jpg",
    "/images/vegstarter9.jpg",
    "/images/vegstarter10.jpg",
    "/images/vegstarter11.jpg",
    "/images/vegstarter12.jpg",
    "/images/vegstarters13.jpg",
    "/images/vegstarters14.jpg",
    "/images/vegstarters15.jpg"
  ],
  "Veg Meals": [
    "/images/vegmeals1.jpg",
    "/images/vegmeals2.jpg",
    "/images/vegmeals3.jpg",
    "/images/vegmeals4.jpg",
    "/images/vegmeals5.jpg",
    "/images/vegmeals6.jpg",
    "/images/vegmeals7.jpg",
    "/images/vegmeals8.jpg",
    "/images/vegmeals9.jpg",
    "/images/vegmeals10.jpg",
    "/images/vegmeals11.jpg",
    "/images/vegmeals12.jpg",
    "/images/vegmeals13.jpg",
    "/images/vegmeals14.jpg",
    "/images/vegmeals15.jpg"
  ],
  "Non-Veg Starters": [
    "/images/nonvegstarter1.jpg",
    "/images/nonvegstarter2.jpg",
    "/images/nonvegstarter3.jpg",
    "/images/nonvegstarter4.jpg",
    "/images/nonvegstarter5.jpg",
    "/images/nonvegstarter6.jpg",
    "/images/nonvegstarter7.jpg",
    "/images/nonvegstarter8.jpg",
    "/images/nonvegstarter9.jpg",
    "/images/nonvegstarter10.jpg",
    "/images/nonvegstarter11.jpg",
    "/images/nonvegstarter12.jpg",
    "/images/nonvegstarter13.jpg",
    "/images/nonvegstarter14.jpg",
    "/images/nonvegstarter15.jpg"
  ],
  "Non-Veg Meals": [
    "/images/nonvegmeals1.jpg",
    "/images/nonvegmeals2.jpg",
    "/images/nonvegmeals3.jpg",
    "/images/nonvegmeals4.jpg",
    "/images/nonvegmeals5.jpg",
    "/images/nonvegmeals6.jpg",
    "/images/nonvegmeals7.jpg",
    "/images/nonvegmeals8.jpg",
    "/images/nonvegmeals9.jpg",
    "/images/nonvegmeals10.jpg",
    "/images/nonvegmeals11.jpg",
    "/images/nonvegmeals12.jpg",
    "/images/nonvegmeals13.jpg",
    "/images/nonvegmeals14.jpg",
    "/images/nonvegmeals15.jpg"
  ],
  "Tiffins": [
    "/images/tiffin1.jpg",
    "/images/tiffin2.jpg",
    "/images/tiffin3.jpg",
    "/images/tiffin4.jpg",
    "/images/tiffin5.jpg",
    "/images/tiffin6.jpg",
    "/images/tiffin7.jpg",
    "/images/tiffin8.jpg",
    "/images/tiffin9.jpg",
    "/images/tiffin10.jpg",
    "/images/tiffin11.jpg",
    "/images/tiffin12.jpg",
    "/images/tiffin13.jpg",
    "/images/tiffin14.jpg",
    "/images/tiffin15.jpg"
  ],
  "Soups": [
    "/images/soup1.jpg",
    "/images/soup2.jpg",
    "/images/soup3.jpg",
    "/images/soup4.jpg",
    "/images/soup5.jpg",
    "/images/soup6.jpg",
    "/images/soup7.jpg",
    "/images/soup8.jpg",
    "/images/soup9.jpg",
    "/images/soup10.jpg",
    "/images/soup11.jpg",
    "/images/soup12.jpg",
    "/images/soup13.jpg",
    "/images/soup14.jpg",
    "/images/soup15.jpg"
  ],
  "Soups (Non-Veg)": [
    "/images/nonvegsoup1.jpg",
    "/images/nonvegsoup2.jpg",
    "/images/nonvegsoup3.jpg",
    "/images/nonvegsoup4.jpg",
    "/images/nonvegsoup5.jpg",
    "/images/nonvegsoup6.jpg",
    "/images/nonvegsoup7.jpg",
    "/images/nonvegsoup8.jpg",
    "/images/nonvegsoup9.jpg",
    "/images/nonvegsoup10.jpg",
    "/images/nonvegsoup11.jpg",
    "/images/nonvegsoup12.jpg",
    "/images/nonvegsoup13.jpg",
    "/images/nonvegsoup14.jpg",
    "/images/nonvegsoup15.jpg"
  ],
  "Softdrinks": [
    "/images/softdrink1.jpg",
    "/images/softdrink2.jpg",
    "/images/softdrink3.jpg",
    "/images/softdrink4.jpg",
    "/images/softdrink5.jpg",
    "/images/softdrink6.jpg",
    "/images/softdrink7.jpg",
    "/images/softdrink8.jpg",
    "/images/softdrink9.jpg",
    "/images/softdrink10.jpg",
    "/images/softdrink11.jpg",
    "/images/softdrink12.jpg",
    "/images/softdrink13.jpg",
    "/images/softdrink14.jpg",
    "/images/softdrink15.jpg"
  ],
  "Snacks": [
    "/images/snack1.jpg",
    "/images/snack2.jpg",
    "/images/snack3.jpg",
    "/images/snacks4.jpg",
    "/images/snacks5.jpg",
    "/images/snacks6.jpg",
    "/images/snacks7.jpg",
    "/images/snacks8.jpg",
    "/images/snacks9.jpg",
    "/images/snacks10.jpg",
    "/images/snacks11.jpg",
    "/images/snacks12.jpg",
    "/images/snacks13.jpg",
    "/images/snacks14.jpg",
    "/images/snacks15.jpg"
  ],
  "Ice Creams": [
    "/images/icecream1.jpg",
    "/images/icecream2.jpg",
    "/images/icecream3.jpg",
    "/images/icecream4.jpg",
    "/images/icecream5.jpg",
    "/images/icecream6.jpg",
    "/images/icecream7.jpg",
    "/images/icecream8.jpg",
    "/images/icecream9.jpg",
    "/images/icecream10.jpg",
    "/images/icecream11.jpg",
    "/images/icecream12.jpg",
    "/images/icecream13.jpg",
    "/images/icecream14.jpg",
    "/images/icecream15.jpg"
  ],
  "Dinner Combos": [
    "/images/dc1.jpg",
    "/images/dc2.jpg",
    "/images/dc3.jpg",
    "/images/dc4.jpg",
    "/images/dc5.jpg",
    "/images/dc6.jpg",
    "/images/dc7.jpg",
    "/images/dc8.jpg",
    "/images/dc9.jpg",
    "/images/dc10.jpg",
    "/images/dc11.jpg",
    "/images/dc12.jpg",
    "/images/dc13.jpg",
    "/images/dc14.jpg",
    "/images/dc15.jpg",
  ],
  "Beverages": [
    "/images/bw1.jpg",
    "/images/bw2.jpg",
    "/images/bw3.jpg",
    "/images/bw4.jpg",
    "/images/bw5.jpg",
    "/images/bw6.jpg",
    "/images/bw7.jpg",
    "/images/bw8.jpg",
    "/images/bw9.jpg",
    "/images/bw10.jpg",
    "/images/bw11.jpg",
    "/images/bw12.jpg",
    "/images/bw13.jpg",
    "/images/bw14.jpg",
    "/images/bw15.jpg",
  ]
};


// GENERATE MENU ITEMS
const menuItems = [];
let id = 1;
categories.forEach((cat) => {
  const images = imageFiles[cat.label] || [];
  for (let i = 1; i <= 15; i++) {
    menuItems.push({
      id: id++,
      name: `${cat.label} Item ${i}`,
      price: Math.floor(Math.random() * 300) + 100,
      img: images[(i - 1) % images.length] || "/images/default.jpg",
      type: cat.type,
      category: cat.category,
      rating: (Math.random() * 1.5 + 3.5).toFixed(1),
      tags: i % 3 === 0 ? ["bestseller", "spicy"] : i % 2 === 0 ? ["spicy"] : [],
      reviews: Math.floor(Math.random() * 500) + 50,
    });
  }
});

function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [visibleItems, setVisibleItems] = useState(12);

  const filteredItems = menuItems
    .filter(
      (item) =>
        (filterType === "All" || item.type === filterType) &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="menu-container">
      <ToastContainer position="top-right" autoClose={2000} />

      <aside className="menu-sidebar">
        {categories.map((cat) => (
          <a
            key={cat.label}
            href={`#${cat.label.replace(/\s/g, "-")}`}
            className="menu-sidebar-link"
          >
            {cat.label}
          </a>
        ))}
      </aside>

      <div className="menu-main">
        <header className="menu-header">
          <h1>MyFoodie</h1>
          <div className="menu-controls">
            <input
              type="text"
              placeholder="Search food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search"
            />
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              className="menu-sort"
            >
              <option value="none">Sort</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </header>

        <div className="menu-filters">
          {["All", "Veg", "Non-Veg"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                checked={filterType === type}
                onChange={() => setFilterType(type)}
              />{" "}
              {type}
            </label>
          ))}
        </div>

        {categories.map((cat) => {
          const catItems = filteredItems.filter(
            (i) => i.category === cat.category && i.type === cat.type
          );
          if (!catItems.length)
            return <p key={cat.label}>No items found for {cat.label}</p>;

          return (
            <section
              id={cat.label.replace(/\s/g, "-")}
              key={cat.label}
              className="menu-section"
            >
              <h2>{cat.label}</h2>
              <div className="menu-grid">
                {catItems.slice(0, visibleItems).map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    className="menu-item"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="menu-item-img"
                      loading="lazy"
                    />
                    <h3>{item.name}</h3>
                    <div className="menu-item-rating">
                      {Array.from({ length: Math.round(item.rating) }).map(
                        (_, i) => (
                          <FaStar key={i} />
                        )
                      )}
                      <span>({item.reviews})</span>
                    </div>
                    <p className="menu-item-price">₹{item.price.toFixed(2)}</p>
                    <div className="menu-item-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>
                          <FaTags /> {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="menu-add-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </motion.div>
                ))}
              </div>
              {catItems.length > visibleItems && (
                <div className="menu-loadmore">
                  <button onClick={() => setVisibleItems((prev) => prev + 8)}>
                    Load More
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
