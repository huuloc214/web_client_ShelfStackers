import React from 'react';

const SidebarFilter = () => {
  return (
    <div className="sidebar-filter">
      <h3>NHÓM SẢN PHẨM</h3>
      <ul>
        <li>Tiểu thuyết</li>
        <li>Light Novel</li>
        <li>Truyện Trinh Thám</li>
      </ul>

      <h3>GIÁ</h3>
      <ul>
        <li><input type="checkbox" /> Dưới 150.000đ</li>
        <li><input type="checkbox" /> 150.000đ - 300.000đ</li>
      </ul>

      <h3>NHÀ CUNG CẤP</h3>
      <ul>
        <li><input type="checkbox" /> Nhã Nam</li>
        <li><input type="checkbox" /> NXB Trẻ</li>
      </ul>

      <h3>ĐỘ TUỔI</h3>
      <ul>
        <li><input type="checkbox" /> 11 - 15</li>
        <li><input type="checkbox" /> 15 - 18</li>
      </ul>

      <h3>NGÔN NGỮ</h3>
      <ul>
        <li><input type="checkbox" /> Tiếng Việt</li>
        <li><input type="checkbox" /> Tiếng Anh</li>
      </ul>
    </div>
  );
};

export default SidebarFilter;
