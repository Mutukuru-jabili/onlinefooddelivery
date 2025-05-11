import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Show() {
  const [products, setProducts] = useState([]);

  // Fetch products from backend when component mounts
  useEffect(() => {
    axios.get("http://localhost:8444/api/products/get")
      .then(res => setProducts(res.data))
      .catch(err => alert("Error fetching data: " + err.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ marginBottom: '20px' }}>📦 Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table
          border="1"
          style={{
            margin: 'auto',
            width: '60%',
            borderCollapse: 'collapse',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <tr>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>Name</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td style={{ padding: '10px', textAlign: 'center' }}>{p.id}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{p.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Show;
