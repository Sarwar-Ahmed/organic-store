import { faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './faq.css'

const Faq = () => {
    return (
        <div>
            <div class="customBg text-center text-light p-5">
                <div className="p-5 m-5">
                    <h2>FAQ'S</h2>
                    <h5>WELCOME TO CERTIFIED ONLINE ORGANIC PRODUCTS SUPPLIERS</h5>
                    <p>We provide <span className="textHightlight">100% organic</span> products</p>
                </div>
            </div>
            <div class="p-5">
                <Accordion defaultActiveKey="0" className="p-md-5">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" >
                            <div className="d-flex">
                                <div class="textHighlight p-2">
                                    <span class=""><FontAwesomeIcon icon={faQuestionCircle} style={{height: 25, width: 25}}></FontAwesomeIcon></span>
                                </div>
                                <div className="mr-auto p-2">
                                    <h5>What are the benefits of organic food?</h5>
                                </div>
                                <div class="p-2">
                                    <Link class=""><FontAwesomeIcon className="textHighlight" icon={faPlus}></FontAwesomeIcon></Link>
                                </div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><p>Again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" >
                            <div className="d-flex">
                                <div class="textHighlight p-2">
                                    <span class=""><FontAwesomeIcon icon={faQuestionCircle} style={{height: 25, width: 25}}></FontAwesomeIcon></span>
                                </div>
                                <div className="mr-auto p-2">
                                    <h5>What are the most important foods to buy organic?</h5>
                                </div>
                                <div class="p-2">
                                    <Link class=""><FontAwesomeIcon className="textHighlight" icon={faPlus}></FontAwesomeIcon></Link>
                                </div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body><p>Again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" >
                            <div className="d-flex">
                                <div class="textHighlight p-2">
                                    <span class=""><FontAwesomeIcon icon={faQuestionCircle} style={{height: 25, width: 25}}></FontAwesomeIcon></span>
                                </div>
                                <div className="mr-auto p-2">
                                    <h5>How is organic better for the environment?</h5>
                                </div>
                                <div class="p-2">
                                    <Link class=""><FontAwesomeIcon className="textHighlight" icon={faPlus}></FontAwesomeIcon></Link>
                                </div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body><p>Again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" >
                            <div className="d-flex">
                                <div class="textHighlight p-2">
                                    <span class=""><FontAwesomeIcon icon={faQuestionCircle} style={{height: 25, width: 25}}></FontAwesomeIcon></span>
                                </div>
                                <div className="mr-auto p-2">
                                    <h5>Must I get air conditioning serviced?</h5>
                                </div>
                                <div class="p-2">
                                    <Link class=""><FontAwesomeIcon className="textHighlight" icon={faPlus}></FontAwesomeIcon></Link>
                                </div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body><p>Again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4" >
                            <div className="d-flex">
                                <div class="textHighlight p-2">
                                    <span class=""><FontAwesomeIcon icon={faQuestionCircle} style={{height: 25, width: 25}}></FontAwesomeIcon></span>
                                </div>
                                <div className="mr-auto p-2">
                                    <h5>How do i Schedule a Service Appoinment?</h5>
                                </div>
                                <div class="p-2">
                                    <Link class=""><FontAwesomeIcon className="textHighlight" icon={faPlus}></FontAwesomeIcon></Link>
                                </div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body><p>Again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;