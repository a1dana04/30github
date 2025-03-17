import React from 'react';

import Edu from './Edu';
import Review from '../homeSection/Review';
import ProfilDoctor from './ProfilDoctor';
import SectionComent from './SectionComent';

const ProfilDoctorPage = () => {
    return (
        <div className='container'>
            <ProfilDoctor/>
            <Edu/>
            <SectionComent/>
            
        </div>
    );
};

export default ProfilDoctorPage;