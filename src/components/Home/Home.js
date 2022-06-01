import React from 'react';
import Banner from '../Banner/Banner';
import AllLineChart from '../AllLineChart/AllLineChart';
import AllAreaChart from '../AllAreaChart/AllAreaChart';
import AllBarChart from '../AllBarChart/AllBarChart';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBarChart></AllBarChart>
            <AllLineChart></AllLineChart>
            <AllAreaChart></AllAreaChart>
            <br />
        </div>
    );
};

export default Home;