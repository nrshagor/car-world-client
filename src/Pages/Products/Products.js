import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Products = () => {
    const { admin } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://nameless-inlet-63373.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    const handleDeleteProduct = id => {
        const proced = window.confirm('Are You sure you want to delete..?');
        if (proced) {
            const url = `https://nameless-inlet-63373.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingServices = products.filter(product => product._id !== id);
                        setProducts(remainingServices);
                    }
                })
        }
    }
    return (
        <>
            <div className=" mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


                {
                    products.map(product =>
                        <div className="card">
                            <div className="products-img">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="products-info">
                                <h1>Brand Name: {product.brand}</h1>
                                <p>Model: {product.model}</p>
                                <p><span>Trim: {product.trim}</span> <span>Manufacture: {product.manufacture}</span></p>
                                <p>Description:{product.description}</p>

                                <p>Price{product.price}</p>
                                <Link to={`/purchase/${product._id}`}><button className="btn btn-warning">Read More</button></Link>
                                {
                                    admin && <button className="btn btn-danger mx-2" onClick={() => handleDeleteProduct(product._id)}>Cancel</button>
                                }


                            </div>
                        </div>)
                }
            </div >


        </>
    );
};

export default Products;