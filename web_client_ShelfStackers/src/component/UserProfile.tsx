import React, { useState } from 'react';
import '../styles/UserProfile.css';
import "../styles/Footer.css";
import "../styles/Home.css";
import { useNavigate } from 'react-router-dom';
import Footer from './FooterLogin';

const UserProfile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: 'Nguyễn Hữu',
    lastName: 'Lộc',
    phone: '',
    email: '',
    gender: 'Nam',
    dob: { day: '', month: '', year: '' }
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    if (name === 'day' || name === 'month' || name === 'year') {
      setForm(prev => ({
        ...prev,
        dob: { ...prev.dob, [name]: value }
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thông tin đã lưu:', form);
    // TODO: Gửi form lên server tại đây nếu cần
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

      <div className="user-container">
        <aside className="sidebar">
          <div className="user-info">
            <div className="avatar"></div>
            <p className="name">{form.firstName + ' ' + form.lastName}</p>
            <span className="badge">Thành viên Bạc</span>
          </div>
          <ul className="menu">
            <li className="active">Hồ sơ cá nhân</li>
            <li>Số địa chỉ</li>
            <li>Đổi mật khẩu</li>
            <li>Đơn hàng của tôi</li>
            <li>Ví voucher</li>
            <li>Thông báo</li>
          </ul>
        </aside>

        <main className="content">
          <section className="summary">
            <div className="item">
              <p>F-Point hiện có</p>
              <strong>482</strong>
            </div>
            <div className="item">
              <p>Freeshop hiện có</p>
              <strong>1 lần</strong>
            </div>
            <div className="item">
              <p>Số đơn hàng</p>
              <strong>0 đơn hàng</strong>
            </div>
            <div className="item">
              <p>Đã thanh toán</p>
              <strong>0 đ</strong>
            </div>
          </section>

          <section className="form">
            <h2>Hồ sơ cá nhân</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Họ</label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Tên</label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Chưa có email" />
              </div>
              <div className="form-group">
                <label>Giới tính</label>
                <label>
                  <input type="radio" name="gender" value="Nam" checked={form.gender === 'Nam'} onChange={handleChange} />
                  Nam
                </label>
                <label>
                  <input type="radio" name="gender" value="Nữ" checked={form.gender === 'Nữ'} onChange={handleChange} />
                  Nữ
                </label>
              </div>
              <div className="form-group">
                <label>Ngày sinh</label>
                <div className="dob">
                  <input type="text" name="day" value={form.dob.day} onChange={handleChange} placeholder="DD" />
                  <input type="text" name="month" value={form.dob.month} onChange={handleChange} placeholder="MM" />
                  <input type="text" name="year" value={form.dob.year} onChange={handleChange} placeholder="YYYY" />
                </div>
              </div>
              <button type="submit">Lưu thay đổi</button>
            </form>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
