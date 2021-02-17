import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeSlider from './HomeSlider/HomeSlider';
import OurFarmers from './OurFarmers/OurFarmers';
import Testimonials from './Testimonials/Testimonials';
import WhyToChooseUs from './WhyToChooseUs/WhyToChooseUs';

const home = () => {
    return (
        <div>
            <HomeSlider />
            <HomeBanner />
            <WhyToChooseUs />
            <OurFarmers />
            <Testimonials />
        </div>
    );
};

export default home;