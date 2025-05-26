import React from 'react';
import '../styles/ProductSuggestion.css';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 2,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 3,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 4,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 5,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 6,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 7,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 8,
        image: '/images/book3.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 9,
        image: '/images/book5.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 10,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 11,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 12,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 13,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 14,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

    {
        id: 15,
        image: '/images/book4.png',
        title: 'Chúa Tể Rừng Xanh - Tập 1',
        price: 38000,
        oldPrice: 40000,
        discount: 5,
        sold: 714,
        tag: 'Xu hướng'
    },

];

export const productList = products;

export default function ProductSuggestion() {
    return (
        <div className="suggestion-wrapper">
            <div className="suggestion-header">
                <span className="header-text">✨ Gợi ý cho bạn ✨</span>
            </div>

            <div className="product-list">
                {products.map((item, index) => (
                    <Link to={`/product/${item.id}`} key={index} className="product-card">
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
                    </Link>
                ))}
            </div>
        </div>
    );
}
