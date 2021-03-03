import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <Container fluid className="row text-light p-5">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12t">
                <div class="firstBannerBg p-5 rounded">
                    <div class="">
                        <div class="">For All Cosmetics<div class="text-danger font-weight-bold"><span>30% <br/>OFF</span></div></div>
                    </div>
                    <div class="">
                        <h3><em>We Grow Beauty</em></h3>
                        <p>It is a long established fact that a reader will be <br/> distracted by the readable content of a page when <br/> looking organic cosmetics.</p>
                        <div class=""><Link to="/" class="text-light">More Products<FontAwesomeIcon icon={faArrowRight} className="ml-2"></FontAwesomeIcon></Link></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12t">
                <div class="secondBannerBg p-5 rounded">
                    <div class="">
                        <div class="">For All Fruits<div class="text-warning font-weight-bold"><span>30% <br/>OFF</span></div></div>
                    </div>
                    <div class="">
                        <h3><em>We Grow Beauty</em></h3>
                        <p>It is a long established fact that a reader will be <br/> distracted by the readable content of a page when <br/> looking organic cosmetics.</p>
                        <div class=""><Link to="/" class="text-light">More Products<FontAwesomeIcon icon={faArrowRight} className="ml-2"></FontAwesomeIcon></Link></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HomeBanner;