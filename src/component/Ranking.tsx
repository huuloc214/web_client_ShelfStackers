import React, { useState } from "react";
import "../styles/Ranking.css";

const books = [
  {
    id: 1,
    rank: "01",
    title: "Nếu Biết Trăm Năm Là Hữu Hạn - Ấn Bản Kỉ Niệm",
    author: "Phạm Lữ Ân",
    image: "/images/book6.png",
    score: 1254,
    price: 64000,
    oldPrice: 79000,
    discount: "-18%",
    description: "NẾU BIẾT TRĂM NĂM LÀ HỮU HẠN - LÁ THƯ GỬI NHỮNG NGƯỜI TRẺ ĐANG LẠC LỐI Bạn đã bao giờ tự hỏi: Nếu biết trước cuộc đời là hữu hạn, bạn sẽ sống khác đi chứ? Chúng ta luôn nghĩ mình có nhiều thời gian, nhưng thực tế, mọi khoảnh khắc đều đang trôi qua mãi mãi",
    publisher: "NXB Trẻ"
  },
  {
    id: 2,
    rank: "02",
    title: "Trường Ca Achilles",
    author: "Madeline Miller",
    image: "/images/book7.png",
    score: 1139,
    price: 87000,
    oldPrice: 109000,
    discount: "-20%",
    description: "Lấy cảm hứng từ sử thi Iliad, Madeline Miller đã tái hiện một câu chuyện tình yêu đầy say đắm nhưng cũng nhuốm màu bi kịch giữa hai người anh hùng Hy Lạp trong tác phẩm đầu tay của mình – Trường Ca Achilles.",
    publisher: "NXB Văn Học"
  },
  {
    id: 3,
    rank: "03",
    title: "Nhà Giả Kim (Tái Bản 2020)",
    author: "Paulo Coelho",
    image: "/images/book8.png",
    score: 1073,
    price: 64780,
    oldPrice: 79000,
    discount: "-18%",
    description: "Nhà Giả Kim không đơn thuần là một cuốn tiểu thuyết, mà là bản đồ dẫn lối đến giấc mơ, khao khát và định mệnh của mỗi con người. Câu chuyện về chàng trai chăn cừu Santiago không chỉ mang đến những cuộc phiêu lưu hấp dẫn, mà còn mở ra nhiều tầng triết lý sâu sắc về cuộc sống",
    publisher: "NXB Hội Nhà Văn"
  },

  {
    id: 4,
    rank: "04",
    title: "Nhà Giả Kim (Tái Bản 2020)",
    author: "Fredrik Backman",
    image: "/images/book9.png",
    score: 1065,
    price: 134400,
    oldPrice: 160000,
    discount: "-16%%",
    description: "NGƯỜI ĐÀN ÔNG MANG TÊN OVE - CUỐN SÁCH KHIẾN TRIỆU ĐỘC GIẢ CƯỜI RỒI KHÓC Bạn có tin rằng một ông lão cộc cằn, khó tính lại có thể khiến bạn rơi nước mắt vì xúc động? Bạn đã bao giờ nghĩ rằng lòng nhân ái có thể đến từ những con người tưởng chừng khô khan nhất? Một ông lão cộc cằn, một con mèo hoang, vài người hàng xóm phiền phức - tất cả có thể tạo nên một câu chuyện khiến bạn bật khóc?",
    publisher: "Trẻ"
  },

  {
    id: 5,
    rank: "05",
    title: "Hồ Điệp và Kình Ngư",
    author: "Tếu Kiến",
    image: "/images/book10.png",
    score: 957,
    price: 111600,
    oldPrice: 155000,
    discount: "-28%",
    description: "HỒ ĐIỆP VÀ KÌNH NGƯ - BI KỊCH HAY HUYỀN THOẠI CỦA TÌNH YÊU? Một câu chuyện cuốn hút ngay từ những trang đầu tiên - Khi tình yêu trở thành sợi dây mong manh giữa sinh tử, phản bội và hy vọng. Khi một nàng hồ điệp nhỏ bé chạm trán với kình ngư mạnh mẽ, liệu đó là định mệnh hay chỉ là một giấc mộng chóng tàn?",
    publisher: "NXB Văn Học"
  },

];

export default function Ranking() {
  const [selectedBook, setSelectedBook] = useState(books[0]);

  return (
    <div className="ranking-container">
      <div className="ranking-left">
        <h3>Bảng xếp hạng bán chạy tuần</h3>
        <ul>
          {books.map((book) => (
            <li
              key={book.id}
              onMouseEnter={() => setSelectedBook(book)}
              className={selectedBook.id === book.id ? "active" : ""}
            >
              <div className="rank-num">{book.rank}</div>
              <img src={book.image} alt={book.title} />
              <div className="rank-info">
                <div className="rank-title">{book.title}</div>
                <div className="rank-author">{book.author}</div>
                <div className="rank-score">{book.score} điểm</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="ranking-right">
        {selectedBook && (
          <>
            <img src={selectedBook.image} alt={selectedBook.title} className="right-img" />
            <h4>{selectedBook.title}</h4>
            <p><strong>Tác giả:</strong> {selectedBook.author}</p>
            <p><strong>Nhà xuất bản:</strong> {selectedBook.publisher}</p>
            <p className="price">
              <span className="current">{selectedBook.price.toLocaleString()} đ</span>{" "}
              <span className="old">{selectedBook.oldPrice.toLocaleString()} đ</span>{" "}
              <span className="discount">{selectedBook.discount}</span>
            </p>
            <p className="desc">{selectedBook.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
