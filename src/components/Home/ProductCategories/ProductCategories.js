import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCategories.css'

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/category`)
        .then(res => res.json())
        .then(data => {
            setCategories(data);
        })
    },[])
    return (
        <div>
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
                                            <img src={category.image} alt="" className="img-fluid"/>
                                        </div>
                                        <h6 className="textHighlight">{category.category}</h6>
                                    </Link>
                                </div>
                            </div>  
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;