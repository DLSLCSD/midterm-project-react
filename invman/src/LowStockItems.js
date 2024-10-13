import React from 'react';
import './DispItem.css';

const LowStockItems = ({ items }) => {
 
  const lowStockItems = items.filter(item => item.stock <= 5);

  return (
    <div class="table-container">
      <h2>Low Stock Items</h2>

      {lowStockItems.length > 0 ? (
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
            {lowStockItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items with low stock.</p>
      )}
    </div>
  );
};

export default LowStockItems;
