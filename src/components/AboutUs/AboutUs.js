import React from 'react';
import Header from '../Header/Header';
import Award from './Award/Award';
import DeliveryProcess from './DeliveryProcess/DeliveryProcess';
import StoryAboutUs from './StoryAboutUs/StoryAboutUs';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div class="customBg text-center text-light p-5">
                <div className="p-5 m-5">
                    <h2>ABOUTUS US</h2>
                    <h5>WELCOME TO CERTIFIED ONLINE ORGANIC PRODUCTS SUPPLIERS</h5>
                    <p>We provide <span className="textHightlight">100% organic</span> products</p>
                </div>
            </div>
            <StoryAboutUs />
            <DeliveryProcess />
            <Award />
        </div>
    );
};

export default AboutUs;