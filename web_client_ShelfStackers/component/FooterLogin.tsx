import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="newsletter">
                <div className="newsletter-container">
                    <span>📧 ĐĂNG KÝ NHẬN BẢN TIN</span>
                    <div className="form">
                        <input type="email" placeholder="Nhập địa chỉ email của bạn" />
                        <button>Đăng ký</button>
                    </div>
                </div>
            </div>

            <div className="footer-content">
                <div className="column">
                    <img src="/images/FahasaLogo.png" alt="Fahasa" className="logo" />
                    <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
                    <p>Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA</p>
                    <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
                    <p>Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi.</p>
                    <div className="socials">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-tiktok"></i>
                    </div>
                </div>

                <div className="vertical-line"></div>

                <div className="column">
                    <h4>DỊCH VỤ</h4>
                    <p>Điều khoản sử dụng</p>
                    <p>Chính sách bảo mật</p>
                    <p>Chính sách thanh toán</p>
                    <p>Giới thiệu Fahasa</p>
                    <p>Hệ thống nhà sách</p>
                </div>

                <div className="column">
                    <h4>HỖ TRỢ</h4>
                    <p>Chính sách đổi trả</p>
                    <p>Chính sách bảo hành</p>
                    <p>Chính sách vận chuyển</p>
                    <p>Chính sách khách sỉ</p>
                </div>

                <div className="column">
                    <h4>TÀI KHOẢN CỦA TÔI</h4>
                    <p>Đăng nhập / Đăng ký</p>
                    <p>Thay đổi địa chỉ</p>
                    <p>Chi tiết tài khoản</p>
                    <p>Lịch sử mua hàng</p>
                </div>
            </div>


            {/* Thanh toán */}
            <div className="payment-section">
                <img src="/vnpay.png" alt="VNPAY" />
                <img src="/momo.png" alt="Momo" />
                <img src="/shopeepay.png" alt="ShopeePay" />
                <img src="/zalopay.png" alt="ZaloPay" />
            </div>

            {/* Footer note */}
            <div className="footer-bottom">
                <p>Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư TP HCM cấp ngày 20/12/2005.</p>
            </div>
        </footer>
    );
}
