import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './MyOrders.css'

const MyOrders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [adminOrders, setAdminOrders] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => {
            setOrder(data.filter(item => item.email === loggedInUser.email));
        })

        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => {
            setAdminOrders(data);
        })

        fetch( `http://localhost:5000/admin`)
        .then(res => res.json())
        .then(data => {
            const currentAdmin = data.find(data => data.email === loggedInUser.email);
            setAdmin(currentAdmin);
        })
    }, [])
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
                                <th>Product ID</th>
                                <th>Address</th>
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
                                        <td>{orderItem.roadNo}, {orderItem.address}</td>
                                    </tr>)
                                : order.map(orderItem =>
                                    <tr key={orderItem._id}>
                                        <td>{orderItem.instructor}</td>
                                        <td>{orderItem.email}</td>
                                        <td>{orderItem._id}</td>
                                        <td>{orderItem.roadNo}, {orderItem.address}</td>
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