import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [clickedContinue, setClickedContinue] = useState(false);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([]);
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
    }, [cart])

    const onSubmit = (data) => {
        setClickedContinue(true);
        const orderItems = {...cart};
        orderItems.address = data.address;
        orderItems.roadNo = data.roadNo;
        orderItems.flat = data.flat;
        orderItems.businessName = data.businessName;
        orderItems.instructor = data.instructor;
        orderItems.email= loggedInUser.email;
        setOrder(orderItems);
    }
    const handlePlaceOrder = () => {
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        alert("Order successfully done.");
        history.push(`/myOrders`);
    }
    return (
        <div>
            <Header />
            <div className="row p-5">
                <div className="col-md-7 p-md-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h4>Edit Delivery Details</h4>
                        <hr/>
                        <input name="address" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Address" />
                        {errors.address && <span className="error text-danger">Address is required</span>}
                        <br />

                        <input name="roadNo" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Road No" />
                        {errors.roadNo && <span className="error text-danger">Road No is required</span>}
                        <br />

                        <input name="flat" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Flat, suite or floor" />
                        {errors.flat && <span className="error text-danger">Flat, suite or floor is required</span>}
                        <br />

                        <input name="businessName" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Business Name" />
                        {errors.businessName && <span className="error text-danger">Business Name is required</span>}
                        <br />

                        <input name="instructor" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Add delivery instructor" />
                        {errors.instructor && <span className="error text-danger">Delivery instructor is required</span>}
                        <br />

                        <button type="submit" className="customBtn pl-3 pr-3 p-2 rounded">Save &amp; Continue</button>
                    </form>
                </div>
                <div className="col-md-5 p-5 font-weight-bold" style={{textAlign: 'left'}}>
                    <div className="p-3">
                        <h6>From <strong>Gulshan Plaza Restaurent GPR</strong></h6>
                        <p>Arriving in 20-30 min</p>
                        <p>107 Rd No 8</p>
                    </div>
                    <div>
                        {
                            cart.map(cart => 
                                <div style={{borderRadius: 20}} className="row bg-light p-2 mb-2" key={cart._id}>
                                    <div className="col-3">
                                        <img src={cart.image} className="img-fluid rounded-circle" alt=""/>
                                    </div>
                                    <div className="col-6">
                                        <h6>{cart.title}</h6>
                                        <h6 className="text-danger">৳ {cart.price * (cart.quantity)}</h6>
                                        <h6 className="text-muted">Delivery free</h6>
                                    </div>
                                    <div className="col-3 my-auto">
                                        <h6 className="">{cart.quantity}</h6>
                                    </div>
                                </div>    
                            )
                        }
                    </div>
                    <div className="p-5">
                        <div className="d-flex">
                            <p>Subtotal: {cart.length} item</p>
                            <p className="ml-auto">৳ {total.reduce((previousScore, currentScore, index) => previousScore + currentScore, 0)}</p>
                        </div>
                        <div className="d-flex">
                            <h6>Total</h6>
                            <h6 className="ml-auto"><strong>৳ {total.reduce((previousScore, currentScore, index) => previousScore + currentScore, 0)}</strong></h6>
                        </div>
                        {
                            clickedContinue
                            ?<button onClick={() => handlePlaceOrder()} className="bg-success btn text-white rounded pl-5 pr-5 m-5">Place Order</button>
                            :<button onClick={() => handlePlaceOrder()} className="bg-secondary btn text-white rounded pl-5 pr-5 m-5" disabled>Place Order</button>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;