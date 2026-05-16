import React from 'react';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Butter Chicken', price: '₹350', category: 'Main Course' },
    { id: 2, name: 'Paneer Tikka', price: '₹280', category: 'Starter' },
    { id: 3, name: 'Veg Biryani', price: '₹220', category: 'Main Course' },
    { id: 4, name: 'Gulab Jamun', price: '₹120', category: 'Dessert' },
    { id: 5, name: 'Chicken Dum Biryani', price: '₹320', category: 'Main Course' },
    { id: 6, name: 'Chocolate Brownie', price: '₹180', category: 'Dessert' },
  ];

  const handleOrder = (name) => {
    alert(`${name} added to your selection!`);
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px' }}>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="card menu-card">
            <h3>{item.name}</h3>
            <p style={{ color: '#666', marginBottom: '5px' }}>{item.category}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '15px' }}>{item.price}</p>
            <button onClick={() => handleOrder(item.name)}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
