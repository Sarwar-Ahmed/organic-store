import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductCategories.css'

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://organic-store-by-sarwar.herokuapp.com/category`)
        .then(res => res.json())
        .then(data => {
            setCategories(data);
        })
    },[categories])
    return (
        <Container fluid>
            <div class="p-5">
                <div class="text-center">
                    <div className="delivery_title">
                        <h2>PRODUCT CATEGORIES</h2>
                    </div> 
                </div>
                <div className="row p-md-5 text-center">
                    {
                        categories.map(category => 
                            <div className="col-md-2 col-6" key={category._id}>
                                <div className="categoryImg m-1">
                                    <Link to={`/store/${category.category}`}>
                                        <div className="">
                                            <img src={category.image} alt="" className="img-fluid rounded-circle"/>
                                            {
                                                category.images && <img src={`data:image/png;base64,${category.images.img}`} className="img-fluid rounded-circle" alt="" />
                                            }
                                        </div>
                                        <h6 className="textHighlight">{category.category}</h6>
                                    </Link>
                                </div>
                            </div>  
                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default ProductCategories;