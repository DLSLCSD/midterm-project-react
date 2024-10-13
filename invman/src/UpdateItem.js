import React, { useState } from 'react';
import './update.css';
import './additem.css'
const UpdateItem = ({ updateItem, items }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('stock'); 
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateItem = (e) => {
    e.preventDefault();

    // Find the item by ID
    const item = items.find((item) => item.id === id);
    if (item) {
      const oldValue = field === 'stock' ? item.stock : item.price;
      const parsedNewValue = field === 'stock' ? parseInt(newValue) : parseFloat(newValue);
      const isUpdated = updateItem(id, field, parsedNewValue);

      if (isUpdated) {
        setMessage(`Item ${item.name} ${field === 'stock' ? 'quantity' : 'price'} is updated from ${oldValue} to ${parsedNewValue}`);
      } else {
        setMessage('Update failed!');
      }
    } else {
      setMessage('Item not found!');
    }

    setId('');
    setNewValue('');
  };

  return (
    <div className="add-item-form">
      <h2>Update Item</h2>
      <form onSubmit={handleUpdateItem} className="add-item-form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
          className="add-item-input"
        />
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="add-item-select"
        >
          <option value="stock">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="New Value"
          required
          className="add-item-input"
        />
        <button type="submit" className="add-item-button">Update</button>
      </form>
      {message && <p className="update-item-message">{message}</p>}
    </div>
  );
};

export default UpdateItem;
