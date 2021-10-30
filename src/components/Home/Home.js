import React from 'react';
import Hotel from './Hotel/Hotel';
import Slider from './Slider/Slider';
import './Home.css';
import Car from './Car/Car';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Hotel></Hotel>
            <Car></Car>
        </>
    );
};

export default Home;