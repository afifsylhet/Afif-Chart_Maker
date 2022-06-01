import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, AreaChart, Area } from 'recharts';


const data = [
    {
        name: 'January',
        Beg: 4000,
        Watch: 2400,
        Belt: 2400,
    },
    {
        name: 'February',
        Beg: 3000,
        Watch: 1398,
        Belt: 2210,
    },
    {
        name: 'March',
        Beg: 2000,
        Watch: 9800,
        Belt: 2290,
    },
    {
        name: 'April',
        Beg: 2780,
        Watch: 3908,
        Belt: 2000,
    },
    {
        name: 'May',
        Beg: 1890,
        Watch: 4800,
        Belt: 2181,
    },
];


const PreviewStackedAreaChart = () => {
    return (
        <div>
            <ResponsiveContainer width={'100%'} height={350} >
                <AreaChart data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" >
                    </XAxis>
                    <YAxis>
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="Beg" stackId="1" stroke="#8884d8" fill="#8884d8">
                        <LabelList dataKey="Watch" position="top" />
                    </Area>
                    <Area type="monotone" dataKey="Watch" stackId="1" stroke="#82ca9d" fill="#82ca9d">
                        <LabelList dataKey="Watch" position="top" />
                    </Area>
                    <Area type="monotone" dataKey="Belt" stackId="1" stroke="#ffc658" fill="#ffc658">
                        <LabelList dataKey="Watch" position="top" />
                    </Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PreviewStackedAreaChart;