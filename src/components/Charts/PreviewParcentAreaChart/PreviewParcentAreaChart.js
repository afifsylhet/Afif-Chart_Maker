import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

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


const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

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


const PreviewParcentAreaChart = () => {
    return (
        <div>
            <ResponsiveContainer width={'100%'} height={350} >
                <AreaChart data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    stackOffset="expand">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={toPercent} />
                    <Tooltip content={renderTooltipContent} />
                    <Area type="monotone" dataKey="Beg" stackId="1" stroke="#FBCB0A" fill="#FBCB0A">
                        <LabelList dataKey="Beg" position="top" />
                    </Area>
                    <Area type="monotone" dataKey="Watch" stackId="1" stroke="#C70A80" fill="#C70A80">
                        <LabelList dataKey="Watch" position="top" />
                    </Area>
                    <Area type="monotone" dataKey="Belt" stackId="1" stroke="#590696" fill="#590696">
                        <LabelList dataKey="Belt" position="top" />
                    </Area>
                </AreaChart>
            </ResponsiveContainer >
        </div >
    );
};

export default PreviewParcentAreaChart;