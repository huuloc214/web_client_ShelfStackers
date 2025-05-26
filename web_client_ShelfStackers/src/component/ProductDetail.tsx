import React from 'react';
import '../styles/ProductDetail.css';
import ProductSuggestion from './ProductSuggestion';

const ProductDetail = () => {
  return (
    <>
      <div className="product-detail">
        <div className="left-panel">
          <img
            src="https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece-tap-106---bia-1.jpg"
            alt="One Piece 106"
          />
        </div>

        <div className="right-panel">
          <div className="product-box product-name">
            <h1>One Piece Tập 106 - Giấc Mơ Của Thiên Tài</h1>
          </div>

          <div className="product-box product-price">
            <span className="new-price">28.500đ</span>
            <span className="old-price">30.000đ</span>
            <span className="discount">-5%</span>
          </div>

          <div className="product-box">
            <p><strong>Tác giả:</strong> Eiichiro Oda</p>
            <p><strong>Nhà xuất bản:</strong> NXB Kim Đồng</p>
            <p><strong>Năm XB:</strong> 2024</p>
            <p><strong>Độ tuổi:</strong> 15+</p>
          </div>

          <div className="product-box">
            <p><strong>Ngôn ngữ:</strong> Tiếng Việt</p>
            <p><strong>Số trang:</strong> 200</p>
            <p><strong>Trọng lượng:</strong> 150g</p>
            <p><strong>Kích thước:</strong> 17.6 x 11.3 cm</p>
          </div>

          <div className="product-box product-action">
            <button className="btn btn-outline">Thêm vào giỏ hàng</button>
            <button className="btn btn-primary">Mua ngay</button>
          </div>
        </div>
      </div>

      <ProductSuggestion />
    </>
  );
};

export default ProductDetail;
