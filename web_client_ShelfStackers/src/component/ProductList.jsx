import React from 'react';
import ProductCard from './ProductCard';

const dummyProducts = [
  {
    id: 1,
    title: 'Tiểu Lâu Dài Xanh',
    price: 143000,
    oldPrice: 160000,
    image: '/images/book1.jpg',
    isNew: true,
    discount: 10
  },
  {
    id: 2,
    title: 'Mưa Đỏ',
    price: 168000,
    oldPrice: 206000,
    image: '/images/book2.jpg',
    isNew: true,
    discount: 18
  },
  // Thêm các sách khác...
];

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="top-bar">
        <select>
          <option>Sắp xếp theo: Mới nhất</option>
          <option>Giá tăng dần</option>
          <option>Giá giảm dần</option>
        </select>
        <select>
          <option>24 sản phẩm</option>
          <option>48 sản phẩm</option>
        </select>
      </div>
      <div className="products-grid">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
