import React from 'react';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="http://st.ourhtmldemo.com/template/organic_store/images/home/slide-1.jpg" alt="First slide"/>
                    <div class="carousel-caption d-none d-block mb-md-5">
                        <img class="d-block img-fluid mx-auto" src="http://st.ourhtmldemo.com/template/organic_store/images/home/1.png" alt="First slide img"/>
                        <h1>Organic Store</h1>
                        <h6>We provide highest quality organics products</h6>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="http://st.ourhtmldemo.com/template/organic_store/images/home/slide-2.jpg" alt="Second slide"/>
                    <div class="carousel-caption d-none d-block mb-md-5">
                        <img class="d-md-block img-fluid mx-auto" src="http://st.ourhtmldemo.com/template/organic_store/images/home/4.png" alt=""/>
                        <h4>GET BLACKBERRY PACK WITH 50% OFF</h4>
                        <div>
                            <Link to="/" className="customBtn pl-3 pr-3 p-2 rounded">SHOP NOW</Link>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="http://st.ourhtmldemo.com/template/organic_store/images/home/slide-3.jpg" alt="third slide"/>
                    <div class="carousel-caption d-none d-block mb-md-5">
                        <img class="d-block img-fluid mx-auto my-auto" src="http://st.ourhtmldemo.com/template/organic_store/images/home/3.png" alt=""/>
                        <h2>NATURAL HEALTHY FOOD</h2>
                        <h6>Great explorer of the truth, the master-builder of human happiness</h6>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
    );
};

export default HomeSlider;