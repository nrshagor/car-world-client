import React, { useEffect, useRef, useState } from 'react';
import { Card, Form, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Purchase.css'
const Purchase = () => {
    const { user } = useAuth();
    const statusRef = useRef();
    const initialInfo = { customerName: user.displayName, email: user.email }
    const [purchase, setPurchase] = useState(initialInfo);
    console.log(purchase);
    const [myPlan, setMyPlan] = useState({});
    const order = {
        brand: myPlan.brand,
        model: myPlan.model,
        trim: myPlan.trim,
        manufacture: myPlan.manufacture,
        description: myPlan.description,
        condition: myPlan.condition,
        fuel: myPlan.fuel,
        engineCapacity: myPlan.engineCapacity,
        kmRun: myPlan.kmRun,
        bodyType: myPlan.bodyType,
        price: myPlan.price
    }
    const { id } = useParams();
    useEffect(() => {
        const url = `https://nameless-inlet-63373.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPlan(data));
    }, [])
    console.log(myPlan);

    const handleProductPurchase = e => {

        const status = statusRef.current.value;
        const OrderInfo = {
            ...order, ...initialInfo, status
        }
        const proced = window.confirm('Are You sure you want to Purchase..?');
        if (proced) {


            fetch('https://nameless-inlet-63373.herokuapp.com/CustomerInfo', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(OrderInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Successfully Purchase')

                    }
                })
        }
        e.preventDefault();
    }

    return (
        <>
            <div className="purchase-background">

                <div className="container">
                    <div className="purchase-box">
                        <div className="row">
                            <div className="col-md-6 purchase-right">
                                <h2> Purchase Product</h2>
                                <div className="card">
                                    <div className="products-img">
                                        <img src={myPlan.img} alt="" />
                                    </div>
                                    <div className="products-info">
                                        <h1>Brand Name: {myPlan.brand}</h1>
                                        <p>Model: {myPlan.model}</p>
                                        <p><span>Trim: {myPlan.trim}</span> <span>Manufacture: {myPlan.manufacture}</span></p>
                                        <p>Description:{myPlan.description}</p>
                                        <p>Condition:{myPlan.condition}</p>
                                        <p> <span>Fuel{myPlan.fuel}</span> <span>Engine Capacity{myPlan.engineCapacity}</span></p>
                                        <p>K.M{myPlan.kmRun}</p>
                                        <p>Body Type{myPlan.bodyType}</p>
                                        <p>Price{myPlan.price}</p>
                                        <Link to="/products"><button className="btn btn-warning">View All</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 purchase-left">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>Your Name</InputGroup.Text>
                                        <Form.Control type="email" name="email" value={user.displayName} placeholder="Enter email" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>Your Email</InputGroup.Text>
                                        <Form.Control type="email" name="email" value={user.email} placeholder="Enter email" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Control type="text" hidden value="Pending" ref={statusRef} placeholder=" " />

                                <button type="submit" onClick={handleProductPurchase} className="btn btn-warning">Purchase</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;