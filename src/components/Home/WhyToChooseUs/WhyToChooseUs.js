import { faAppleAlt, faCarrot, faGlassCheers, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyToChooseUs.css'

const WhyToChooseUs = () => {
    return (
        <div class="themeTitleBg p-5">
            <div class="p-5">
                <div class="text-center">
                    <div class="">
                        <div className="delivery_title">
                            <h2>WHY TO CHOOSE US</h2>
                        </div>
                        <p className="lead"><em>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br/>alteration in some form, by injected humour.</em></p>
                        
                    </div>
                </div>
                
            </div>

            <div class="p-5">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12 mt-1">
                        <div class="row m-md-2 chooseOption p-3 rounded">
                            <div class="col-md-2"><FontAwesomeIcon style={{height:32, width:32}} className="" icon={faAppleAlt}></FontAwesomeIcon></div>
                            <div class="col-md-10">
                                <h5 class="">100% Organic Products</h5>
                                <p class="">Duis aute irure dolor in reprehenderit voluptate velit esse seds cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 mt-1">
                        <div class="row m-md-2 chooseOption p-3 rounded">
                            <div class="col-md-2"><FontAwesomeIcon style={{height:32, width:32}} className="" icon={faShippingFast}></FontAwesomeIcon></div>
                            <div class="col-md-10">
                                <h5 class="">Any Time, Anywhere Delivery</h5>
                                <p class="">Duis aute irure dolor in reprehenderit voluptate velit esse seds cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 mt-1">
                        <div class="row m-md-2 chooseOption p-3 rounded">
                            <div class="col-md-2"><FontAwesomeIcon style={{height:32, width:32}} className="" icon={faCarrot}></FontAwesomeIcon></div>
                            <div class="col-md-10">
                                <h5 class="">Keeps Your Family Healthy</h5>
                                <p class="">Duis aute irure dolor in reprehenderit voluptate velit esse seds cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 mt-1">
                        <div class="row m-md-2 chooseOption p-3 rounded">
                            <div class="col-md-2"><FontAwesomeIcon style={{height:32, width:32}} className="" icon={faGlassCheers}></FontAwesomeIcon></div>
                            <div class="col-md-10">
                                <h5 class="">Clean, Fresh and Safety</h5>
                                <p class="">Duis aute irure dolor in reprehenderit voluptate velit esse seds cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyToChooseUs;