import React from 'react';
import './CarType.css'
import luxury from '../../../Images/car-type/luxury.png'
import pickup from '../../../Images/car-type/pickup-truck.png'
import sedans from '../../../Images/car-type/sedans.png'
import sports from '../../../Images/car-type/sports.png'
import suvs from '../../../Images/car-type/suvs.png'
import vans from '../../../Images/car-type/vans.png'
const CarTypes = () => {
    return (
        <div>
            <section class="vehicles-types">
                <div class="section-title">
                    <h1>TYPES OF VEHICLES</h1>
                    <p>THAT WE ARE CURRENTLY DEALING</p>
                </div>
                <div class="type-car-card cartype">
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src={luxury} alt="" />
                        </div>
                        <div class="item-name">
                            <p>Luxury Cars</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src={sports} alt="" />
                        </div>
                        <div class="item-name">
                            <p>Sports Cars</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src={suvs} alt="" />
                        </div>
                        <div class="item-name">
                            <p>SUVS Cars</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src={pickup} alt="" />
                        </div>
                        <div class="item-name">
                            <p>Pickup Cars</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src={vans} alt="" />
                        </div>
                        <div class="item-name">
                            <p>Vans Cars</p>
                        </div>
                    </div>
                    <div class="car-cardbody">
                        <div class="car-cardbody-img">
                            <img src={sedans} alt="" />
                        </div>
                        <div class="item-name">
                            <p>Sedans Cars</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default CarTypes;