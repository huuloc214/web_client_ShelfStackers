import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import ProductSuggestion from './ProductSuggestion';
import Footer from './FooterLogin';
import "../styles/FlashSale.css";


export default function LoginScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Thêm xử lý login ở đây nếu có
    navigate('/home');
  };

  return (
    <div>
      <header className="main-header">
        <div className="banner">
          <img src="/images/bannerBook.png" className="Imgbaner" alt="Banner giới thiệu sách" />
        </div>

        <div className="header-bar">
          {/* Logo */}
          <div className="header-logo" onClick={() => navigate('/')}>
            <img src="/images/FahasaLogo.png" alt="Logo" />
          </div>

          {/* Thanh tìm kiếm */}
          <div className="header-search">
            <input type="text" placeholder="Tìm kiếm sách..." />
            <button>Tìm kiếm</button>
          </div>

          {/* Nhóm icon bên phải */}
          <div className="header-icons">
            {/* Icon danh mục */}
            <div
              className="header-icon"
              onClick={() => navigate('/category')}
              title="Danh mục"
              style={{ cursor: "pointer" }}
            >
              <img src="/images/grid-icon.png" alt="Category Icon" className="grid-icon" />
              <span className="hover-link">Danh mục</span>
            </div>

            {/* Icon thông báo */}
            <div className="header-icon">
              <i className="fas fa-bell"></i>
              <span className="hover-link">Thông báo</span>
            </div>

            {/* Icon giỏ hàng */}
            <div
              className="header-icon"
              onClick={() => navigate('/cart')}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="hover-link">Giỏ hàng</span>
            </div>

            {/* Icon tài khoản */}
            <div
              className="header-icon"
              onClick={() => navigate('/profile')}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-user"></i>
              <span className="hover-link">Tài khoản</span>
            </div>
          </div>
        </div>
      </header>

      <div className="login-wrapper">
        <div className="login-tabs">
          <span className="active">Đăng nhập</span>
          <span onClick={() => navigate('/register')} style={{cursor:'pointer'}}>Đăng ký</span>
        </div>

        <div className="login-form">
          <label>Số điện thoại/Email</label>
          <input type="text" placeholder="Nhập số điện thoại hoặc email" />

          <label>Mật khẩu</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
            />
            <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? "Ẩn" : "Hiện"}
            </span>
          </div>

          <div className="forgot-password">
            <a href="#" onClick={e => e.preventDefault()}>Quên mật khẩu?</a>
          </div>
          <button className="login-button" onClick={handleLogin}>Đăng nhập</button>
        </div>
      </div>

      <ProductSuggestion />
      <Footer />
    </div>
  );
}
