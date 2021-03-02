import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSiggnedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        confirmPassword: '',
        error:'',
        success: ''
    })

    let history = useHistory();
    let location = useLocation();
    let {from} = location.state || { from: {pathname:"/"}};


    const [newUser, setNewUser] = useState(false);
    

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    // Handle Blur function 
    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password' === e.target.value === 'confirmPassword'){
          const isPasswordValid = e.target.value.length >= 6;
          const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
          const newUserInfo = {...user};
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
    }
    
    // Handle submit function 
    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                  const newUserInfo = {...user};
                  newUserInfo.isSiggnedIn = true;
                  newUserInfo.error = '';
                  newUserInfo.success = true;
                  updateUserName(user.name);
                  handleResponse(newUserInfo, true);
                  
                })
                .catch(error => {
                    // Handle Errors here.
                    const newUserInfo = {};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    handleResponse(newUserInfo, false);
                    // ...
                });
              
        }
    
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              const newUserInfo = {...user};
              newUserInfo.isSiggnedIn = true;
              newUserInfo.error = '';
              newUserInfo.success = true;
              handleResponse(newUserInfo, true);
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                handleResponse(newUserInfo, false);
                // ...
            });
        }
        e.preventDefault();
      }

    //   Update UserName function 
      const updateUserName = name => {
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name
        }).then(function() {
          console.log('user name updated successfully');
        }).catch(function(error) {
          console.log(error);
        });
      }

    //   Handle response function 
      const handleResponse = (signedInUser, redirect) =>{
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        storeAuthToken();
        if(redirect){
            history.replace(from);
        }
      }


    const googleSingIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSiggnedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                sucess: true
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });

    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div>
            <Header />
            <div className="container-fluid text-center">
                <div className="container w-md-50 mx-auto">
                    <div className="pt-5">
                        <Link to="/home"><img src="http://st.ourhtmldemo.com/template/organic_store/images/logo/logo.png" style={{ width: 200 }} className="d-inline-block align-top" alt="" /></Link>
                    </div>
                    <div className="p-md-5 pb-3 col-md-6 mx-auto">
                        <form onSubmit={handleSubmit}>

                            {newUser && <input name="name" onBlur={handleBlur} className="form-control bg-light" placeholder="Name" required/>}
                            {newUser && <span className="text-muted">*Name is required</span>}
                            <br />

                            <input name="email" type="email" onBlur={handleBlur} className="form-control bg-light" placeholder="Email" required/>
                            {newUser && <span className="text-muted">*give proper email address</span>}
                            <br />

                            <input name="password" type="password" onBlur={handleBlur} className="form-control bg-light" placeholder="Password" required/>
                            {newUser && <span className="text-muted">*Password should have at least 6 letter and 1 number</span>}
                            <br />

                            {newUser && <input name="confirmPassword" type="password" onBlur={handleBlur} className="form-control bg-light" placeholder="Confirm Password" required/>}
                            {newUser && <span className="text-muted">*Confirm Password should have same as previous given password</span>}
                            <br />

                            
                            <input type="submit" className="customBtn pl-3 pr-3 p-2 rounded" value={newUser ? 'Sign up': 'Sign in'} />
                            <br />
                            {newUser
                                ? <Link to="/login" onClick={() => setNewUser(!newUser)} className="textHighlight">Already have an account</Link>
                                : <Link to="/login" onClick={() => setNewUser(!newUser)} className="textHighlight">Create an account</Link>}
                        </form>

                        <p style={{color: 'red'}}>{user.error}</p>

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
        </div>
    );
};

export default Login;