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
                <h2 className="text-muted border-bottom text-center pb-2">Make Your Customized Bar Chart</h2>
                <br />
                <Row>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-primary text-center'>Tiny Bar Chart</h2>
                            <PreviewTinyBarChart></PreviewTinyBarChart>
                            <Link to='/CreateTinyBarChart' style={{ textDecoration: 'none' }}>
                                <h4 className='btn btn-dark w-100'>Make a Chart Like This</h4>
                            </Link>

                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-primary text-center'>Simple Bar Chart</h2>
                            <PreviewSimpleBarChart></PreviewSimpleBarChart>
                            <Link to="/CreateSimpleBarChart" style={{ textDecoration: 'none' }}>
                                <h4 className='btn btn-dark w-100'>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-primary text-center'>Stacked Bar Chart</h2>
                            <PreviewStackedBarChart></PreviewStackedBarChart>
                            <Link to="/CreateStackBarChart" style={{ textDecoration: 'none' }}>
                                <h4 className='btn btn-dark w-100'>Make a Chart Like This</h4>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-3'>
                        <div className='p-2 border'>
                            <h2 className='text-primary text-center'>Mix Bar Chart</h2>
                            <PreviewMixBarChart></PreviewMixBarChart>
                            <Link to="/CreateMixBarChart" style={{ textDecoration: 'none' }}>
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

export default AllBarChart;