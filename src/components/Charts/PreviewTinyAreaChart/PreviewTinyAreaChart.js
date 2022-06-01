import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, AreaChart, Area } from 'recharts';


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


const PreviewTinyAreaChart = () => {
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
                    <Area type="monotone" dataKey="Sale" stroke="#ffc658" fill="#ffc658"  >
                        <LabelList dataKey="Sale" position="top" />
                    </Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PreviewTinyAreaChart;