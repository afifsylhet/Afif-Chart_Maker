import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, AreaChart, Area } from 'recharts';


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


const PreviewSimpleAreaChart = () => {
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
                    <Area type="monotone" dataKey="Achievement" stroke="#8884d8" fill="#8884d8"  >
                        <LabelList dataKey="Achievement" position="top" />
                    </Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PreviewSimpleAreaChart;