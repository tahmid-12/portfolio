import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.style.css";

const Contact = () => {
    return (
        <div id='contact'>
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">

                        {/**Mail Start */}
                        <div className="m-2">
                            <a href="mailto:mdtahmidchowdhury12@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="mdtahmidchowdhury12@gmail.com">
                                        <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>
                        {/**Mail Finish */}

                        {/**LinkedIn Start*/}
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/md-tahmid-chowdhury-731737146/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>
                        {/**LinkedIn Finish*/}

                        {/**Github Start*/}
                        <div className="m-2">
                            <a href="https://github.com/tahmid-12" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                        <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                        </div>
                        {/**Github Finish*/}

                        {/**Facebook Start*/}
                        <div className="m-2">
                            <a href="https://www.facebook.com/mohammad.t.chowdhury.7/" target="_blank" rel="noopener noreferrer">
                               <Button variant="outline-primary" title="Say hello on FB">
                                    <i className="fab fa-facebook-square"></i> FaceBook
                               </Button>
                            </a>
                        </div>
                        {/**Facebook Finish*/}

                        {/**Instagram Start*/}
                        <div className="m-2">
                            <a href="https://www.instagram.com/md.tahmidchowdhury/" target="_blank" rel="noopener noreferrer">
                               <Button variant="outline-primary" title="Follow Me on Instagram">
                                    <i class="fab fa-instagram-square"></i> Instagram
                               </Button>
                            </a>
                        </div>
                        {/**Instagram Finish*/}
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact;
