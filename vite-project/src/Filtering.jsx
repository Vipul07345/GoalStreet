import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Filter by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
      {filteredProducts.length === 0 && searchTerm && (
        <p>No products found matching "{searchTerm}"</p>
      )}
    </div>
  );
};

function Filtering() {
  const initialProducts = [
    { id: 1, name: 'Laptop', price: 35000 },
    { id: 2, name: 'Smartphone', price: 20000 },
    { id: 3, name: 'Tablet', price: 15000 },
    { id: 4, name: 'Headphones', price: 3000 },
    { id: 5, name: 'Smartwatch', price: 8000 },
    { id: 6, name: 'Laptop Charger', price: 1500 },
  ];

  return (
    <div className="App">
      <ProductList products={initialProducts} />
    </div>
  );
}

export default Filtering;