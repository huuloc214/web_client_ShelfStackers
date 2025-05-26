// // src/component/FlashSaleSection.jsx
// import React, { useState } from "react";
// import "../styles/FlashSale.css";

// export default function FlashSaleSection() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const products = [
//         { id: 1, name: "Sản phẩm 1", image: "/images/p1.jpg" },
//         { id: 2, name: "Sản phẩm 2", image: "/images/p2.jpg" },
//         { id: 3, name: "Sản phẩm 3", image: "/images/p3.jpg" },
//         { id: 4, name: "Sản phẩm 4", image: "/images/p4.jpg" },
//         { id: 5, name: "Sản phẩm 5", image: "/images/p5.jpg" },
//         { id: 6, name: "Sản phẩm 6", image: "/images/p6.jpg" },
//     ];

//     const next = () => {
//         if (currentIndex < products.length - 4) {
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     const prev = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - 1);
//         }
//     };

//     const visibleProducts = products.slice(currentIndex, currentIndex + 4);

//     return (
//         <div className="flash-sale-container">
//             <div className="flash-sale-left">
//                 <img src="/images/flashsale.jpg" alt="Flash Sale" />
//                 <div className="flash-text">Kết thúc trong:</div>
//                 <div className="flash-timer">01:23:45</div>
//                 <button className="flash-button">Xem tất cả &gt;</button>
//             </div>

//             <div className="flash-sale-right">
//                 <button className="nav-btn" onClick={prev}>&lt;</button>
//                 <div className="product-row">
//                     {visibleProducts.map(product => (
//                         <div key={product.id} className="product-card">
//                             <img src={product.image} alt={product.name} />
//                             <p>{product.name}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <button className="nav-btn" onClick={next}>&gt;</button>
//             </div>
//         </div>
//     );
// }
