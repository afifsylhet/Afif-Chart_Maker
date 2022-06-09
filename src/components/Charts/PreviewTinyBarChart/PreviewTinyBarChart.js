import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, BarChart, Bar } from 'recharts';


const data = [
    {
        name: 'January',
        Sale: 2400,
    },
    {
        name: 'February',
        Sale: 2210,
    },
    {
        name: 'March',
        Sale: 2290,
    },
    {
        name: 'April',
        Sale: 2000,
    },
    {
        name: 'May',
        Sale: 2181,
    },
];

const PreviewTinyBarChart = () => {
    return (
        <div>
            <ResponsiveContainer width={'100%'} height={350} >
                <BarChart data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" >
                    </XAxis>
                    <YAxis>
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sale" fill="#fbcb0a">
                        <LabelList dataKey="Sale" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PreviewTinyBarChart;