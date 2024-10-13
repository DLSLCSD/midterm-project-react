import React, { useState } from 'react';
import './additem.css';

const AddItem = ({ addItem, items }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();

    const idExists = items.some(item => item.id === id);
    if (idExists) {
      setMessage('Item ID already exists. Please use a unique ID.');
    } else if (id && name && category && stock && price) {
      addItem({
        id,
        name,
        category,
        stock: parseInt(stock),
        price: parseFloat(price)
      });
      setMessage('Item added successfully!');

      setId('');
      setName('');
      setCategory('');
      setStock('');
      setPrice('');
    } else {
      setMessage('Please fill out all fields!');
    }
  };

  return (
    <div className="add-item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleAddItem} >
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
          required
          className="add-item-input"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="add-item-input"
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          required
          className="add-item-input"
        />
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          className="add-item-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="add-item-select"
          required
        >
          <option value="" disabled>Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit" className="add-item-button">Add Item</button>
      </form>
      {message && <p className="add-item-message">{message}</p>}
    </div>
  );
};

export default AddItem;
