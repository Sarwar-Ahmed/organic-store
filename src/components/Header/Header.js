import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { faFacebook, faGooglePlus, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    return (
        <div className="mx-auto">
            <div>
                <div className="row p-3">
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <div>
                            <form action="#" class="w-75 clearFix btn border m-2 ml-5" style={{borderRadius: 100}}>
                                <input className="btn" type="text" placeholder="Search..."/>
                                <button className="btn"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-5 col-xs-6 logo-responsive w-100">
                        <div class="logo-area">
                            <a href="/" class="pull-left logo"><img src="http://st.ourhtmldemo.com/template/organic_store/images/logo/logo.png" alt="LOGO"/></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-7 col-xs-6 pdt-14 w-100 d-flex">
                        <div class="login_option float_left d-flex p-2 mr-3 ml-3">
                            <div class="w-100 p-2">
                                <FontAwesomeIcon className="iconBg" style={{height:45, width:45}} icon={faUserCircle}></FontAwesomeIcon>
                            </div>
                            <div class="login-info p-1">
                                <div class="welcome">Welcome!</div>
                                <Link to="/" className="btn iconBg font-weight-bold">Login</Link>
                            </div>
                        </div>
                        <div className="p-3">
                            <FontAwesomeIcon className="iconBg" icon={faShoppingBag} style={{height:32, width:32}}></FontAwesomeIcon>
                            <span className="font-weight-bold text-danger cartN p-1">2</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="NavBg d-flex">
                <Navbar expand="lg" className="mr-auto">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home" className="font-weight-bold m-2 ml-3">HOME</Nav.Link>
                            <Nav.Link href="/aboutUs" className="font-weight-bold m-2 ml-3">ABOUT US</Nav.Link>
                            <NavDropdown title="STORE" id="basic-nav-dropdown" className="font-weight-bold m-2 ml-3">
                                <NavDropdown.Item href="/shopWithSidebar">Shop With Sidebar</NavDropdown.Item>
                                <NavDropdown.Item href="/productDetail">Product Detail</NavDropdown.Item>
                                <NavDropdown.Item href="/cartPage">Cart Page</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/checkoutPage">Checkout Page</NavDropdown.Item>
                                <NavDropdown.Item href="/myAccount">My Account</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="NEWS" id="basic-nav-dropdown" className="font-weight-bold m-2 ml-3">
                                <NavDropdown.Item href="/newsStandard">News Standard</NavDropdown.Item>
                                <NavDropdown.Item href="/newsWithSidebar">News With Sidebar</NavDropdown.Item>
                                <NavDropdown.Item href="/newsMasonary">News Masonary</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/newsSingle">News Single</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="GALLERY" id="basic-nav-dropdown" className="font-weight-bold m-2 ml-3">
                                <NavDropdown.Item href="/galleryGrid">Gallery Grid</NavDropdown.Item>
                                <NavDropdown.Item href="/galleryMasonary">Gallery Masonary</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/gallerySingle">Gallery Single</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="font-weight-bold m-2 ml-3" title="PAGES" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
                                <NavDropdown.Item href="/page404v">404v Page</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/aboutUs" className="font-weight-bold m-2 ml-3">ABOUT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div class="p-1 mr-5 d-flex">
                    <Link class="p-3"><a href="/"><FontAwesomeIcon className="socialFb" icon={faFacebook} style={{height:32, width:32}}></FontAwesomeIcon></a></Link>
                    <Link class="p-3"><a href="/"><FontAwesomeIcon className="socialTwt" icon={faTwitter} style={{height:32, width:32}}></FontAwesomeIcon></a></Link>
                    <Link class="p-3"><a href="/"><FontAwesomeIcon className="socialGp" icon={faGooglePlus} style={{height:32, width:32}}></FontAwesomeIcon></a></Link>
                    <Link class="p-3"><a href="/"><FontAwesomeIcon className="socialPrt" icon={faPinterest} style={{height:32, width:32}}></FontAwesomeIcon></a></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Header;