import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Cart = () => {

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
    }, [cart])

    return (
        <div>
            <Header />
            <h1>Cart length: {cart.length}</h1>
        </div>
    );
};

export default Cart;