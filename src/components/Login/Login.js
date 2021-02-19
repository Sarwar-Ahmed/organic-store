import React, { useState } from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSiggnedIn: false,
        name: '',
        email: '',
        photo: ''
    })

    let history = useHistory();
    let location = useLocation();
    let {from} = location.state || { from: {pathname:"/"}};


    const { register, handleSubmit, errors } = useForm();
    const [newUser, setNewUser] = useState(false);
    

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    const googleSingIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSiggnedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });

    }

    return (
        <div className="container-fluid text-center">
            <div className="container w-md-50 mx-auto">
                <div className="pt-5">
                    <Link to="/home"><img src="http://st.ourhtmldemo.com/template/organic_store/images/logo/logo.png" style={{ width: 200 }} className="d-inline-block align-top" alt="" /></Link>
                </div>
                <div className="p-md-5 pb-3 col-md-6 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {newUser && <input name="name" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Name" />}
                        {errors.name && <span className="error">Name is required</span>}
                        <br />

                        <input name="email" type="email" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span className="error">Email is required</span>}
                        <br />

                        <input name="password" type="password" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Password" />
                        {errors.password && <span className="error">Password is required</span>}
                        <br />

                        {newUser && <input name="confirmPassword" type="password" className="form-control bg-light" defaultValue="" ref={register({ required: true })} placeholder="Confirm Password" />}
                        {errors.confirmPassword && <span className="error">Confirm Password is required</span>}
                        <br />

                        {newUser
                            ? <Link type="submit" className="customBtn pl-3 pr-3 p-2 rounded">Sign up</Link>
                            : <Link type="submit" className="customBtn pl-3 pr-3 p-2 rounded">Sign in</Link>}
                        <br />
                        {newUser
                            ? <Link to="/login" onClick={() => setNewUser(!newUser)} className="textHighlight">Already have an account</Link>
                            : <Link to="/login" onClick={() => setNewUser(!newUser)} className="textHighlight">Create an account</Link>}
                    </form>
                    <div className="">
                        <h6>or <hr /></h6>
                        <div className="border rounded p-1 pl-md-5 pr-md-5 ">
                            <button onClick={googleSingIn} className="btn font-weight-bold text-dark"><span><img src="https://iili.io/2xw5TQ.png" alt="" className="m-1" style={{ width: 16 }} /></span>Continue with Google</button>
                        </div>
                        <div className="border rounded p-1 pl-md-5 pr-md-5 ">
                            <button onClick={googleSingIn} className="btn font-weight-bold text-dark"><span><FontAwesomeIcon icon={faFacebook} className="fbIcon mr-2"></FontAwesomeIcon></span>Continue with Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;