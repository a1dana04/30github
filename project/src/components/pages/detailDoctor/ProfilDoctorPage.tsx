import React from 'react';

import Edu from './Edu';
import Review from '../homeSection/Review';
import ProfilDoctor from './ProfilDoctor';

const ProfilDoctorPage = () => {
    return (
        <div className='container'>
            <ProfilDoctor/>
            <Edu/>
            <Review />
            
        </div>
    );
};

export default ProfilDoctorPage;