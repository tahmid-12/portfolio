import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Profile from '../../assets/img/profile/dp.jpg'

import './about.style.css'

const About = () => {
    return (
        <div id='about'>
            <div className="about">
                    <h1 className="pt-3 text-center font-details pb-3">About Me</h1>

                        <Container>
                            <Row className="pt-3 pb-5 align-items-center">
                                <Col xs={12} md={6}>
                                    <Row className="justify-content-center mb-2 mr-2">
                                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid/>
                                    </Row>
                                </Col>

                                {/*About Me Section */}
                                <Col xs={12} md={6}>
                                    {/**Description Start*/}
                                     <Row className=" align-items-start p-2 my-details rounded">
                                        Hi there! I am <strong>&nbsp;Md. Tahmid Chowdhury</strong>
                                        <br />A passionate programmer, born and brought up in Bangladesh. I am a full stack Web Designer and Developer.
                                        <br />
                                        I specialize mainly in PHP, Javascript and Python.
                                        <br />
                                        My goal is to learn and grow as much as I can and also make myself capable for handling anything.
                                        <br />
                                        Apart from that, I am also  a photographer and also a sports enthusiast.
                                        <br />
                                        I love learning new technologies and solving problems to build better and scalable products.
                                     </Row>
                                     {/**Description Finish*/}

                                     {/**Button Start*/}
                                     <Row>
                                         <Col className="d-flex justify-content-center flex-wrap">
                                              <div>
                                                  <a href="#contact">
                                                      <Button className="m-2" variant="outline-primary">
                                                          Let's Talk
                                                      </Button>
                                                  </a>
                                              </div>

                                              <div>
                                                <a href="#resume" target="_blank" rel="noopener noreferrer">
                                                    <Button className="m-2" variant="outline-success">
                                                        My Resume
                                                    </Button>
                                                </a>
                                              </div>

                                              <div>
                                                <a href="https://github.com/tahmid-12" target="_blank" rel="noopener noreferrer">
                                                    <Button className="m-2" variant="outline-dark">
                                                        GitHub
                                                     </Button>
                                                </a>
                                              </div>

                                              <div>
                                                <a href="https://www.linkedin.com/in/md-tahmid-chowdhury-731737146/" target="_blank" rel="noopener noreferrer">
                                                    <Button className="m-2" variant="outline-info">
                                                      LinkedIn
                                                    </Button>
                                                </a>
                                              </div>
                                         </Col>
                                     </Row>
                                     {/**Button Finish*/}
                                </Col>
                            </Row>
                        </Container>

            </div>
        </div>
    )
}

export default About
