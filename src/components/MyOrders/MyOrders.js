import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Dropdown, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './MyOrders.css'

const MyOrders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [adminOrders, setAdminOrders] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [saveTotal, setSaveTotal] = useState([]);
    const [status, setStatus] = useState("Pending");

    const history = useHistory();


    const handleStatus = (status, id) => {
        setStatus(status);
        fetch(`https://organic-store-by-sarwar.herokuapp.com/updateOrders`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status, id})
        })
        .then(res => res.json())
        .then(data => {
            
        })
        alert("Status updated successfully.");
        history.push(`/myOrders`);

    }

    useEffect(() => {
        fetch(`https://organic-store-by-sarwar.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => {
            setOrder(data.filter(item => item.email === loggedInUser.email));
        })

        fetch(`https://organic-store-by-sarwar.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => {
            setAdminOrders(data);
        })

        fetch( `https://organic-store-by-sarwar.herokuapp.com/admin`)
        .then(res => res.json())
        .then(data => {
            const currentAdmin = data.find(data => data.email === loggedInUser.email);
            setAdmin(currentAdmin);
        })

        fetch('https://organic-store-by-sarwar.herokuapp.com/cart?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setSaveTotal(data.map(item => item.quantity * item.price));
        })
    }, [order, adminOrders])
    return (
        <div>
            <Header />
            <div className="row p-5">
                <div className="col-md-8 p-5 bg-white">
                    <Table responsive size="sm">
                        <thead style={{ backgroundColor: "#F4F7FC" }}>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Order ID</th>
                                <th>Total</th>
                                <th>Address</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admin 
                                ? adminOrders.map(orderItem =>
                                    <tr key={orderItem._id}>
                                        <td>{orderItem.instructor}</td>
                                        <td>{orderItem.email}</td>
                                        <td>{orderItem._id}</td>
                                        <td>৳{orderItem.total}</td>
                                        <td>{orderItem.roadNo}, {orderItem.address}</td>
                                        <td>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="" className={orderItem.status==="Pending"? "text-danger": orderItem.status==="On going"? "text-warning":"text-success"}>{orderItem.status}</Button>

                                                <Dropdown.Toggle split variant="" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="" onClick={() => {handleStatus("Pending", orderItem._id)}}><Link to="/login" className="text-danger">Pending</Link></Dropdown.Item>
                                                    <Dropdown.Item href=""  onClick={() => {handleStatus("On going", orderItem._id)}}><Link to="/login" className="text-warning">On going</Link></Dropdown.Item>
                                                    <Dropdown.Item href=""  onClick={() => {handleStatus("Done", orderItem._id)}}><Link to="/login" className="text-success">Done</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>)
                                : order.map(orderItem =>
                                    <tr key={orderItem._id}>
                                        <td>{orderItem.instructor}</td>
                                        <td>{orderItem.email}</td>
                                        <td>{orderItem._id}</td>
                                        <td>৳{saveTotal.reduce((previousScore, currentScore, index) => previousScore + currentScore, 0)}</td>
                                        <td>{orderItem.roadNo}, {orderItem.address}</td>
                                        <td><button className={orderItem.status==="Pending"?"btn btn-danger ml-auto":orderItem.status==="On going"?"btn btn-warning ml-auto":"btn btn-success ml-auto"}>{orderItem.status}</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-4 p-5 rounded">
                    <div className="bg-light p-3" style={{borderRadius: 20, textAlign: "left"}}>
                        <div>
                            <img src="https://iili.io/2vJOzb.png" alt="" className="w-25"/>
                        </div>
                        <div>
                            <h3>30 Minutes</h3>
                            <p><small className="text-muted">Estimated delivery time</small></p>
                        </div>
                        {
                            isClicked && 
                            <div>
                                <div className="d-flex">
                                    <h6 className="mr-auto">Sarwar: </h6>
                                    <p>+88017 7046 7109</p>
                                </div>
                                <div className="d-flex">
                                    <h6 className="mr-auto">Mahin: </h6>
                                    <p>+88017 3857 1086</p>
                                </div>
                                <div className="d-flex">
                                    <h6 className="mr-auto">Muslam: </h6>
                                    <p>+88017 4002 4370</p>
                                </div>
                            </div>
                        }
                        <button onClick={() => setIsClicked(true)} className="bg-danger btn text-white rounded">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;