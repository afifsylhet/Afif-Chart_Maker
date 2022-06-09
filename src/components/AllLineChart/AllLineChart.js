import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PreviewDashedLineChart from '../Charts/PreviewDashedLineChart/PreviewDashedLineChart';
import PreviewLineChart from '../Charts/PreviewLineChart/PreviewLineChart';
import PreviewTinyLineChart from '../Charts/PreviewTinyLineChart/PreviewTinyLineChart';
import PreviewVarticleLineChart from '../Charts/PreviewVarticleLineChart/PreviewVarticleLineChart';

const AllLineChart = () => {
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
                        color: '#C70A80', fontFamily: 'poppins', fontWeight:
                            '500'
                    }}> Customized Line Chart</h2>
                </div>
                <br />

                <Row>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Simple Line Chart</h2>
                            <PreviewLineChart></PreviewLineChart>
                            <Link to="/CreateSimpleLineChart" style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>                            </Link>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Tiny Line Chart</h2>
                            <PreviewTinyLineChart></PreviewTinyLineChart>
                            <Link to="/CreateTinyLineChart" style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>                            </Link>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Dashed  Line Chart</h2>
                            <PreviewDashedLineChart></PreviewDashedLineChart>
                            <Link to="/CreateDashedLineChart" style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>                            </Link>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-center' style={{ color: '#C70A80', fontFamily: 'poppins' }}>Varticle Line Chart</h2>
                            <PreviewVarticleLineChart></PreviewVarticleLineChart>
                            <Link to="/CreateVarticleLineChart" style={{ textDecoration: 'none' }}>
                                <h4 className='btn w-100' style={{ backgroundColor: '#c70a80', fontFamily: 'poppins', color: 'white' }}>Make a Chart Like This</h4>                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
        </div>
    );
};

export default AllLineChart;