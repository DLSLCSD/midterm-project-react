import React, { useState } from 'react';
import './DispItem.css';

const SearchItem = ({ items }) => {
  const [searchId, setSearchId] = useState('');  
  const [foundItem, setFoundItem] = useState(null); 
  const [message, setMessage] = useState('');  

  const handleSearch = (e) => {
    e.preventDefault();

    const item = items.find(item => item.id === searchId);

    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setFoundItem(null);
      setMessage('Item not found.');
    }
  };

  return (
    <div className="table-container">
      <h2>Search Item by ID</h2>
      <form onSubmit={handleSearch} className="search-item-form">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter Item ID"
          required
          className="search-item-input"
        />
        <button type="submit" className="search-item-button">Search</button>
      </form>

      {}
      {foundItem ? (
        <table className="item-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{foundItem.id}</td>
              <td>{foundItem.name}</td>
              <td>{foundItem.category}</td>
              <td>{foundItem.stock}</td>
              <td>${foundItem.price.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        message && <p className="search-item-message">{message}</p>
      )}
    </div>
  );
};

export default SearchItem;
