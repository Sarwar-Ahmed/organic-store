import React from 'react';
import { Container } from 'react-bootstrap';

const HomeBrandSlider = () => {
    return (
        <Container fluid className="d-flex mx-auto p-5">
            <div className="ml-2">
                <img src="http://st.ourhtmldemo.com/template/organic_store/images/partner-logo/1.png" alt="" className="img-fluid"/>
            </div>
            <div className="ml-2">
                <img src="http://st.ourhtmldemo.com/template/organic_store/images/partner-logo/2.png" alt="" className="img-fluid"/>
            </div>
            <div className="ml-2">
                <img src="http://st.ourhtmldemo.com/template/organic_store/images/partner-logo/3.png" alt="" className="img-fluid"/>
            </div>
            <div className="ml-2">
                <img src="http://st.ourhtmldemo.com/template/organic_store/images/partner-logo/4.png" alt="" className="img-fluid"/>
            </div>
        </Container>
    );
};

export default HomeBrandSlider;