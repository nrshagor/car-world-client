import React from 'react';
import Slider from '../Slider/Slider';
import img01 from '../../../Images/cars.png'
import './Home.css'
import LatestProducts from '../OurOffer/LatestProducts';
import About from '../About/About';
import CarTypes from '../CarTypes/CarTypes';
import CustomerReview from '../CustomerReview/CustomerReview';
import useAuth from '../../../Hook/useAuth';
const Home = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <Slider></Slider>
            <div className="welcome ">
                <p>Welcome To</p>
                <h1> CAR WORLD</h1>
            </div>
            <div className="welcome-img">
                <img className="img" src={img01} alt="" />
            </div>
            <LatestProducts>

            </LatestProducts>
            <CarTypes></CarTypes>
            <CustomerReview></CustomerReview>
            <About></About>

        </div>


    );
};

export default Home;