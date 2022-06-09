import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#FBCB0A', fontFamily: 'poppins', }}>
            <div className="p-3">
                <h2 className="text-center" style={{ color: 'black' }}> Thank you for visiting Afif Chart Maker</h2>
            </div>
            <hr />
            <Container>
                <Row className="g-5 p-2">
                    <Col className="p-3" sm={12} md={6} lg={4}>
                        <h5 className="pb-2" style={{ fontWeight: '500', color: 'black' }}> Quick Links</h5>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <p style={{ fontWeight: '300', color: 'black' }}> Home</p>
                        </Link>
                        <Link to="/barChart" style={{ textDecoration: 'none' }}>
                            <p style={{ fontWeight: '300', color: 'black' }}> Bar Chart</p>
                        </Link>
                        <Link to="/areaChart" style={{ textDecoration: 'none' }}>
                            <p style={{ fontWeight: '300', color: 'black' }}> Area Chart</p>
                        </Link>
                        <Link to="/lineChart" style={{ textDecoration: 'none' }}>
                            <p style={{ fontWeight: '300', color: 'black' }}> Line Chart</p>
                        </Link>

                    </Col>

                    <Col className="p-3 " sm={12} md={6} lg={4}>
                        <h5 className="pb-2" style={{ fontWeight: '500', color: 'black' }}> Contact Me</h5>
                        <p style={{ fontWeight: '300', color: 'black' }}> Afif Ahmed</p>
                        <p style={{ fontWeight: '300', color: 'black' }}> Baluchor, Sylhet, Bangladesh</p>
                        <p style={{ fontWeight: '300', color: 'black' }}> Whats App: +880-1739-945728</p>
                        <p style={{ fontWeight: '300', color: 'black' }}> Email: afif.ahmed@yahoo.com</p>
                    </Col>

                    <Col className="p-3" sm={12} md={6} lg={4}>
                        <h5 className="pb-2" style={{ fontWeight: '500', color: 'black' }}> My Recent Work</h5>
                        <p style={{ fontWeight: '300', color: 'black' }}> Dream House Real Estate </p>
                        <p style={{ fontWeight: '300', color: 'black' }}> SAK Accission</p>
                        <p style={{ fontWeight: '300', color: 'black' }}> Best Treadmill</p>
                        <p style={{ fontWeight: '300', color: 'black' }}> Better Life Mental Care</p>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Footer;