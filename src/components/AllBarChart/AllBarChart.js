import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PreviewSimpleBarChart from '../Charts/PreviewSimpleBarChart/PreviewSimpleBarChart';
import PreviewTinyBarChart from '../Charts/PreviewTinyBarChart/PreviewTinyBarChart';
import PreviewStackedBarChart from '../Charts/PreviewStackedBarChart/PreviewStackedBarChart';
import PreviewMixBarChart from '../Charts/PreviewMixBarChart/PreviewMixBarChart';
import { Link } from 'react-router-dom';

const AllBarChart = () => {
    return (
        <div>
            <Container>
                <br />
                <div className="mb-3 border-bottom text-center pb-2" >
                    <h2 className="d-inline text-center pb-2" style={{
                        color: '#c70a80', fontFamily: 'poppins', fontWeight:
                            '500'
                    }}>Make Your </h2>
                    <h2 className=" d-inline text-center pb-2" style={{
                        color: '#FBCB0A', fontFamily: 'poppins', fontWeight:
                            '500'
                    }}> Customized Bar Chart</h2>
                </div>

                <br />
                <Row>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Tiny Bar Chart</h2>
                            <PreviewTinyBarChart></PreviewTinyBarChart>
                            <Link to='/CreateTinyBarChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>
                            </Link>

                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Simple Bar Chart</h2>
                            <PreviewSimpleBarChart></PreviewSimpleBarChart>
                            <Link to="/CreateSimpleBarChart" style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Stacked Bar Chart</h2>
                            <PreviewStackedBarChart></PreviewStackedBarChart>
                            <Link to="/CreateStackBarChart" style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Mix Bar Chart</h2>
                            <PreviewMixBarChart></PreviewMixBarChart>
                            <Link to="/CreateMixBarChart" style={{ textDecoration: 'none' }}>
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

export default AllBarChart;