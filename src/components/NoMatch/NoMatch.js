import React from 'react';
import Header from '../Header/Header';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div>
            <Header />
            <div class="customBg p-5">
                <div class="p-5 text-center text-light">
                    <div>
                        <figure class="text-center ml-5"><img className="img-fluid" src="http://st.ourhtmldemo.com/template/organic_store/images/logo/404.png" alt=""/></figure>
                        <h2>SORRY, WE COULDN'T FIND THE PAGE</h2>
                    </div>
                    <p>The page you are looking for does not exist. <span>Back to Homepage!</span></p>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;