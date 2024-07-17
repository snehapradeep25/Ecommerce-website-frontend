import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';

function Product() {
    const [products, setProducts] = useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching the products', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div className="card-container">
                <h1>Product List</h1>
                <div className="divider"></div>
                <div className="card-list">
                    {products.map((product) => (
                        <div key={product.id} className="card-item">
                            <img src={product.image} alt={product.title} className="card-image" />
                            <div className="card-content">
                                <div className="card-title">{product.title}</div>
                                <p>{product.description}</p>
                                <div className="card-price">${product.price}</div>
                                <div className="card-rating">{product.rating.rate} stars</div>
                                <div className="card-responses">{product.rating.count} responses</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Product;