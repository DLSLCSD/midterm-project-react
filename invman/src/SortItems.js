import React, { useState } from 'react';
import './DispItem.css';

const SortItems = ({ items }) => {
  const [sortField, setSortField] = useState('quantity'); 
  const [sortOrder, setSortOrder] = useState('ascending');
  const [sortedItems, setSortedItems] = useState(items);

  const handleSort = () => {
    let sortedArray = [...items];

    sortedArray.sort((a, b) => {
      let fieldA = sortField === 'quantity' ? a.stock : a.price;
      let fieldB = sortField === 'quantity' ? b.stock : b.price;

      if (sortOrder === 'ascending') {
        return fieldA - fieldB;
      } else {
        return fieldB - fieldA;
      }
    });

    setSortedItems(sortedArray); 
  };

  const handleFieldChange = (e) => setSortField(e.target.value);
  const handleOrderChange = (e) => setSortOrder(e.target.value);

  return (
    <div className="table-container">
      <h2>Sort Items</h2>

      {}
      <div className="sort-options">
        <label>Sort By: </label>
        <select value={sortField} onChange={handleFieldChange} className="sort-field-select">
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>

        <label>Order: </label>
        <select value={sortOrder} onChange={handleOrderChange} className="sort-order-select">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>

        <button onClick={handleSort} className="sort-button">Sort</button>
      </div>

      {}
      {sortedItems.length > 0 && (
        <table className="sorted-items-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SortItems;
