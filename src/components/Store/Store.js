import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Store.css'


const Store = () => {

    const {clickedCategory} = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedProductsHome, setSelectedProductsHome] = useState([]);
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch(`https://organic-store-by-sarwar.herokuapp.com/category`)
        .then(res => res.json())
        .then(data => {
            setCategories(data);
        })

        fetch(`https://organic-store-by-sarwar.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => {
            setAllProducts(data);
            // console.log("products added")
        })

        fetch(`https://organic-store-by-sarwar.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => {
            setSelectedProductsHome(data.filter(item => item.category === clickedCategory));
        })

        fetch( `https://organic-store-by-sarwar.herokuapp.com/admin`)
        .then(res => res.json())
        .then(data => {
            const currentAdmin = data.find(data => data.email === loggedInUser.email);
            setAdmin(currentAdmin);
        })

    }, [allProducts, categories])


    const [products, setProducts] = useState([]);
    const [isClicked, setIsClicked] = useState(clickedCategory);  
    const history = useHistory();

    const handleProductsCategory = (cat) =>{
        setIsClicked(cat);
        const selectedItems = allProducts.filter(item => item.category === cat);
        setProducts(selectedItems);
    }
    const handleDeleteProduct = (id) =>{
        fetch(`https://organic-store-by-sarwar.herokuapp.com/deleteProduct/${id}`, {
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
    return (
        <div className="text-center">
            <Header />
            <div>
                <div class="storeBg text-center text-light">
                    <div className="pt-md-5">
                        <h2 className="delivery_title">CATEGORIES</h2>
                    </div>
                    <div>
                        <Nav className="justify-content-center font-weight-bold p-md-5 p-3" activeKey="/home">
                            <Nav.Item>
                                {
                                    categories.map( category =>
                                        <Link className={isClicked===`${category.category}` ? "active mr-md-3 ml-md-3 ml-1 mr-1" : "navLink mr-md-3 ml-md-3 ml-1 mr-1"} to={`/store/${category.category}`} onClick={() => {handleProductsCategory(`${category.category}`)}} key={category._id}>{category.category}</Link>
                                    )
                                }
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                {
                        products.length===0
                        && selectedProductsHome.length===0 && <h3 className="delivery_title mt-5">All Products</h3>
                    }
                <div className="row p-md-5 p-3 m-md-5">
                    {
                        products.length===0
                        ?
                        selectedProductsHome.length===0
                        ?allProducts.map(item => 
                            <Container fluid className="col-md-3 col-6" key={item._id}>
                                <div className="items bg-light p-2 pt-5 m-1">
                                    <Link to={`/productsDetails/${item._id}`}>
                                        <img src={item.image} className="w-50 rounded-circle" alt=""/>
                                        {
                                            item.images && <img src={`data:image/png;base64,${item.images.img}`} className="w-50 rounded-circle" alt="" />
                                        }
                                        <h5 className="text-dark">{item.title}</h5>
                                        <div className="d-flex p-md-2">
                                            <h5 className="text-dark mr-auto">৳{item.price}</h5>
                                            {admin
                                            ?<Link className="p-md-1 btn-danger rounded" onClick={() => handleDeleteProduct(item._id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> Delete</Link>
                                            :<Link className="p-1 btn-success rounded">View</Link>
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Container>    
                        )
                        :selectedProductsHome.map(item => 
                            <Container fluid className="col-md-3 col-6" key={item._id}>
                                <div className="items bg-light p-2 pt-5 m-1">
                                    <Link to={`/productsDetails/${item._id}`}>
                                        <img src={item.image} className="w-50 rounded-circle" alt=""/>
                                        {
                                            item.images && <img src={`data:image/png;base64,${item.images.img}`} className="w-50 rounded-circle" alt="" />
                                        }
                                        <h5 className="text-dark">{item.title}</h5>
                                        <p className="text-muted">{item.info}</p>
                                        <div className="d-flex p-md-2">
                                            <h5 className="text-dark mr-auto">৳{item.price}</h5>
                                            {admin
                                            ?<Link className="p-md-1 btn-danger rounded" onClick={() => handleDeleteProduct(item._id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> Delete</Link>
                                            :<Link className="p-1 btn-success rounded">View</Link>
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Container>    
                        )
                        :products.map(item => 
                            <Container fluid className="col-md-3 col-6" key={item._id}>
                                <div className="items bg-light p-2 pt-5 m-1">
                                    <Link to={`/productsDetails/${item._id}`}>
                                        <img src={item.image} className="w-50 rounded-circle" alt=""/>
                                        {
                                            item.images && <img src={`data:image/png;base64,${item.images.img}`} className="w-50 rounded-circle" alt="" />
                                        }
                                        <h5 className="text-dark">{item.title}</h5>
                                        <p className="text-muted">{item.info}</p>
                                        <div className="d-flex p-md-2">
                                            <h5 className="text-dark mr-auto">৳{item.price}</h5>
                                            {admin
                                            ?<Link className="p-md-1 btn-danger rounded" onClick={() => handleDeleteProduct(item._id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> Delete</Link>
                                            :<Link className="p-1 btn-success rounded">View</Link>
                                            }
                                        </div>
                                    </Link>
                                </div>
                            </Container>    
                        )
                    }
                </div>
            </div>
        </div>
    );

};

export default Store;