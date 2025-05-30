import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutScreen.css';
import Footer from './FooterLogin';

const CheckoutScreen = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="main-header">
                <div className="banner">
                    <img src="/images/bannerBook.png" className="Imgbaner" alt="Banner giới thiệu sách" />
                </div>

                <div className="header-bar">
                    <div className="header-logo" onClick={() => navigate('/')}>
                        <img src="/images/FahasaLogo.png" alt="Logo" />
                    </div>

                    <div className="header-search">
                        <input type="text" placeholder="Tìm kiếm sách..." />
                        <button>Tìm kiếm</button>
                    </div>

                    <div className="header-icons">
                        <div
                            className="header-icon"
                            onClick={() => navigate('/category')}
                            title="Danh mục"
                            style={{ cursor: "pointer" }}
                        >
                            <img src="/images/grid-icon.png" alt="Category Icon" className="grid-icon" />
                            <span className="hover-link">Danh mục</span>
                        </div>
                        <div className="header-icon">
                            <i className="fas fa-bell"></i>
                            <span className="hover-link">Thông báo</span>
                        </div>
                        <div
                            className="header-icon"
                            onClick={() => navigate('/cart')}
                            style={{ cursor: "pointer" }}
                        >
                            <i className="fas fa-shopping-cart"></i>
                            <span className="hover-link">Giỏ hàng</span>
                        </div>
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

            <div className="checkout-container">
                {/* Mã Khuyến Mãi */}
                <div className="section promo-section">
                    <h2>MÃ KHUYẾN MÃI QUÀ TẶNG</h2>
                    <div className="promo-input">
                        <input type="text" placeholder="Nhập mã khuyến mãi/Quà tặng" />
                        <button>Áp dụng</button>
                    </div>
                    <p className="promo-note">Có thể áp dụng đồng thời mã <i className="fas fa-circle-info"></i></p>
                </div>

                {/* Nhận quà */}
                <div className="section gift-section">
                    <h2>NHẬN QUÀ - ĐIỀU KIỆN CỦA CHƯƠNG TRÌNH</h2>
                    <p className="gift-info">
                        <span className="gift-icon">🎁</span> Tặng 01 Cravat Mua Ngẫu Nhiên
                    </p>
                    <p className="gift-details">
                        Khi mua Bút Ký Cao Cấp Pilot của NCC Bình - HSD: 30/06/2025
                    </p>
                    <button className="gift-btn">Đã áp dụng</button>
                </div>

                {/* Thông Tin Khách Hàng */}
                <div className="section customer-section">
                    <div className="section-header">
                        <h2>THÔNG TIN KHÁCH HÀNG</h2>
                        <button className="edit-btn">Sửa</button>
                    </div>
                    <p>

                    </p>
                    <p>Giao hàng tại địa chỉ</p>
                </div>

                {/* Phương Thức Vận Chuyển */}
                <div className="section shipping-section">
                    <h2>PHƯƠNG THỨC VẬN CHUYỂN</h2>
                    <label className="shipping-option">
                        <input type="checkbox" checked disabled />
                        <span>Giao hàng tiêu chuẩn: 20.000 đ (Dự kiến giao: Thứ Hai - 02/06)</span>
                    </label>
                    <p className="shipping-note">
                        *Từ ngày 01/11/2020, Công ty Phát hành không giao quý khách việc lựa chọn đơn vị vận chuyển
                    </p>
                </div>

                {/* Phương Thức Thanh Toán */}
                <div className="section payment-section">
                    <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                    <div className="payment-options">
                        <label className="payment-option">
                            <div className="payment-method">
                                <input type="radio" name="payment" />
                                <img src="https://via.placeholder.com/20" alt="ZaloPay Icon" className="payment-icon" />
                                <span className="payment-title">ZaloPay | Chuyển khoản ZaloPay</span>
                            </div>
                            <span className="payment-discount">Nhập mã: ZLPFAHA - Giảm 15K cho đơn hàng từ 300K</span>
                        </label>
                        <label className="payment-option">
                            <div className="payment-method">
                                <input type="radio" name="payment" />
                                <img src="https://via.placeholder.com/20" alt="VNPay Icon" className="payment-icon" />
                                <span className="payment-title">VNPay</span>
                            </div>
                        </label>
                        <label className="payment-option">
                            <div className="payment-method">
                                <input type="radio" name="payment" />
                                <img src="https://via.placeholder.com/20" alt="ShopeePay Icon" className="payment-icon" />
                                <span className="payment-title">ShopeePay | Chuyển khoản ShopeePay</span>
                            </div>
                            <span className="payment-discount">Nhập mã: SPFPH80525 - Giảm ngay 20K cho đơn hàng từ 30K tại ví ShopeePay</span>
                        </label>
                        <label className="payment-option">
                            <div className="payment-method">
                                <input type="radio" name="payment" />
                                <img src="https://via.placeholder.com/20" alt="Momo Icon" className="payment-icon" />
                                <span className="payment-title">Momo</span>
                            </div>
                        </label>
                        <label className="payment-option">
                            <div className="payment-method">
                                <input type="radio" name="payment" />
                                <img src="https://via.placeholder.com/20" alt="ATM Icon" className="payment-icon" />
                                <span className="payment-title">Thẻ ATM / Internet Banking</span>
                            </div>
                        </label>
                        <label className="payment-option">
                            <div className="payment-method">
                                <input type="radio" name="payment" />
                                <img src="https://via.placeholder.com/20" alt="Visa Icon" className="payment-icon" />
                                <span className="payment-title">Thẻ tín dụng / Thẻ ghi nợ quốc tế</span>
                            </div>
                        </label>
                    </div>
                    <p className="payment-note">*Thanh toán bằng thẻ nội địa</p>
                </div>

                {/* Kiểm Tra Lại Đơn Hàng */}
                <div className="section order-section">
                    <h2>KIỂM TRA LẠI ĐƠN HÀNG</h2>
                    <div className="cart-item">
                        <img src="https://via.placeholder.com/50" alt="Product" />
                        <div className="item-details">
                            <p>Search Inside Yourself - Tạo Ra Lợi Nhuận Vượt Qua Đời Đường Và Thay Đổi Cuộc Sống (Tái Bản 2022)</p>
                            <p className="item-price">119.000 đ</p>
                            <p className="item-quantity">Số lượng: 1</p>
                        </div>
                        <p className="item-total">119.000 đ</p>
                    </div>
                </div>

                {/* Tóm tắt và Nút Xác Nhận */}
                <div className="summary">
                    <div className="summary-item">
                        <span className="label">Thành tiền:</span>
                        <span className="value">119.000 đ</span>
                    </div>
                    <div className="summary-item">
                        <span className="label">Phí vận chuyển:</span>
                        <span className="value">20.000 đ</span>
                    </div>
                    <div className="summary-item total">
                        <span className="label">Tổng số tiền (gồm VAT):</span>
                        <span className="value">139.000 đ</span>
                    </div>
                    <p className="summary-note">
                        <i className="fas fa-circle-info"></i> Bằng việc nhấn Mua hàng, bạn đồng ý với{' '}
                        <a href="#">Điều khoản & Điều kiện của FAHASA.com</a>
                    </p>
                    <div className="btn-wrapper">
                        <button className="confirm-button">XÁC NHẬN THANH TOÁN</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default CheckoutScreen;