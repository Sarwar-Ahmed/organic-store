import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeProducts from '../../fakeData/fakeProducts';
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

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [defaultCategory, setDefaultCategory] = useState([]);
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

        // fetch(`http://localhost:5000/products`)
        // .then(res => res.json())
        // .then(data => {
        //     setDefaultCategory(data.filter(item => item.category === "grocery"));
        // })

        // fetch(`https://red-onion-restaurant-sarwar.herokuapp.com/cart`)
        // .then(res => res.json())
        // .then(data => {
        //     setCart(data.filter(cartItem => cartItem.email === loggedInUser.email));
        // })
    }, [])

    const [products, setProducts] = useState(allProducts.filter(item => item.category === "grocery"));
    const [isClicked, setIsClicked] = useState({});  
    const history = useHistory();

    const handleProductsCategory = (cat) =>{
        setIsClicked(cat);
        const selectedItems = allProducts.filter(item => item.category === cat);
        setProducts(selectedItems);
    }

    const handleCheckout = () =>{
        history.push(`/placeOrder`)
    }
    // console.log(isClicked);
    return (
        <div className="text-center">
            <div>
                <div class="storeBg text-center text-light p-5">
                    <div className="delivery_title">
                        <h2>CATEGORIES</h2>
                    </div>
                    <Nav className="justify-content-center font-weight-bold p-5" activeKey="/home">
                        <Nav.Item>
                            {
                                categories.map( category =>
                                    <Link className={isClicked===`"${category.category}"` ? "active mr-3 ml-3" : "navLink mr-3 ml-3"} to="/store" onClick={() => {handleProductsCategory(`${category.category}`)}} key={category._id}>{category.category}</Link>
                                )
                            }
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="row p-5">
                    {
                        products.length===0
                        ?allProducts.map(item => 
                            <div className="col-md-3 col-6 p-3 items" key={item._id}>
                                <Link to={`/itemDetails/${item._id}`}>
                                    <img src={item.image} className="w-50" alt=""/>
                                    <h5 className="text-dark">{item.title}</h5>
                                    <p className="text-muted">{item.info}</p>
                                    <h4 className="text-dark">৳{item.price}</h4>
                                </Link>
                            </div>    
                        )
                        :products.map(item => 
                            <div className="col-md-3 col-6 p-3 items" key={item._id}>
                                <Link to={`/itemDetails/${item._id}`}>
                                    <img src={item.image} className="w-50" alt=""/>
                                    <h5 className="text-dark">{item.title}</h5>
                                    <p className="text-muted">{item.info}</p>
                                    <h4 className="text-dark">৳{item.price}</h4>
                                </Link>
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