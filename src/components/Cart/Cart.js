import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Cart = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useState([]);
    const [total, setTotal]= useState([]);
    
    const history = useHistory();

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

        fetch('http://localhost:5000/cart?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setTotal(data.map(item => item.quantity * item.price));
        })
    }, [cart]);


    const handleRemoveCartItem = (id) => {
        fetch(`http://localhost:5000/deleteFromCart/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        });
        alert("Item successfully deleted from the cart.");
        history.push(`/cart`);

    }

    return (
        <div>
            <Header />
            <div class="p-5 text-center">
                <div class="p-md-5">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr className="bg-light p-5">
                                    <th><span>Product</span></th>
                                    <th><span>Quantity</span></th>
                                    <th><span>Avalability</span></th>
                                    <th><span>Price</span></th>
                                    <th><span>Total</span></th>
                                    <th><span>Remove</span></th>
                                </tr>

                                {
                                    cart.map(item => 
                                        <tr className="" key={item._id}>
                                            <td className="d-flex">
                                                <div>
                                                    <img src={item.image} alt="images" class="w-25 rounded-circle"/>
                                                </div>
                                                <h6 class="text-center p-2">{item.title}</h6>
                                            </td>
                                            <td>{item.quantity}</td>
                                            <td>
                                                <div class="">
                                                    <FontAwesomeIcon icon={faCheck} className="textHighlight"></FontAwesomeIcon>
                                                    <span class="p-2">Item(s) <br/>Avilable Now</span>
                                                </div>
                                            </td>
                                            <td><span>৳ {item.price}</span></td>
                                            <td className="textHighlight">৳ {item.quantity * item.price}</td>
                                            <td><span>Remove</span><button onClick={() => {handleRemoveCartItem(item._id)}} className="btn"><FontAwesomeIcon icon={faTimesCircle} style={{color: 'red'}} className="ml-2"></FontAwesomeIcon></button></td>
                                        </tr>    
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row p-md-5 mx-auto">
                    <div class="col-md-4 p-5">
                        <div className="d-flex">
                            <input type="text" placeholder="Enter Coupon Code..." class=""/>
                            <Link to="" class="customBtn rounded pl-3 pr-3 ml-3">Apply Coupon</Link>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h4>Cart Totals</h4>
                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td><span>Cart Subtotal</span></td>
                                        <td><span>৳ {total.reduce((previousScore, currentScore, index) => previousScore + currentScore, 0)}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Shipping and Handling</span></td>
                                        <td><span>Free Shipping</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Order Total</span></td>
                                        <td><span>৳ {total.reduce((previousScore, currentScore, index) => previousScore + currentScore, 0)}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Link to="/checkout" class="customBtn rounded pl-3 pr-3 ml-3 p-2 mt-5">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;