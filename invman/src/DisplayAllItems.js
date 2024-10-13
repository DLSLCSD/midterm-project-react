import React from 'react';
import './DispItem.css';

const DisplayAllItems = ({ items }) => {
  if (items.length === 0) {
    return <div className="table-container"> 
    <h2>All Items</h2>
      <table className="items-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
      <tr>
        <td colSpan="5">No current items</td>
      </tr>
        </tbody>
      </table>
     
    </div>;
  }

  return (
    <div  className="table-container">
      <h2>All Items</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>₱{item.price.toFixed(2)}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAllItems;
