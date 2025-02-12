import React from "react";
import s from "./ChooseDoctor.module.scss";
import SelectDoctor from "./components/selectDoctor/SelectDoctor";
import SearchDoctor from "./components/searchDoctor/SearchDoctor";
import DoctorCard from "./components/doctorCard/DoctorCard";

const ChooseDoctorPage = () => {
  return (
    <div className={s.pageDoctor}>
      <div className="container">
        <SelectDoctor />
        <SearchDoctor/>
        <div className={s.cards}>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
        </div>
      </div>
    </div>
  );
};

export default ChooseDoctorPage;
