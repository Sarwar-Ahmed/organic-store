import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const AddAdmin = () => {
    const [admin, setAdmin] = useState([]);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    useEffect(() => {
        fetch( `https://organic-store-by-sarwar.herokuapp.com/admin`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data);
        })
    }, [admin])

    const onSubmit = (data) => {
        fetch('https://organic-store-by-sarwar.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert("Admin Added Successfully");
        history.push(`/addAdmin`);
    }
    
    const handleDeleteAdmin = (id) => {
        fetch(`https://organic-store-by-sarwar.herokuapp.com/deleteAdmin/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        });
        alert("Admin successfully deleted from the Admin List.");
        history.push(`/addAdmin`);
    }

    return (
        <div>
            <Header />
            <div className="row p-5"> 
                <div className="col-md-5">
                    <h3 className="textHighlight pl-4 mb-3">Admin List:</h3>
                    <ol>
                        {
                            admin.map(admins => 
                                <li key={admins._id} className="font-weight-bold mb-3">{admins.email}.<Link className="ml-5 p-1 btn-danger rounded" onClick={() => handleDeleteAdmin(admins._id)}><FontAwesomeIcon icon={faTrashAlt} className=""></FontAwesomeIcon> remove</Link></li>   
                            )
                        }
                    </ol>
                </div>
                <div className="col-md-7 mt-5">
                    <h4 className="textHighlight">Make An Admin:</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="font-weight-bold">Email</label><br/>
                        <input name="email" className="form-control p-2" ref={register({ required: true })} placeholder="jon@gmail.com" />
                        {errors.email && <span className="error">Email is required</span>}

                        <button className="btn btn-success pl-5 pr-5 p-2 mb-1 mt-2" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;