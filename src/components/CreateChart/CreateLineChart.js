import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

import * as htmlToImage from 'html-to-image';

const CreateLineChart = () => {
    const [name, setName] = useState('Hello')
    const [target, setTarget] = useState(0)
    const [collection, setCollection] = useState(0)
    const [newInput, setNewInput] = useState([])
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
    const [collectionName, setCollectionName] = useState('')


    function getColor1(e) {
        const hello = e.target.value;
        setColor1(hello)
    }
    function getColor2(e) {
        const hello = e.target.value;
        setColor2(hello)
    }
    function data1Ref(e) {
        const hello = e.target.value;
        setData1(hello)
    }
    function data2Ref(e) {
        const hello = e.target.value;
        setData2(hello)
    }
    function collectionNameRef(e) {
        const hello = e.target.value;
        setCollectionName(hello)
    }


    const setup = {
        collectionName: collectionName,
        data1: data1,
        data2: data2,
        data3: 'Distance',
        color1: color1,
        color2: color2,
        // color1: '#8884d8',
        // color2: '#82ca9d',
        color3: '#ffc658'
    }

    const handleInput = e => {
        e.preventDefault();

        let newInputValue = {};

        newInputValue[collectionName] = name;
        newInputValue[data1] = parseInt(collection);
        newInputValue[data2] = parseInt(target);

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
        <div>
            <Container>
                <br />
                <h2 className="text-muted border-bottom text-center pb-2">Make Your Customized Simple Line Chart</h2>
                <br />
                <Row className='mb-4 g-5'>
                    <Col sm={12} md={12} lg={6}>
                        <div className='container text-center p-2 rounded'>
                            <h3 className='text-center text-muted p-2'> Instractions for making this chart..</h3>
                        </div>
                        <iframe src="https://www.loom.com/embed/991ee42d192a41b68b99541eed60e02d" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="instractions" style={{ width: '100%', height: '75%' }}>
                        </iframe>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <div className='container text-center p-4 rounded bg-light '>
                            <h3 className='text-center text-muted p-2'>Setup your customized chart</h3>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control rounded-pill" placeholder="Name of Collection (eg: Month Name)" aria-label="Email" aria-describedby="basic-addon1" required onChange={collectionNameRef} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control rounded-pill" placeholder="Name of First Data Field (eg: Target)" aria-label="Email" aria-describedby="basic-addon1" required onChange={data1Ref} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control rounded-pill" placeholder="Name of Second Data Field (eg: Achivement)" aria-label="Email" aria-describedby="basic-addon1" required onChange={data2Ref} />
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <label className='text-muted p-2 '>Please Select First Data Field Color</label>
                                    <input type="color" className="" aria-label="Email" aria-describedby="basic-addon1" required onChange={getColor1} />
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <label className='text-muted p-2 '>Please Select Second Data Field Color</label>
                                    <input type="color" className="" aria-label="Email" aria-describedby="basic-addon1" required onChange={getColor2} />
                                </div>


                                <input className='btn btn-outline-secondary w-100 rounded-pill p-2' type="reset" value="Reset Field" />
                            </form>
                        </div>

                    </Col>


                    <Col sm={12} md={12} lg={6}>
                        <div className='container text-center p-4 rounded bg-light '>
                            <h3 className='text-center text-muted p-2'>Please input your data</h3>

                            <form onSubmit={handleInput}>
                                <div className="input-group mb-3">
                                    <label className='p-2 fw-bold'>{setup.collectionName}</label>
                                    <input type="text" className="form-control rounded-pill" placeholder='data field name' aria-label="Email" aria-describedby="basic-addon1" required onChange={event => setName(event.target.value)} />
                                </div>

                                <div className="input-group mb-3">
                                    <label className='p-2 fw-bold'>{setup.data1}</label>
                                    <input type="number" className="form-control rounded-pill" placeholder='Data Field' aria-label="Email" aria-describedby="basic-addon1" required onChange={event => setTarget(event.target.value)} />
                                </div>

                                <div className="input-group mb-3">
                                    <label className='p-2 fw-bold'>{setup.data2}</label>
                                    <input type="number" className="form-control rounded-pill" placeholder='Data Field' aria-label="Email" aria-describedby="basic-addon1" required onChange={event => setCollection(event.target.value)} />
                                </div>
                                <br />
                                <button type='submit' className='btn btn-outline-secondary w-100 p-2 rounded-pill'>Submit</button>
                            </form>
                            <br />
                            <form>
                                <button type='submit' className='btn btn-outline-warning w-100 p-2 rounded-pill'>Reload, Start Again...</button>
                            </form>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div style={{ maxWidth: '650px', }} className='container bg-light'>
                            <div id="element" ref={element} >
                                <ResponsiveContainer width={'100%'} height={350} >
                                    <LineChart data={newInput}
                                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey={setup.collectionName} >
                                        </XAxis>
                                        <YAxis>
                                        </YAxis>
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey={setup.data1} stroke={setup.color1} strokeWidth={3} >
                                            <LabelList dataKey={setup.data1} position="top" />
                                        </Line>
                                        <Line type="monotone" dataKey={setup.data2} stroke={setup.color2} strokeWidth={3} >
                                            <LabelList dataKey={setup.data2} position="top" />
                                        </Line>
                                    </LineChart>
                                </ResponsiveContainer>
                            </div >
                            <br />

                            <h4 className="btn btn-primary w-100" onClick={downloadImage}>Download this chart</h4>
                        </div >
                    </Col >
                </Row >
            </Container >
        </div >
    );
};

export default CreateLineChart;