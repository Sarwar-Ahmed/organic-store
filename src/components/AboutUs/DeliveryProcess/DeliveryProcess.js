import { faClipboardList, faPeopleCarry, faShippingFast, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DeliverProcess.css'

const DeliveryProcess = () => {
    return (
        <div class="bg-light text-center p-5">
            <div class="delivery_title">
                <h3>Delivery Process</h3>
            </div>
            <div class="row p-5">
                <div class="col-md-3 col-sm-6 col-xs-12 text-center p-5">
                    <div class="">
                        <div class=""><div class=""><FontAwesomeIcon icon={faShoppingBag} className="textHighlight" style={{height: 64, width: 64}}></FontAwesomeIcon><span className="textHighlight font-weight-bold p-2">1</span></div></div>
                        
                        <h5 className="pt-3">Customer Order</h5>
                        <p>
                        </p><p className="p-2">
                        Organicstore.com’s customers order is <br/>captured by warehouse API..
                        </p>
                        
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 text-center p-5">
                    <div class="">
                        <div class=""><div class=""><FontAwesomeIcon icon={faPeopleCarry} className="textHighlight" style={{height: 64, width: 64}}></FontAwesomeIcon><span className="textHighlight font-weight-bold p-2">2</span></div></div>
                        <h5 className="pt-3">Packing</h5>
                        <p>
                        </p><p className="p-2">
                        Organicstore.com’s customers order is <br/>captured by warehouse API..
                        </p>
                        
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 text-center p-5">
                    <div class="">
                        <div class=""><div class=""><FontAwesomeIcon icon={faShippingFast} className="textHighlight" style={{height: 64, width: 64}}></FontAwesomeIcon><span className="textHighlight font-weight-bold p-2">3</span></div></div>
                        <h5 className="pt-3">Delivery</h5>
                        <p className="p-2">
                        Organicstore.com’s customers order is <br/>captured by warehouse API..
                        </p>
                        
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-12 text-center p-5">
                    <div class="">
                        <div class=""><div class=""><FontAwesomeIcon icon={faClipboardList} className="textHighlight" style={{height: 64, width: 64}}></FontAwesomeIcon><span className="textHighlight font-weight-bold p-2">4</span></div></div>
                        <h5 className="pt-3">Reporting</h5>
                        <p className="p-2">
                        Organicstore.com’s customers order is <br/>captured by warehouse API..
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryProcess;