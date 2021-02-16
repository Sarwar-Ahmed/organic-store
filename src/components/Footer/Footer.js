import { faCcDiscover, faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faClock, faCreditCard, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'bootstrap';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div class="row footerBg p-5 text-light text-muted">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <a href="index.html"><img src="http://st.ourhtmldemo.com/template/organic_store/images/logo/logo-2.png" alt="Logo" className="p-2 img-fluid"/></a>
                    <p className="p-2">Denouncing pleasures and praising pain was born and I will give you a complete account of the system.</p><p className="p-2">Expound that actual teachings the great explorer of the truth, the master-builder of human happiness no one rejects, likes, or avoids pleasure itself rationally. </p>

                    <Link to="/" class="bythemBtn font-weight-bold p-2 pl-3 pr-3 rounded">BUY THEM</Link>

                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <h5 className="font-weight-bold text-light p-3">RECENT POST</h5>

                    <div className=""> 
                        <div class="d-flex">
                            <div class=""><Link to="/"><img src="http://st.ourhtmldemo.com/template/organic_store/images/blog/p1.jpg" alt="" class="p-3 rounded"/></Link></div>
                            <div className="p-2">
                                <h6><Link to="/" className="text-light text-muted font-weight-bold">Control your cholestrol &amp; fat in 2 weeks</Link></h6>
                                <div><FontAwesomeIcon className="mr-2" icon={faClock}></FontAwesomeIcon>08th Sep, 2015</div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class=""><Link to="/"><img src="http://st.ourhtmldemo.com/template/organic_store/images/blog/p2.jpg" alt="" class="p-3 rounded"/></Link></div>
                            <div className="p-2">
                                <h6><Link to="/" className="text-light text-muted font-weight-bold">Control your cholestrol &amp; fat in 2 weeks</Link></h6>
                                <div><FontAwesomeIcon className="mr-2" icon={faClock}></FontAwesomeIcon>08th Sep, 2015</div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class=""><Link to="/"><img src="http://st.ourhtmldemo.com/template/organic_store/images/blog/p3.jpg" alt="" class="p-3 rounded"/></Link></div>
                            <div className="p-2">
                                <h6><Link to="/" className="text-light text-muted font-weight-bold">Control your cholestrol &amp; fat in 2 weeks</Link></h6>
                                <div><FontAwesomeIcon className="mr-2" icon={faClock}></FontAwesomeIcon>08th Sep, 2015</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3">
                    <h5 className="font-weight-bold text-light">CATEGORIES</h5>
                    <div class="d-flex flex-column p-3">
                        <Link to="/" className="text-light text-muted pb-2"><FontAwesomeIcon className="mr-2" icon={faAngleRight}></FontAwesomeIcon>Arable &amp; Postoral Farmers</Link>
                        <Link to="/" className="text-light text-muted pb-2"><FontAwesomeIcon className="mr-2" icon={faAngleRight}></FontAwesomeIcon>Become a Member</Link>
                        <Link to="/" className="text-light text-muted pb-2"><FontAwesomeIcon className="mr-2" icon={faAngleRight}></FontAwesomeIcon>Shop Our Prodcuts</Link>
                    </div>
                    <div class="pt-3">
                        <div><h5 className="font-weight-bold text-light">TAGS</h5></div>
                        <div className="">
                            <Link to="/" className="text-light m-1 p-1 rounded bg-success btn">Fruits</Link>
                            <Link to="/" className="text-light m-1 p-1 rounded bg-success btn">Fruits</Link>
                            <Link to="/" className="text-light m-1 p-1 rounded bg-success btn">Fruits</Link>
                            <Link to="/" className="text-light m-1 p-1 rounded bg-success btn">Cosmetics</Link>
                            <Link to="/" className="text-light m-1 p-1 rounded bg-success btn">Farmers</Link>
                            <Link to="/" className="text-light m-1 p-1 rounded bg-success btn">Healthy</Link>
                            <Link to="/" className="text-light m-1 p-1 rounded bg-success btn">Catering</Link>                     
                            <Link to="/" className="text-light m-1 p-1 rounded bg-success btn">Post Format</Link>      
                        </div>                                   
                    </div>
                </div>


                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-3">
                    <h5 className="font-weight-bold text-light">GET IN TOUCH</h5>
                    <div class="p-2 d-flex flex-column">
                        <Link to="/" className="text-light text-muted pb-2"><FontAwesomeIcon className="mr-2" icon={faEnvelope}></FontAwesomeIcon>Organic store@gmail.com</Link>
                        <Link to="/" className="text-light text-muted pb-2"><FontAwesomeIcon className="mr-2" icon={faPhone}></FontAwesomeIcon>+91 (321) 758 142 5698</Link>
                        <Link to="/" className="text-light text-muted pb-2"><FontAwesomeIcon className="mr-2" icon={faHome}></FontAwesomeIcon>No 271, Red Cross Building, Modern Street, Newyork City, USA.</Link>
                    </div>

                    <h5 className="font-weight-bold text-light pt-2">BUSINESS HOURS </h5>
                    <div class="p-2">
                        <p>Monday - Friday: 09.00am to 07.00pm Saturday: 10.00am to 05.00pm Sunday: <span>Closed</span></p>
                    </div>
                    
                </div>
            </div>
            <div class="d-flex footerBottomBg text-light p-3">
                <h6 class="mr-auto pt-3">Copyrights © 2015 All Rights Reserved by <Link to="/"><span className="textHighlight">Sarwar</span></Link></h6>
                <div class="d-flex">
                    <Link to="/" className="p-2"><FontAwesomeIcon className="mr-2" style={{height: 45, width:45, color: 'white'}} icon={faCcVisa}></FontAwesomeIcon></Link>
                    <Link to="/" className="p-2"><FontAwesomeIcon className="mr-2" style={{height: 45, width:45, color: 'white'}} icon={faCcMastercard}></FontAwesomeIcon></Link>
                    <Link to="/" className="p-2"><FontAwesomeIcon className="mr-2" style={{height: 45, width:45, color: 'white'}} icon={faCcPaypal}></FontAwesomeIcon></Link>
                    <Link to="/" className="p-2"><FontAwesomeIcon className="mr-2" style={{height: 45, width:45, color: 'white'}} icon={faCreditCard}></FontAwesomeIcon></Link>
                    <Link to="/" className="p-2"><FontAwesomeIcon className="mr-2" style={{height: 45, width:45, color: 'white'}} icon={faCcDiscover}></FontAwesomeIcon></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;