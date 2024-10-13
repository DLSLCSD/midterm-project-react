import React, { useState } from 'react';
import './additem.css';

const RemoveItem = ({ removeItem, items = [] }) => { 
  const [id, setId] = useState('');
  const [itemDetails, setItemDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const removed = removeItem(id);
    if (removed) {
      alert('Item removed successfully!');
      setItemDetails(null); 
      setId(''); 
    } else {
      alert('Item not found!');
    }
  };

  const handleIdChange = (e) => {
    const value = e.target.value;
    setId(value);

    if (items && items.length > 0) {
      const foundItem = items.find((item) => item.id === value);
      if (foundItem) {
        setItemDetails(foundItem);
      } else {
        setItemDetails(null);
      }
    }
  };

  return (
    <div class="add-item-form">
      <h2>Remove Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item ID"
          value={id}
          onChange={handleIdChange}
          required
          className="add-item-input"
        />
        <button type="submit"className="add-item-button">Remove</button>
      </form>

      {}
      {itemDetails && (
        <div>
          <h3>Item Details:</h3>
          <p>Name: {itemDetails.name}</p>
          <p>Category: {itemDetails.category}</p>
          <p>Stock: {itemDetails.stock}</p>
        </div>
      )}
    </div>
  );
};

export default RemoveItem;
