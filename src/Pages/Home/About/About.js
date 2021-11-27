import React from 'react';
import about_img from '../../../Images/about.jpg'
import './About.css'
const About = () => {
    return (
        <div>
            <section class="about">
                <div class="section-title-color">
                    <h1>ABOUT US</h1>
                </div>
                <div class="about-us">
                    <div class="about-title">
                        <h1>TRUSTED NAME IN AUTO-WORLD</h1>
                        <p>Integer tortor bibendum estar faucibus gravida aliquam nulla lectus lacinia egar pulvinar matis
                            nl risus quisque sagitis lorem acda lorem ipsum dolor sit amet consectetur adipisicing elit.

                            Integer tortor bibendum est faucibus gravida aliquam nul lectus lacinia eget pulvinar mattis inl
                            risus. Quisque sagittis lorem acdua er pharetral interdum quisque convallis nulla id ipsum vamus
                            aliquam arcu arcu.

                            Etiam imperdiet aliquam eriat volutpat mauris consecteta. Aliquam enisem pretium vitae posuere
                            ac mats vitae arcu.</p>
                        <strong>WE HAVE LARGEST VEHICLES STOCK</strong>
                        <strong>WE GOT WORLDWIDE LOCATIONS</strong>
                        <strong>WE DEAL IN ALL KINDS OF BRANDS ,VEHICLES</strong>
                    </div>
                    <div class="about-img">
                        <img src={about_img} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;