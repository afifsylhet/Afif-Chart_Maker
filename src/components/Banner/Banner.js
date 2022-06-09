import TypeWriterEffect from 'react-typewriter-effect';
import './Banner.css'
import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <div>
            <Container>
                <br />
                <Row className='g-5'>
                    <Col sm={12} md={12} lg={6}>
                        <div>
                            <br />
                            <h2 style={{ color: '#c70a80', fontFamily: 'poppins' }}>BACKGROUND OF </h2>
                            <h2 style={{ color: '#FBCB0A', fontFamily: 'poppins' }}>AFIF CHART MAKER ... </h2>
                            <br />
                            <p className="mb-3 fs-5 "> I worked as a Management Information System Officer and data visualization was one of my regular work. That's why I had need to make lots of charts and graphs.
                            </p>

                            <p className="mb-3 fs-5 ">
                                But there is a problem faced by like I have created a chart by using MS Excel and copy the chart in to MS Power Point then the chart looks fine but when I change the Excel data my PowerPoint chart is changed and also it has default background-color. That's why sometimes my  PowerPoint looks ugly because of the chart's fixed background color.
                            </p>
                            <p className="mb-3 fs-5 ">
                                To overcome the above circumstance I decided to make a custom chart maker. And eventually, I make this chart maker.
                            </p>
                        </div >
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/XFVntDx/Chart-1.png"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/nM3NznC/Chart-2.png"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/w63z27D/Chart-3.png"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/fDtky3H/Chart-4.png"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/sVXXdnf/Chart-5.png"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <br />
        </div >
    );
};
export default Banner;