
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" bg='primary'>
                <Container fluid>
                    <Navbar.Brand href="#">AFIF CHART MAKER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/home' style={{ textDecoration: 'none' }}>
                                <Nav.Link href="#action1">Home</Nav.Link>
                            </Link>

                            <Link to='/lineChart' style={{ textDecoration: 'none' }}>
                                <Nav.Link href="#action1">Line Chart</Nav.Link>
                            </Link>
                            <Link to='/areaChart' style={{ textDecoration: 'none' }}>
                                <Nav.Link href="#action1">Area Chart</Nav.Link>
                            </Link>
                            <Link to='/barChart' style={{ textDecoration: 'none' }}>
                                <Nav.Link href="#action1">Bar Chart</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};




export default Navigation;