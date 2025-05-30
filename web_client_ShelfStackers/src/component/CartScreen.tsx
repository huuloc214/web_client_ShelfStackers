import React, { useState } from 'react';
import '../styles/Cart.css';
import '../styles/Footer.css';
import ProductSuggestion from './ProductSuggestion';
import Footer from './FooterLogin';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Làm Thế Nào Để Ôm Một Chú Nhím?',
      price: 75400,
      oldPrice: 116000,
      quantity: 1,
      checked: false,
      image: '/images/book3.png'
    },
    {
      id: 2,
      title: 'Search Inside Yourself - Tạo Ra Lợi Nhuận...',
      price: 119000,
      oldPrice: 149000,
      quantity: 1,
      checked: true,
      image: '/images/book5.png'
    }
  ]);

  const shippingFee = 20000;

  const handleToggleCheck = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleCheckout = () => {
    const selectedItems = cartItems.filter(item => item.checked);
    const total = selectedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    navigate('/checkout', {
      state: {
        items: selectedItems,
        shippingFee,
        total: total + shippingFee
      }
    });
  };

  return (
    <div>
      {/* HEADER */}
      <header className="main-header">
        <div className="banner">
          <img src="/images/bannerBook.png" className="Imgbaner" alt="Banner giới thiệu sách" />
        </div>
        <div className="header-bar">
          <div className="header-logo" onClick={() => navigate('/home')}>
            <img src="/images/FahasaLogo.png" alt="Logo" />
          </div>
          <div className="header-search">
            <input type="text" placeholder="Tìm kiếm sách..." />
            <button>Tìm kiếm</button>
          </div>
          <div className="header-icons">
            <div className="header-icon" onClick={() => navigate('/category')} title="Danh mục" style={{ cursor: "pointer" }}>
              <img src="/images/grid-icon.png" alt="Category Icon" className="grid-icon" />
              <span className="hover-link">Danh mục</span>
            </div>
            <div className="header-icon">
              <i className="fas fa-bell"></i>
              <span className="hover-link">Thông báo</span>
            </div>
            <div className="header-icon" onClick={() => navigate('/cart')} style={{ cursor: "pointer" }}>
              <i className="fas fa-shopping-cart"></i>
              <span className="hover-link">Giỏ hàng</span>
            </div>
            <div className="header-icon" onClick={() => navigate('/profile')} style={{ cursor: "pointer" }}>
              <i className="fas fa-user"></i>
              <span className="hover-link">Tài khoản</span>
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header box">
            <input
              type="checkbox"
              className="select-all-checkbox"
              checked={cartItems.every(item => item.checked)}
              onChange={(e) => {
                const checked = e.target.checked;
                setCartItems(prev => prev.map(item => ({ ...item, checked })));
              }}
            />
            <span className="select-all-text">Chọn tất cả ({cartItems.length} sản phẩm)</span>
            <span className="qty-label">Số lượng</span>
            <span className="price-label">Thành tiền</span>
          </div>

          <div className="cart-item-list box">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <input
                  type="checkbox"
                  className="item-checkbox"
                  checked={item.checked}
                  onChange={() => handleToggleCheck(item.id)}
                />
                <img src={item.image} alt={item.title} className="book-image" />
                <div className="item-info">
                  <h4 className="book-title">{item.title}</h4>
                  <span className="book-price">
                    {item.price.toLocaleString()} đ
                    <span className="old-price">{item.oldPrice.toLocaleString()} đ</span>
                  </span>
                </div>
                <div className="price-control">
                  <div className="quantity-control">
                    <button>-</button>
                    <input type="number" value={item.quantity} readOnly />
                    <button>+</button>
                  </div>
                  <span className="book-total">{(item.price * item.quantity).toLocaleString()} đ</span>
                  <button className="remove-btn">🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-right">
          <div className="promotion-box box">
            <div className="promotion-header">
              <span className="promo-icon">🏷️</span>
              <span className="promo-text">Mã Giảm 10K - Toàn Sàn</span>
              <a href="#" className="see-more">Xem thêm</a>
            </div>
            <div className="promo-body">
              <p>Đơn hàng từ 130k - Không bao gồm giá trị của các sản phẩm sau Manga, Ngoại...</p>
              <p className="promo-hsd">HSD: 31/05/2025</p>
              <div className="promo-progress"><div className="progress-bar" style={{ width: '90%' }}></div></div>
              <button className="buy-more-btn">Mua thêm</button>
            </div>
          </div>

          <div className="gift-box box">
            <div className="gift-header">
              <span className="gift-icon">🎁</span>
              <span className="gift-text">Nhận quà</span>
              <button className="choose-gift-btn">Chọn quà</button>
            </div>
          </div>

          <div className="summary-box box">
            <div className="summary-left">
              <p>Thành tiền:</p>
              <p>Phí vận chuyển (Giao hàng tiêu chuẩn):</p>
              <p><strong>Tổng Số Tiền (gồm VAT)</strong></p>
            </div>
            <div className="summary-right">
              <p>
                {cartItems
                  .filter(item => item.checked)
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toLocaleString()} đ
              </p>
              <p>{shippingFee.toLocaleString()} đ</p>
              <p>
                <strong>
                  {(cartItems
                    .filter(item => item.checked)
                    .reduce((sum, item) => sum + item.price * item.quantity, 0) + shippingFee).toLocaleString()} đ
                </strong>
              </p>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>THANH TOÁN</button>
            <p className="note">(Giảm giá trên web chỉ áp dụng cho bán lẻ)</p>
          </div>
        </div>
      </div>

      <ProductSuggestion />
      <Footer />
    </div>
  );
};

export default Cart;
