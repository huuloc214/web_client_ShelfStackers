import React from 'react';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import ProductSuggestion from './ProductSuggestion';
import Footer from './FooterLogin';

export default function RegisterScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="main-header">
        <div className="banner">
          <img src="/images/bannerBook.png" className="Imgbaner" alt="Banner giới thiệu sách" />
        </div>

        <div className="header-bar">
          <div className="header-logo">
            <img src="/images/FahasaLogo.png" alt="Logo" />
          </div>

          <div className="header-search">
            <input type="text" placeholder="Tìm kiếm sách..." />
            <button>Tìm kiếm</button>
          </div>

          <div className="header-icons">
            <div className="header-icon">
              <i className="fas fa-bell"></i>
              <span>Thông báo</span>
            </div>
            <div className="header-icon">
              <i className="fas fa-shopping-cart"></i>
              <span>Giỏ hàng</span>
            </div>
            <div className="header-icon">
              <i className="fas fa-user"></i>
              <span>Tài khoản</span>
            </div>
          </div>
        </div>
      </header>

      <div className="login-wrapper">
        <div className="login-tabs">
          <span onClick={() => navigate('/login')}>Đăng nhập</span>
          <span className="active">Đăng ký</span>
        </div>

        <div className="login-form">
          <label>Số điện thoại</label>
          <input type="text" placeholder="Nhập số điện thoại" />

          <label>Chọn phương thức xác minh</label>
          <div className="verification-methods">
            <input type="text" placeholder="Tin nhắn SMS" />
            <input type="text" placeholder="Zalo ZNS" />
          </div>

          <label>Mã xác thực OTP</label>
          <input type="text" placeholder="Nhập mã OTP" />

          <label>Mật khẩu</label>
          <div className="password-field">
            <input type="password" placeholder="Nhập mật khẩu" />
            <span className="show-password">Hiện</span>
          </div>

          <button className="login-button">Đăng ký</button>
        </div>
      </div>

      <ProductSuggestion />
      <Footer />
    </div>
  );
}
