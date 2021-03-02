import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const AddCategory = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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

        fetch('http://localhost:5000/addCategory', {
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
            <div className="p-5"> 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-weight-bold">Category Title</label><br/>
                    <input name="category" className="form-control p-2" ref={register({ required: true })} placeholder="Enter title" />
                    {errors.title && <span className="error">Category Title is required</span>}
                    <br/>

                    <label className="font-weight-bold">Upload Category Image</label><br/>
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