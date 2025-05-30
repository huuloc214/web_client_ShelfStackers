import React from 'react';
import '../styles/category.css';
import ProductCard from './ProductCard';

const CategoryPage = () => {
  const products = [
    {
      id: 1,
      title: "Tỏa Lá Xanh Đời",
      image: "https://via.placeholder.com/150",
      oldPrice: 159000,
      newPrice: 143100,
      discount: 10
    },
    {
      id: 2,
      title: "Biển Cả Solomon",
      image: "https://via.placeholder.com/150",
      oldPrice: 238000,
      newPrice: 195000,
      discount: 18
    },

  ];

  return (
    <div className="category-container">
      <aside className="sidebar">
        <h3>NHÓM SẢN PHẨM</h3>
        <ul>
          <li>Văn học</li>
          <li>Truyện ngắn</li>
          <li>Tiểu thuyết</li>
        </ul>

        <h3>GIÁ</h3>
        <ul>
          <li><input type="checkbox" /> Dưới 150.000₫</li>
          <li><input type="checkbox" /> 150.000₫ - 300.000₫</li>
          <li><input type="checkbox" /> 300.000₫ - 500.000₫</li>
        </ul>
      </aside>

      <main className="product-area">
        <div className="product-controls">
          <select>
            <option>Sắp xếp theo</option>
            <option>Mới nhất</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
          </select>
          <select>
            <option>24 sản phẩm</option>
            <option>48 sản phẩm</option>
          </select>
        </div>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
