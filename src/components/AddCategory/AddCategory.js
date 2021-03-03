import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const AddCategory = () => {
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

        fetch('https://organic-store-by-sarwar.herokuapp.com/addCategory', {
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
        alert("Category Added Successfully");
        history.push(`/home`);
    }

    return (
        <div>
            <Header />
            <div className="col-md-8 mx-auto p-5">
                <h4 className="text-center textHighlight mb-5">Add Category</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-weight-bold textHighlight">Category Title</label><br/>
                    <input name="category" className="form-control p-2" ref={register({ required: true })} placeholder="Enter title" />
                    {errors.title && <span className="error">Category Title is required</span>}
                    <br/>

                    <label className="font-weight-bold textHighlight">Upload Category Image</label><br/>
                    <input onChange={handleFileChange} type="file" name="file" className="" ref={register({ required: true })} placeholder="Upload Image" />
                    {errors.file && <span className="error">Service Title is required</span>}
                    <br />

                    <button className="btn btn-success pl-5 pr-5 mt-5" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;