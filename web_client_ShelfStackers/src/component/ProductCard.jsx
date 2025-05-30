import React from 'react';

const ProductCard = ({ data }) => {
  return (
    <div className="product-card">
      {data.isNew && <span className="badge">Mới</span>}
      <img src={data.image} alt={data.title} />
      <h4>{data.title}</h4>
      <div className="price">
        <span>{data.price.toLocaleString()}₫</span>
        <del>{data.oldPrice.toLocaleString()}₫</del>
      </div>
      {data.discount && <div className="discount">-{data.discount}%</div>}
    </div>
  );
};

export default ProductCard;
