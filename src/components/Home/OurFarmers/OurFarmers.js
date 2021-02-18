import React from 'react';
import './OurFarmers.css'

const OurFarmers = () => {
    return (
        <div className="p-5">
            <div class="p-5">
                <div class="text-center">
                    <div className="delivery_title">
                        <h2>OUR FARMERS</h2>
                    </div> 
                </div>
            </div>
            <div class="text-center my-3">
                <div class="row mx-auto my-auto">
                    <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                        <div class="carousel-inner w-100" role="listbox">
                            <div class="carousel-item active">
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=1" alt=""/>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=2" alt=""/>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=3" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=2" alt=""/>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=3" alt=""/>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=1" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=3" alt=""/>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=1" alt=""/>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-body">
                                        <img class="img-fluid" src="http://placehold.it/380?text=2" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFarmers;