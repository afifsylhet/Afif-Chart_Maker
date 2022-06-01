import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-primary">
            <div className="p-3">
                <h2 className="text-white text-center"> Thank you for visiting Afif Chart Maker</h2>
            </div>
            <hr />
            <Container>
                <Row className="g-5 p-2">
                    <Col className="p-3" sm={12} md={6} lg={4}>
                        <h5 className="text-white pb-2 fw-bold"> Quick Links</h5>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <h6 className="text-white fw-light"> Home</h6>
                        </Link>
                        <Link to="/barChart" style={{ textDecoration: 'none' }}>
                            <h6 className="text-white fw-light"> Bar Chart</h6>
                        </Link>
                        <Link to="/areaChart" style={{ textDecoration: 'none' }}>
                            <h6 className="text-white fw-light"> Area Chart</h6>
                        </Link>
                        <Link to="/lineChart" style={{ textDecoration: 'none' }}>
                            <h6 className="text-white fw-light"> Line Chart</h6>
                        </Link>

                    </Col>

                    <Col className="p-3 " sm={12} md={6} lg={4}>
                        <h5 className="text-white pb-2 fw-bold"> Contact Me</h5>
                        <h6 className="text-white fw-light"> Afif Ahmed</h6>
                        <h6 className="text-white fw-light pb-2"> Baluchor, Sylhet, Bangladesh</h6>
                        <h6 className="text-white fw-light pb-2"> Whats App: +880-1739-945728</h6>
                        <h6 className="text-white fw-light pb-2"> Email: afif.ahmed@yahoo.com</h6>
                    </Col>

                    <Col className="p-3" sm={12} md={6} lg={4}>
                        <h5 className="text-white pb-2 fw-bold"> My Recent Work</h5>
                        <h6 className="text-white fw-light pb-2"> Dream House Real Estate </h6>
                        <h6 className="text-white fw-light pb-2"> SAK Accission</h6>
                        <h6 className="text-white fw-light pb-2"> Best Treadmill</h6>
                        <h6 className="text-white fw-light pb-2"> Better Life Mental Care</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;