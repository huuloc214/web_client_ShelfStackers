import React from 'react';
import '../styles/ProductSuggestion.css';

const products = [
    {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

     {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

];

export default function ProductSuggestion() {
    return (
        <div className="suggestion-wrapper">
            <div className="suggestion-header">
                <span className="header-text">✨ Gợi ý cho bạn ✨</span>
            </div>

            <div className="product-list">
                {products.map((item, index) => (
                    <div className="product-card" key={index}>
                        <img src={item.image} alt={item.title} />
                        {item.tag && <span className="tag">{item.tag}</span>}
                        <div className="product-info">
                            <div className="title">{item.title}</div>
                            <div className="price">
                                <span className="new">{item.price.toLocaleString()} đ</span>
                                <span className="old">{item.oldPrice.toLocaleString()} đ</span>
                                <span className="discount">-{item.discount}%</span>
                            </div>
                            <div className="sold">Đã bán {item.sold}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
