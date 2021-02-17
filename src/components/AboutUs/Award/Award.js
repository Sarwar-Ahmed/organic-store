import React from 'react';
import { Link } from 'react-router-dom';

const Award = () => {
    return (
        <div class="row p-5">
            <div class="col-md-6 col-sm-12 p-5">
                <div class="award-info">
                    <div class="theme_title">
                        <h2>Awards &amp; Recognition</h2>
                    </div>
                </div>
                <div class="text-muted p-2">
                    <p>How to pursue pleasure rationally encounter consequences that are extremely painful Nor again is there anyone who loves or pursues or desires to obtain pain of because it is pain, but because occasionally circumstances occur in some great.</p>
                </div>
                <div class="p-3">
                    <div className="d-flex">
                        <Link to="/" className="p-2"><img src="http://st.ourhtmldemo.com/template/organic_store/images/partner-logo/5.png" alt="" className="img-fluid"/></Link>
                        <Link to="/" className="p-2"><img src="http://st.ourhtmldemo.com/template/organic_store/images/partner-logo/6.png" alt="" className="img-fluid"/></Link>
                        <Link to="/" className="p-2"><img src="http://st.ourhtmldemo.com/template/organic_store/images/partner-logo/7.png" alt="" className="img-fluid"/></Link>
                        <Link to="/" className="p-2"><img src="http://st.ourhtmldemo.com/template/organic_store/images/partner-logo/8.png" alt="" className="img-fluid"/></Link>
                    </div>
                </div>
                <div class="p-2">
                    <h6>Customer Support:
                        <span className="text-muted">  If you have any doubt about ConsultPress WordPress or how we can support your business, Send us an <span className="textHighlight">email</span> and we’ll get in touch shortly, or Contact via <span className="textHighlight">Support Forum.</span></span>
                    </h6>
                    <h6>Office Hours:
                        <span className="text-muted"> 07:30 and 19:00,<span className="textHighlight"> Sunday - Holiday.</span></span>
                    </h6>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 p-5">
                <div class="">
                    <div class="ml-4 p-1">
                    <h2>SEND US MESSAGE</h2>
                </div>
                <form action="/" className="p-2">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" className="form-control m-3" placeholder="Your Name*"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" className="form-control m-3" placeholder="Your Email*"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" className="form-control m-3" placeholder="Phone"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" className="form-control m-3" placeholder="Subject"/>
                        </div>

                        <div class="col-md-12">
                            <textarea rows="5" placeholder="Comments" className="form-control m-3"></textarea>
                        </div>
                        <div class="col-md-12">
                            <Link type="submit" class="customBtn pr-3 pl-3 p-2 ml-3 mt-3 rounded">POST COMMENT</Link>
                        </div>
                    </div>
                </form>

                </div>
            </div>
        </div>
    );
};

export default Award;