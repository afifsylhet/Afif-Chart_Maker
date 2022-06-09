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
                <div className="mb-3 border-bottom text-center pb-2" >
                    <h2 className="d-inline text-center pb-2" style={{
                        color: '#FBCB0A', fontFamily: 'poppins', fontWeight:
                            '500'
                    }}>Make Your </h2>
                    <h2 className=" d-inline text-center pb-2" style={{
                        color: '#c70a80', fontFamily: 'poppins', fontWeight:
                            '500'
                    }}> Customized Area Chart</h2>
                </div>
                <br />

                <Row>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Simple Area Chart</h2>
                            <PreviewSimpleAreaChart></PreviewSimpleAreaChart>
                            <Link to='/CreateSampleAreaChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>
                            </Link>

                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Stacked Area Chart</h2>
                            <PreviewStackedAreaChart></PreviewStackedAreaChart>
                            <Link to='/CreateStackedAreaChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Tiny Area Chart</h2>
                            <PreviewTinyAreaChart></PreviewTinyAreaChart>
                            <Link to='/CreateTinyAreaChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Parcent Area Chart</h2>
                            <PreviewParcentAreaChart></PreviewParcentAreaChart>
                            <Link to='/CreateParcentAreaChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>
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