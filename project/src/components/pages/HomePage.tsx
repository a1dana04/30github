import React from 'react';
import HomeSection from './homeSection/HomeSection';
import Experience from './homeSection/Experience';
import Quations from './homeSection/Quations';
import Doctor from './homeSection/Doctor';
import Consultation from './homeSection/Consultation';
import Servise from './homeSection/Servise';
import Review from './homeSection/Review';
import Answer from './homeSection/ Answer';

const HomePage = () => {
    return (
        <div>
            <HomeSection/>
            <Experience/>
            <Quations/>
            <Doctor/>
            <Consultation/>
            <Servise/>
            <Review/>
            <Answer/>
        </div>
    );
};

export default HomePage;