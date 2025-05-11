import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [product, setProduct] = useState({ id: '', name: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!product.id || !product.name.trim()) {
      alert("Please provide both ID and a new Name.");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:8444/api/products/update", 
        product,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert(response.data);
    } catch (err) {
      // Improved error handling
      const errorMessage = err.response?.data?.message || err.message || "An unknown error occurred.";
      alert(`Error occurred: ${errorMessage}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type="text"
        name="id"
        placeholder="Product ID"
        value={product.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="New Product Name"
        value={product.name}
        onChange={handleChange}
        style={{ marginLeft: '10px' }}
      />
      <button onClick={handleUpdate} style={{ marginLeft: '10px' }}>Update</button>
    </div>
  );
}

export default Update;
