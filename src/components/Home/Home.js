import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeBrandSlider from './HomeBrandSlider/HomeBrandSlider';
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
            <HomeBrandSlider />
        </div>
    );
};

export default home;