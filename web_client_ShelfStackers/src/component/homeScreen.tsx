import React from "react";
import "../styles/Login.css";
import "../styles/Footer.css";
import "../styles/Home.css";
import "../styles/Ranking.css";
import ProductSuggestion from "./ProductSuggestion";
import { useNavigate } from "react-router-dom";
import Footer from "./FooterLogin";
import Ranking from "./Ranking";
import useBannerSlider from "../homeSytem";

export default function Home() {
  const navigate = useNavigate();

  const bigBanners = [
    { id: 1, image: "/images/banner0.png" },
    { id: 1, image: "/images/banner1.png" },
    { id: 2, image: "/images/banner2.png" },
    { id: 3, image: "/images/banner3.png" },
    { id: 4, image: "/images/banner4.png" },
    { id: 5, image: "/images/banner5.png" },
    { id: 6, image: "/images/banner6.png" },
    { id: 7, image: "/images/banner7.png" },
    { id: 8, image: "/images/banner8.png" },
  ];

  const smallBanners = [
    { id: 1, image: "/images/banner9.png" },
    { id: 2, image: "/images/banner10.png" },
  ];

  const bottomBanners = [
    { id: 1, image: "/images/banner10.png" },
    { id: 2, image: "/images/banner11.png" },
    { id: 3, image: "/images/banner12.png" },
    { id: 4, image: "/images/banner13.png" },
  ];

  const categoryItems = [
    { id: 1, name: "25.05", icon: "/images/icon1.png" },
    { id: 2, name: "Flash Sale", icon: "/images/icon2.png" },
    { id: 3, name: "Patech", icon: "/images/icon3.png" },
    { id: 4, name: "McBooks", icon: "/images/icon4.png" },
    { id: 5, name: "Mã Giảm Giá", icon: "/images/icon5.png" },
    { id: 6, name: "Sản Phẩm Mới", icon: "/images/icon6.png" },
    { id: 7, name: "Sản Phẩm Được Trợ Giá", icon: "/images/icon7.png" },
    { id: 8, name: "Phiên Chợ Đồ Cũ", icon: "/images/icon8.png" },
    { id: 9, name: "Bán Sỉ", icon: "/images/icon9.png" },
    { id: 10, name: "Manga", icon: "/images/icon10.png" },
  ];

  const { current, prevSlide, nextSlide } = useBannerSlider(bigBanners.length);

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
              <img src="/images/grid.png" alt="Category Icon" className="grid-icon" />
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

      <div className="banner-wrapper">
        <div className="big-banner">
          {bigBanners.map((banner, i) => (
            <img
              key={banner.id}
              src={banner.image}
              alt=""
              className={`big-banner-img ${i === current ? "active" : ""}`}
            />
          ))}
          <button className="btn-slide prev" onClick={prevSlide}>‹</button>
          <button className="btn-slide next" onClick={nextSlide}>›</button>
        </div>

        <div className="small-banners">
          {smallBanners.map((banner) => (
            <div key={banner.id} className="small-banner">
              <img src={banner.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-banners">
        {bottomBanners.map((banner) => (
          <div key={banner.id} className="bottom-banner-item">
            <img src={banner.image} alt="" />
          </div>
        ))}
      </div>

      {/* Danh mục giống hình mẫu */}
      <div className="category-section">
        {categoryItems.map((item) => (
          <div key={item.id} className="category-item">
            <img src={item.icon} alt={item.name} className="category-icon" />
            <p className="category-label">{item.name}</p>
          </div>
        ))}
      </div>

      <Ranking />
      <ProductSuggestion />
      <Footer />
    </div>
  );
}
