import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from "react-bootstrap/Card";
//import L_ACCENTURE from "../../assets/img/experience/sbl.jpg"
import Tilt from "react-tilt";

import './experience.style.css';

const Experience = () => {
    return (
        <div id="experience">
             <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
             <Jumbotron className='jumbo-style'>
                    <Container>
                        {/**Internship */}
                        <Tilt options={{ max: 25 }}>
                             <Card>
                                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                            {/**<Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
                                            Standard Bank Limited
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center">Internship</Card.Title>
                                    </div>

                                    <div>
                                        <Card.Text className="text-center style">
                                           <strong className="body-title-style ">4 months Internship</strong>
                                            <br />
                                            <strong>Duration:</strong> July 2019 - November 2019
                                            <br/>
                                            <strong> Description </strong>
                                            <ul className="text-left">
                                            <li><strong>Learned &amp; Handled</strong> Clients when they needed any service.</li>
                                            <li>How <strong>L/C, FDD</strong> reports are prepared and forwaded.
                                            </li>
                                            <li>How an <strong>Application</strong> is made and forwarded for any qieries or for any due collections. 
                                            </li>
                                            <li>How a <strong>new PC</strong> is prepared and sent to another branch.</li>
                                            <li>How to find out <strong>problems in Faulty PC</strong> that comes from another branchs.</li>
                                            <li>How to set Up <strong>Power Supply and RAM</strong> into a new PC.</li>
                                            <li>HOw <strong>an IP Address is configured</strong> after windows loading.</li>
                                            <li>Learned how a bank keeps <strong>data about all the employees</strong> in the database.</li>
                                            <li><strong>The most important thing is the importance of paperwork.</strong></li>
                                            {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                             </Card>
                        </Tilt>
                        {/**Internship */}

                        {/* Php */}
                        <Tilt options={{ max: 25 }}>
                             <Card>
                                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                            {/**<Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
                                            Soft IT Care
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center">Part Time PHP Developer</Card.Title>
                                        <div>
                                          <Card.Text className="text-center style">
                                                <strong className="body-title-style ">3 months</strong>
                                                <br />
                                                <strong>Duration:</strong> March 2020 - May 2020
                                                <br/>
                                                <strong> Description </strong>
                                                <ul className="text-left">
                                                    <li>How <strong>Domain &amp; Hosting</strong>  works.</li>
                                                    <li>How <strong>Client's </strong> requirements are taken into account start planning your work.
                                                    </li>
                                                    <li>How to meet <strong>Deadline</strong>.</li>
                                                </ul>

                                          </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                             </Card>
                        </Tilt>
                        {/* Php */}
                    </Container>
             </Jumbotron>
        </div>
    )
}

export default Experience
