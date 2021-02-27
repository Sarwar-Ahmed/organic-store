import { faMinusCircle, faPlusCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './ProductsDetails.css'

const ProductsDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => {
            setProduct(data.find(item => item._id === id));
        })
    }, [])

    const [quantity, setQuantity] = useState(1);
    const history = useHistory();

    const handleCart = () => {
        const cartItem = product;
        cartItem.quantity = quantity;
        cartItem.email = loggedInUser.email;
        fetch('http://localhost:5000/addCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
        alert("Item successfully added to cart.");
        history.push(`/store/:clickedCategory`);
    }

    return (
        <div>
            <Header />
            <div className="p-md-5">
                <div className="row p-5">
                    <div className="col-md-6 p-5">
                        <h2>{product.title}</h2>
                        <p className="text-muted">Gay one the what walk the she. Demesne mention promise you justice arrived way. Amazing foods are Or and icreasing to in especially inquieted companions acceptance admiration. Outweight it families distance wandered ye.</p>
                        <div className="d-flex">
                            <h4 className="ml-auto p-3">৳{product.price * quantity}</h4> <h4 className="mr-auto p-3 font-weight-bold"><FontAwesomeIcon onClick={() => setQuantity(quantity -1)} icon={faMinusCircle} /> {quantity} <FontAwesomeIcon onClick={() => setQuantity(quantity + 1)} icon={faPlusCircle}/></h4>
                        </div>
                        <button onClick={() => handleCart()} className="customBtn rounded pl-3 pr-3 p-2"><FontAwesomeIcon icon={faShoppingCart} className="" /> Add</button>

                    </div>
                    <div className="col-md-6 p-3">
                        <img className="w-75" src={product.image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ProductsDetails;