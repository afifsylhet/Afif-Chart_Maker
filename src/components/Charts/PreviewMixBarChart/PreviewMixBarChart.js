import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
    {
        name: 'January',
        Watch: 4000,
        Ring: 2400,
        Bat: 2400,
    },
    {
        name: 'February',
        Watch: 3000,
        Ring: 1398,
        Bat: 2210,
    },
    {
        name: 'March',
        Watch: 2000,
        Ring: 9800,
        Bat: 2290,
    },
    {
        name: 'April',
        Watch: 2780,
        Ring: 3908,
        Bat: 2000,
    },
    {
        name: 'May',
        Watch: 1890,
        Ring: 4800,
        Bat: 2181,
    },
];


const PreviewMixBarChart = () => {
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
                    <Bar dataKey="Ring" stackId="a" fill="#8884d8">
                        <LabelList dataKey="Ring" position="inside" style={{ zIndex: '1' }} />
                    </Bar>
                    <Bar dataKey="Bat" stackId="a" fill="#82ca9d">
                        <LabelList dataKey="Bat" position="inside" style={{ zIndex: '1' }} />
                    </Bar>
                    <Bar dataKey="Watch" fill="#ffc658" stackId="a">
                        <LabelList dataKey="Watch" position="inside" style={{ zIndex: '1' }} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PreviewMixBarChart;