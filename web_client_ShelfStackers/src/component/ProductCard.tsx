import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <div className="prices">
        <span className="new-price">{product.newPrice.toLocaleString()}₫</span>
        <span className="old-price">{product.oldPrice.toLocaleString()}₫</span>
      </div>
      <span className="discount">-{product.discount}%</span>
    </div>
  );
};

export default ProductCard;
