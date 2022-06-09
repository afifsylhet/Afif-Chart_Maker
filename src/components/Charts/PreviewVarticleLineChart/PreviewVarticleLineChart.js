import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';


const data = [
    {
        name: 'January',
        Target: 4000,
        Achievement: 2400,
        amt: 2400,
    },
    {
        name: 'February',
        Target: 3000,
        Achievement: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        Target: 2000,
        Achievement: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        Target: 2780,
        Achievement: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        Target: 1890,
        Achievement: 4800,
        amt: 2181,
    },
];


const PreviewVarticleLineChart = () => {
    return (
        <div>
            <ResponsiveContainer width={'100%'} height={350} >
                <LineChart data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Achievement" stroke="#C70A80" >
                        <LabelList dataKey="Achievement" position="top" />
                    </Line>
                    <Line type="monotone" dataKey="Target" stroke="#FBCB0A" >
                        <LabelList dataKey="Target" position="top" />
                    </Line>
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
};

export default PreviewVarticleLineChart;