import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LatestProducts.css'
const LatestProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://nameless-inlet-63373.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));

    }, []);
    return (
        <div>
            <section>
                <div className="products">
                    <h1>Our Latest Products</h1>
                    <div className="card-body">

                        {products.map(product =>
                            <div className="card">
                                <div className="products-img">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="products-info">
                                    <h1>Brand Name: {product.brand}</h1>
                                    <p>Model: {product.model}</p>
                                    <p><span>Trim: {product.trim}</span> <span>Manufacture: {product.manufacture}</span></p>
                                    <h3>Price:{product.price}</h3>
                                    <Link to="/products"><button className="btn btn-warning">View All</button></Link>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LatestProducts;