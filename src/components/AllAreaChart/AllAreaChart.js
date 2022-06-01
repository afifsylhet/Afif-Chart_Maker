import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PreviewParcentAreaChart from '../Charts/PreviewParcentAreaChart/PreviewParcentAreaChart';
import PreviewSimpleAreaChart from '../Charts/PreviewSimpleAreaChart/PreviewSimpleAreaChart';
import PreviewStackedAreaChart from '../Charts/PreviewStackedAreaChart/PreviewStackedAreaChart';
import PreviewTinyAreaChart from '../Charts/PreviewTinyAreaChart/PreviewTinyAreaChart';

const AllAreaChart = () => {
    return (
        <div>
            <Container>
                <br />
                <h2 className="text-muted border-bottom text-center pb-2">Make Your Customized Area Chart</h2>
                <br />
                <Row>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-primary text-center'>Simple Area Chart</h2>
                            <PreviewSimpleAreaChart></PreviewSimpleAreaChart>
                            <Link to='/CreateSampleAreaChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn btn-dark w-100'>Make a Chart Like This</h4>
                            </Link>

                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-primary text-center'>Stacked Area Chart</h2>
                            <PreviewStackedAreaChart></PreviewStackedAreaChart>
                            <Link to='/CreateStackedAreaChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn btn-dark w-100'>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-primary text-center'>Tiny Area Chart</h2>
                            <PreviewTinyAreaChart></PreviewTinyAreaChart>
                            <Link to='/CreateTinyAreaChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn btn-dark w-100'>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-primary text-center'>Parcent Area Chart</h2>
                            <PreviewParcentAreaChart></PreviewParcentAreaChart>
                            <Link to='/CreateParcentAreaChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn btn-dark w-100'>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
        </div>
    );
};

export default AllAreaChart;