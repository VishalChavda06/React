import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/YouMayAlsoLike.css';

const YouMayAlsoLike = () => {
  const { addToCart } = useCart();

  const recommendedProducts = [
    {
      id: 'rec1',
      name: 'Ergonomic Chair Pro',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      selectedColor: 0,
      colors: ['#f5f5f5', '#d3d3d3']
    },
    {
      id: 'rec2',
      name: 'Double Standing Desk',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      selectedColor: 0,
      colors: ['#d2b48c', '#ffc0cb']
    },
    {
      id: 'rec3',
      name: 'Duo Standing Desk',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      selectedColor: 0,
      colors: ['#90EE90', '#98FB98']
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`${product.name} added to cart!`);
  };

  return (
    <div className="you-may-also-like">
      <h2 className="section-title">You May Also Like</h2>
      <div className="products-grid">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">${product.price}</div>
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
