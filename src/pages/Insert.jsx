import React, { useState } from 'react';
import axios from 'axios';

function Insert() {
  const [product, setProduct] = useState({
    id: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!product.id || !product.name) {
      alert("Please fill both ID and Name");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8444/api/products/add", {
        id: parseInt(product.id),
        name: product.name
      });
      alert(response.data);
      setProduct({ id: '', name: '' }); // Reset form after submission
    } catch (error) {
      alert("Error occurred: " + error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <table>
        <tbody>
          <tr>
            <td><label>ID:</label></td>
            <td>
              <input
                type="number"
                name="id"
                placeholder="Enter ID"
                value={product.id}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td><label>Name:</label></td>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={product.name}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', paddingTop: '10px' }}>
              <button onClick={handleSubmit} style={{
                padding: '8px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}>
                Insert
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Insert;
