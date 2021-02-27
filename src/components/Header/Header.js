import React, { useContext, useEffect, useState } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faFacebook, faGooglePlus, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';


const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setCart(data);
        })
    }, [])
    return (
        <div>
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
                    <div class="col-md-4 col-sm-5 col-xs-6 logo-responsive">
                        <div class="logo-area">
                            <Link to="/" class="pull-left logo"><img src="http://st.ourhtmldemo.com/template/organic_store/images/logo/logo.png" alt="LOGO" className="img-fluid"/></Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-7 col-xs-6 pdt-14 w-100 d-flex">
                        <div class="login_option float_left d-flex p-2 mr-3 ml-3">
                            <div class="p-2">
                                <FontAwesomeIcon className="iconBg" style={{height:45, width:45}} icon={faUserCircle}></FontAwesomeIcon>
                            </div>
                            <div class="login-info p-1">
                                <div class="welcome">Welcome!</div>
                                <div>
                                {
                                    loggedInUser.isSiggnedIn
                                    ?
                                    <Link to="/" className=""><small className="textHighlight">{loggedInUser.name}</small></Link>
                                    :<Link to="/login" className="btn iconBg font-weight-bold">Login</Link>
                                }
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <Link to="/cart">
                                <FontAwesomeIcon className="iconBg" icon={faShoppingBag} style={{height:32, width:32}}></FontAwesomeIcon>
                                <span className="font-weight-bold text-danger cartN p-1">{cart.length}</span>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="NavBg d-flex">
                <Navbar expand="lg" className="mr-auto">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/home" className="text-light font-weight-bold m-2 ml-3">HOME</Link>
                            <Link to="/aboutUs" className="text-light font-weight-bold m-2 ml-3">ABOUT US</Link>
                            <Link to="/store/:clickedCategory" className="text-light font-weight-bold m-2 ml-3">STORE</Link>
                            <Link to="/myOrders" className="text-light font-weight-bold m-2 ml-3">MY ORDERS</Link>
                            <Link to="/faq" className="text-light font-weight-bold m-2 ml-3">FAQ</Link>
                            <Link to="/contactUs" className="text-light font-weight-bold m-2 ml-3">CONTACT US</Link>
                            {
                                loggedInUser.isSiggnedIn && <Link to="/login" onClick={() => setLoggedInUser({})} className="text-light font-weight-bold m-2 ml-3">LOGOUT</Link>
                            }
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