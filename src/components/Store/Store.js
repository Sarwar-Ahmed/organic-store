import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeProducts from '../../fakeData/fakeProducts';
import Header from '../Header/Header';
import './Store.css'


const Store = () => {

    // const addProducts = () => {
    //     fetch(`http://localhost:5000/addProducts`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(fakeProducts)
    //     })

    // }
    const {clickedCategory} = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedProductsHome, setSelectedProductsHome] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/category`)
        .then(res => res.json())
        .then(data => {
            setCategories(data);
        })

        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => {
            setAllProducts(data);
            // console.log("products added")
        })

        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => {
            setSelectedProductsHome(data.filter(item => item.category === clickedCategory));
        })

        fetch( `http://localhost:5000/admin`)
        .then(res => res.json())
        .then(data => {
            const currentAdmin = data.find(data => data.email === loggedInUser.email);
            setAdmin(currentAdmin);
        })

        // fetch(`https://red-onion-restaurant-sarwar.herokuapp.com/cart`)
        // .then(res => res.json())
        // .then(data => {
        //     setCart(data.filter(cartItem => cartItem.email === loggedInUser.email));
        // })
    }, [])

    // console.log(allProducts.length);

    const [products, setProducts] = useState([]);
    const [isClicked, setIsClicked] = useState(clickedCategory);  
    const history = useHistory();

    const handleProductsCategory = (cat) =>{
        setIsClicked(cat);
        const selectedItems = allProducts.filter(item => item.category === cat);
        setProducts(selectedItems);
    }
    const handleDeleteProduct = (id) =>{
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        });
        alert("Item successfully deleted from the store.");
        history.push(`/store/:clickedCategory`);
    }

    const handleCheckout = () =>{
        history.push(`/placeOrder`)
    }
    // console.log(products.length);
    return (
        <div className="text-center">
            <Header />
            <div>
                <div class="storeBg text-center text-light">
                    <div className="pt-md-5">
                        <h2 className="delivery_title">CATEGORIES</h2>
                    </div>
                    <Nav className="justify-content-center font-weight-bold p-5" activeKey="/home">
                        <Nav.Item>
                            {
                                categories.map( category =>
                                    <Link className={isClicked===`${category.category}` ? "active mr-3 ml-3" : "navLink mr-3 ml-3"} to={`/store/${category.category}`} onClick={() => {handleProductsCategory(`${category.category}`)}} key={category._id}>{category.category}</Link>
                                )
                            }
                        </Nav.Item>
                    </Nav>
                </div>
                {
                        products.length===0
                        && selectedProductsHome.length===0 && <h3 className="delivery_title mt-5">All Products</h3>
                    }
                <div className="row p-5 m-md-5">
                    {
                        products.length===0
                        ?
                        selectedProductsHome.length===0
                        ?allProducts.map(item => 
                            <div className="col-md-3 col-6" key={item._id}>
                                <div className="items bg-light p-2 pt-5 m-1">
                                    <Link to={`/productsDetails/${item._id}`}>
                                        <img src={item.image} className="w-50 rounded-circle" alt=""/>
                                        <h5 className="text-dark">{item.title}</h5>
                                        <div className="d-flex p-md-2">
                                            <h5 className="text-dark mr-auto">৳{item.price}</h5>
                                            {admin
                                            ?<Link className="p-1 btn-danger rounded"><FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDeleteProduct(item._id)}></FontAwesomeIcon></Link>
                                            :<Link className="p-1 btn-success rounded">View</Link>
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </div>    
                        )
                        :selectedProductsHome.map(item => 
                            <div className="col-md-3 col-6" key={item._id}>
                                <div className="items bg-light p-2 pt-5 m-1">
                                    <Link to={`/productsDetails/${item._id}`}>
                                        <img src={item.image} className="w-50 rounded-circle" alt=""/>
                                        <h5 className="text-dark">{item.title}</h5>
                                        <p className="text-muted">{item.info}</p>
                                        <div className="d-flex p-md-2">
                                            <h5 className="text-dark mr-auto">৳{item.price}</h5>
                                            <Link className="p-1 btn-success rounded">View</Link>
                                        </div>
                                    </Link>
                                </div>
                            </div>    
                        )
                        :products.map(item => 
                            <div className="col-md-3 col-6" key={item._id}>
                                <div className="items bg-light p-2 pt-5 m-1">
                                    <Link to={`/productsDetails/${item._id}`}>
                                        <img src={item.image} className="w-50 rounded-circle" alt=""/>
                                        <h5 className="text-dark">{item.title}</h5>
                                        <p className="text-muted">{item.info}</p>
                                        <div className="d-flex p-md-2">
                                            <h5 className="text-dark mr-auto">৳{item.price}</h5>
                                            <Link className="p-1 btn-success rounded">View</Link>
                                        </div>
                                    </Link>
                                </div>
                            </div>    
                        )
                    }
                </div>
                {
                    cart.length
                    ?<button  onClick={() => handleCheckout()} className="bg-danger btn text-white rounded pl-5 pr-5 m-5">Checkout Your Food</button>
                    :<button  onClick={() => handleCheckout()} className="bg-secondary btn text-white rounded pl-5 pr-5 m-5" disabled>Checkout Your Food</button>
                }
            </div>
        </div>
    );

};

export default Store;