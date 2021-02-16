import { faAngleRight, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactUs.css'
import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <div class="customBg text-center text-light p-5">
                <div className="p-5 m-5">
                    <h2>CONTACT US</h2>
                    <h5>WELCOME TO CERTIFIED ONLINE ORGANIC PRODUCTS SUPPLIERS</h5>
                    <p>We provide <span className="textHightlight">100% organic</span> products</p>
                </div>
            </div>
            <div class="row p-5">
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="p-3">
                        <h4 className="font-weight-bold">GET IN TOUCH</h4>
                        <div class="pt-3">
                            <div>
                                <Link to="/" className="d-flex btn border text-muted p-2">
                                    <div className="border-right pr-2">
                                        <FontAwesomeIcon className="iconBg" style={{height:50, width:26}} icon={faHome}></FontAwesomeIcon>
                                    </div> 
                                    <p className="p-2">No 271, Red Cross Building, Modern Street, Newyork City, USA.</p></Link>
                            </div>
                            <div>
                                <Link to="/" className="d-flex btn border text-muted p-2">
                                    <div className="border-right pr-2">
                                        <FontAwesomeIcon className="iconBg" style={{height:50, width:26}} icon={faEnvelope}></FontAwesomeIcon>
                                    </div>
                                    <div>
                                        <p><span>Organicstore@gmail.com</span> <br/>customersupport@organic.com</p>
                                    </div>    
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="d-flex btn border text-muted p-2">
                                    <div className="border-right pr-2">
                                        <FontAwesomeIcon className="iconBg" style={{height:50, width:26}} icon={faPhone}></FontAwesomeIcon>
                                    </div>
                                    <p className="p-2">+91 (321) 758 142 5698 <br/>1800-8692-258-1547</p></Link>
                            </div>
                        </div>

                        <div className="border mt-5 p-3">
                            <h5 class="">WORKING HOURS</h5>
                            <div class="text-muted">
                                <p>Monday - Friday: 09.00am to 07.00pm <br/>Saturday: 10.00am to 05.00pm <br/>Sunday: <span>Closed</span></p>
                            </div>
                            
                        </div>

                        
                    </div>
                </div>
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <div class="">
                        <div class="ml-4 p-1">
                            <h2>SEND US MESSAGE</h2>
                        </div>
                        <form action="/" className="p-2">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" className="form-control m-3" placeholder="Your Name*"/>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" className="form-control m-3" placeholder="Your Email*"/>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" className="form-control m-3" placeholder="Phone"/>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" className="form-control m-3" placeholder="Subject"/>
                                </div>

                                <div class="col-md-12">
                                    <textarea rows="5" placeholder="Comments" className="form-control m-3"></textarea>
                                </div>
                                <div class="col-md-12">
                                    <Link type="submit" class="customBtn pr-3 pl-3 p-2 ml-3 mt-3 rounded">POST COMMENT</Link>
                                </div>
                            </div>
                        </form>
                            
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default ContactUs;