import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './StoryAboutUs.css'

const StoryAboutUs = () => {
    return (
        <div class="row p-5">
            <div class="col-md-6 col-sm-12 p-5">
                <figure class="mt-5">
                    <img src="http://st.ourhtmldemo.com/template/organic_store/images/about/3.jpg" className="img-fluid" alt=""/>
                </figure>
            </div>
            <div class="col-md-6 col-sm-12 p-5">
                <div>
                    <div class="theme_title">
                        <h3>STORY ABOUT US</h3>
                    </div>
                    <div class="about_quot">
                        <p>Our food should be our medicine,Our medicine organics
                        should be our food your health.</p>
                    </div>
                    <div class="text-muted"><p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness</p></div>
                    <div class="row p-3">
                        <div class="col-md-6 d-flex">
                            <div className="row">
                                <div class="col-5"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3cLzxNC6s6JxFSc-O4kHtiQ8rKc_0vARRg&usqp=CAU" alt="" className="img-fluid rounded-circle"/></div>
                                <div className="col-7">
                                    <h3>745+</h3>
                                    <div class="textHighlight font-weight-bold">Own Farm Houses</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex">
                            <div className="row">
                                <div class="col-5"><img src="https://image.shutterstock.com/image-vector/farmer-icon-line-symbol-premium-260nw-1603530535.jpg" alt="" className="img-fluid rounded-circle"/></div>
                                <div className="col-7">
                                    <h3>2480+</h3>
                                    <div class="textHighlight font-weight-bold">Pastoral Farmers</div>
                                </div>
                            </div>
                        </div>
                    

                    </div>
                    <div class="text-muted">
                        <p>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, the actual teachings of the great explorer.</p>
                    </div>
                    <div className="mt-5">
                        <Link to="/" class="customBtn pl-3 pr-3 p-2 rounded">read more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryAboutUs;