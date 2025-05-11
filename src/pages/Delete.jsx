import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    if (!id) {
      alert("Please enter a valid ID");
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:8444/api/products/delete/${parseInt(id)}`);
      alert(response.data);
      setId('');
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
                placeholder="Enter Product ID to Delete"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', paddingTop: '10px' }}>
              <button onClick={handleDelete} style={{
                padding: '8px 20px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Delete;
