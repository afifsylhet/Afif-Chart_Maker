import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Legend } from 'recharts';

import * as htmlToImage from 'html-to-image';

const CreateParcentAreaChart = () => {

    const [name, setName] = useState('Hello')
    const [target, setTarget] = useState('')
    const [collection, setCollection] = useState('')
    const [distance, setDistance] = useState('')
    const [newInput, setNewInput] = useState([])
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
    const [data3, setData3] = useState('')
    const [collectionName, setCollectionName] = useState('')


    function getColor1(e) {
        const hello = e.target.value;
        setColor1(hello)
    }
    function getColor2(e) {
        const hello = e.target.value;
        setColor2(hello)
    }
    function getColor3(e) {
        const hello = e.target.value;
        setColor3(hello)
    }
    function data1Ref(e) {
        const hello = e.target.value;
        setData1(hello)
    }
    function data2Ref(e) {
        const hello = e.target.value;
        setData2(hello)
    }
    function data3Ref(e) {
        const hello = e.target.value;
        setData3(hello)
    }
    function collectionNameRef(e) {
        const hello = e.target.value;
        setCollectionName(hello)
    }


    const setup = {
        collectionName: collectionName,
        data1: data1,
        data2: data2,
        data3: data3,
        color1: color1,
        color2: color2,
        color3: color3,
    }

    const handleInput = e => {
        e.preventDefault();

        let newInputValue = {};

        newInputValue[collectionName] = name;
        newInputValue[data1] = parseInt(collection);
        newInputValue[data2] = parseInt(target);
        newInputValue[data3] = parseInt(distance);

        setNewInput([...newInput, newInputValue])
        e.target.reset();
    }

    const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

    const getPercent = (value, total) => {
        const ratio = total > 0 ? value / total : 0;
        // const ratio = total > 0 ? value / total : 0;

        return toPercent(ratio, 2);
    };

    const renderTooltipContent = (o) => {
        const { payload, label } = o;
        const total = payload.reduce((result, entry) => result + entry.value, 0);

        return (
            <div className="customized-tooltip-content">
                <p className="total">{`${label} (Total: ${total})`}</p>
                <ul className="list">
                    {payload.map((entry, index) => (
                        <li key={`item-${index}`} style={{ color: entry.color }}>
                            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

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
                <h2 className="text-muted border-bottom text-center pb-2">Make Your Customized Parcent Area Chart</h2>
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
                                    <input type="text" className="form-control rounded-pill" placeholder="Name of First Data Field (eg: product-1)" aria-label="Email" aria-describedby="basic-addon1" required onChange={data1Ref} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control rounded-pill" placeholder="Name of Second Data Field (eg: product-2)" aria-label="Email" aria-describedby="basic-addon1" required onChange={data2Ref} />
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control rounded-pill" placeholder="Name of Third Data Field (eg: product-3)" aria-label="Email" aria-describedby="basic-addon1" required onChange={data3Ref} />
                                </div>


                                <div className="mb-3 d-flex align-items-center">
                                    <label className='text-muted p-2 '>Please Select First Data Field Color</label>
                                    <input type="color" className="" aria-label="Email" aria-describedby="basic-addon1" required onChange={getColor1} />
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <label className='text-muted p-2 '>Please Select Second Data Field Color</label>
                                    <input type="color" className="" aria-label="Email" aria-describedby="basic-addon1" required onChange={getColor2} />
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <label className='text-muted p-2 '>Please Select Third Data Field Color</label>
                                    <input type="color" className="" aria-label="Email" aria-describedby="basic-addon1" required onChange={getColor3} />
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
                                <div className="input-group mb-3">
                                    <label className='p-2 fw-bold'>{setup.data3}</label>
                                    <input type="number" className="form-control rounded-pill" placeholder='Data Field' aria-label="Email" aria-describedby="basic-addon1" required onChange={event => setDistance(event.target.value)} />
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
                        <div style={{ maxWidth: '650px', }} className='container'>
                            <div id="element" ref={element} >
                                <ResponsiveContainer width={'100%'} height={350}  >

                                    <AreaChart
                                        data={newInput}
                                        margin={{
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                        stackOffset="expand"

                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey={setup.collectionName} />
                                        <YAxis tickFormatter={toPercent} />
                                        <Tooltip content={renderTooltipContent} />
                                        <Legend />
                                        <Area type="monotone" dataKey={setup.data1} stackId="1" fill={setup.color1} stroke={setup.color1}>
                                            <LabelList dataKey={setup.data1} position="inside" style={{ zIndex: '1' }} />
                                        </Area>
                                        <Area type="monotone" dataKey={setup.data2} stackId="1" fill={setup.color2} stroke={setup.color2}>
                                            <LabelList dataKey={setup.data2} position="inside" style={{ zIndex: '1' }} />
                                        </Area>
                                        <Area type="monotone" dataKey={setup.data3} fill={setup.color3} stackId="1" stroke={setup.color3}>
                                            <LabelList dataKey={setup.data3} position="inside" style={{ zIndex: '1' }} />
                                        </Area>
                                    </AreaChart>
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

export default CreateParcentAreaChart

