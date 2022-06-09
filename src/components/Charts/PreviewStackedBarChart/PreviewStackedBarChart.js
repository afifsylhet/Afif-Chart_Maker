import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

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



const PreviewStackedBarChart = () => {
    return (
        <div>
            <ResponsiveContainer width={'100%'} height={350} >
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Achievement" fill="#c70a80" stackId="a" style={{ zIndex: '2' }}>
                        <LabelList dataKey="Achievement" position="inside" style={{ zIndex: '1' }} />
                    </Bar>

                    <Bar dataKey="Target" fill="#fbcb0a" stackId="a" style={{ zIndex: '2' }}>
                        <LabelList dataKey="Target" position="inside" style={{ zIndex: '1' }} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer >
        </div>
    );
};

export default PreviewStackedBarChart;