import React, { useState } from 'react';
import './DispItem.css';

const DisplayByCategory = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items; 

  return (
    <div className="table-container">
      <h2>Display Items by Category</h2>

      {}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-select"
      >
        <option value="">All Categories</option> {}
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      {}
      <table className="items-table">
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
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No items found in this category.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayByCategory;
