import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const AddProducts = () => {
    const [file, setFile] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('category', data.category);
        formData.append('title', data.title);
        formData.append('price', data.price);


        fetch('https://organic-store-by-sarwar.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        alert("Product Added Successfully");
        history.push(`/store/:clickedCategory`);
    }
    return (
        <div>
            <Header />
            <Container fluid className="col-md-8 mx-auto p-5">
                <h4 className="text-center textHighlight mb-5">Add Product</h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-weight-bold textHighlight">Category</label><br/>
                    <input name="category" className="form-control p-2" ref={register({ required: true })} placeholder="Enter category" />
                    {errors.category && <span className="error">Category Title is required</span>}
                    <br/>

                    <label className="font-weight-bold textHighlight">Product Title</label><br/>
                    <input name="title" className="form-control p-2" ref={register({ required: true })} placeholder="Enter Product title" />
                    {errors.title && <span className="error">Product Title is required</span>}
                    <br/>

                    <label className="font-weight-bold textHighlight">Price</label><br/>
                    <input name="price" className="form-control p-2" ref={register({ required: true })} placeholder="Enter Product Price" />
                    {errors.price && <span className="error">Product Price is required</span>}
                    <br/>

                    <label className="font-weight-bold textHighlight">Upload Product Image</label><br/>
                    <input onChange={handleFileChange} type="file" name="file" className="" ref={register({ required: true })} placeholder="Upload Image" />
                    {errors.file && <span className="error">Service Title is required</span>}
                    <br />

                    <button className="btn btn-success pl-5 pr-5 mt-5" type="submit">Send</button>
                </form>
            </Container>
        </div>
    );
};

export default AddProducts;