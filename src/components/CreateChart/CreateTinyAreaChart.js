import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList } from 'recharts';

import * as htmlToImage from 'html-to-image';

const CreateTinyAreaChart = () => {

    const [name, setName] = useState('Hello')
    const [target, setTarget] = useState('')
    const [newInput, setNewInput] = useState([])
    const [color1, setColor1] = useState('')
    const [data1, setData1] = useState('')
    const [collectionName, setCollectionName] = useState('')


    function getColor1(e) {
        const hello = e.target.value;
        setColor1(hello)
    }

    function data1Ref(e) {
        const hello = e.target.value;
        setData1(hello)
    }

    function collectionNameRef(e) {
        const hello = e.target.value;
        setCollectionName(hello)
    }


    const setup = {
        collectionName: collectionName,
        data1: data1,
        color1: color1,

    }

    const handleInput = e => {
        e.preventDefault();

        let newInputValue = {};

        newInputValue[collectionName] = name;
        newInputValue[data1] = parseInt(target);
        setNewInput([...newInput, newInputValue])
        e.target.reset();
    }

    const element = useRef(null);

    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(element.current);

        // download image
        const link = document.createElement('a');
        link.download = "html-to-img.png";
        link.href = dataUrl;
        link.click();
    }


    return (
        <div style={{ backgroundColor: '#37E2D5', fontFamily: 'poppins' }}>
            <Container>
                <br />

                <div className='pb-2 text-center'>
                    <h2 className="d-inline" style={{ color: '#c70A80' }}>Make Your Customized </h2>
                    <h2 className="d-inline" style={{ color: '#590696' }}> Tiny Area Chart</h2>
                </div>
                <hr />
                <br />
                <Row className='mb-4 g-5'>
                    <Col sm={12} md={12} lg={6}>
                        <div className='container h-100 text-center pt-2 ps-5 pe-5, pb-5 rounded bg-light shadow-lg' style={{ fontFamily: 'poppins' }}>
                            <div className='container text-center rounded'>
                                <h3 className='text-center p-2' style={{ color: '#C70A80' }}> Instractions for making chart</h3>
                            </div>
                            <hr />
                            <iframe src="https://www.loom.com/embed/991ee42d192a41b68b99541eed60e02d" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="instractions" style={{ width: '100%', height: '75%' }}>
                            </iframe>
                        </div>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <div className='container text-center pt-2 ps-5 pe-5, pb-5 rounded bg-light shadow-lg' style={{ color: '#fbcb0a', fontFamily: 'poppins' }}>
                            <h3 className='text-center p-2'>Setup your customized chart</h3>
                            <hr />
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control rounded-pill" placeholder="Name of Collection (eg: Month Name)" aria-label="Email" aria-describedby="basic-addon1" required onChange={collectionNameRef} />
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control rounded-pill" placeholder="Name of First Data Field (eg: product-1)" aria-label="Email" aria-describedby="basic-addon1" required onChange={data1Ref} />
                                </div>


                                <div className="mb-3 d-flex align-items-center">
                                    <label className='text-muted p-2 '>Please Select First Data Field Color</label>
                                    <input type="color" className="" aria-label="Email" aria-describedby="basic-addon1" required onChange={getColor1} />
                                </div>

                                <input className='btn w-100 rounded-pill p-2' type="reset" value="Reset Field" style={{ backgroundColor: '#C70A80', color: 'white', fontWeight: '500' }} />
                            </form>
                        </div>
                    </Col>



                    <Col sm={12} md={12} lg={6}>
                        <div className='container text-center h-100 pt-2 ps-5 pe-5, pb-5 rounded bg-light shadow-lg' style={{ color: '#C70A80', fontFamily: 'poppins' }}>
                            <h3 className='text-center p-2' style={{ color: '#FBCB0A' }}>Please input your data</h3>
                            <hr />

                            <form onSubmit={handleInput}>
                                <div className="input-group mb-3">
                                    <label className='p-2 fw-bold'>{setup.collectionName}</label>
                                    <input type="text" className="form-control rounded-pill" placeholder='data field name' aria-label="Email" aria-describedby="basic-addon1" required onChange={event => setName(event.target.value)} />
                                </div>



                                <div className="input-group mb-3">
                                    <label className='p-2 fw-bold'>{setup.data1}</label>
                                    <input type="number" className="form-control rounded-pill" placeholder='Data Field' aria-label="Email" aria-describedby="basic-addon1" required onChange={event => setTarget(event.target.value)} />
                                </div>
                                <br />
                                <button type='submit' className='btn w-100 p-2 rounded-pill' style={{ backgroundColor: '#C70A80', color: 'white', fontWeight: '500' }}>Submit</button>
                            </form>
                            <br />
                            <form>
                                <button type='submit' className='btn w-100 p-2 rounded-pill' style={{ backgroundColor: '#FBCB0A', fontWeight: '500' }}>Reload, Start Again...</button>
                            </form>
                        </div>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <div style={{ maxWidth: '650px', }} className='container bg-light p-5'>

                            <div id="element" ref={element} >
                                <ResponsiveContainer width={'100%'} height={350} >
                                    <AreaChart
                                        data={newInput}
                                        margin={{
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey={setup.collectionName} />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Area type="monotone" dataKey={setup.data1} stackId="a" fill={setup.color1} stroke={setup.color1}>
                                            <LabelList dataKey={setup.data1} position="outside" style={{ zIndex: '1' }} />
                                        </Area>
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div >
                            <br />

                            <button className="btn w-100 rounded-pill" onClick={downloadImage} style={{ backgroundColor: '#c70A80', fontWeight: '500', color: 'white', fontFamily: 'poppins' }}>Download this chart</button>
                        </div >
                    </Col >
                </Row >
            </Container >
            <br />
        </div>
    );
};

export default CreateTinyAreaChart;