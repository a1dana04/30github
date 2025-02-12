import React from "react";
import sass from "../personal-account/Appointment.module.scss";
import Image from "next/image";
import doc from "@/assets/img/аватарка.png"
import { IoCloseCircle } from "react-icons/io5";

const Appointment = () => {
  return (
    <div className={sass.zapis}>
      <div className={sass.btn}>
        <button className={sass.btn1}>Запланированные</button>
        <button className={sass.btn2}>Завершённые</button>
        <button className={sass.btn3}>Все</button>
      </div>

      <div className={sass.date}>
        <h1>Дата</h1>
        <h1>Специалист</h1>
      </div>

      <div className={sass.list}>
        <div className={sass.zapis1}>
          <h1>Сегодня</h1>
          <span>10:00-11:00</span>
        </div>
       
          <div className={sass.name}>
            <h1>Светлана Александровна</h1>
            <span>Педиатр</span>
          </div>

          <div className={sass.foto}>
         <Image src={doc} alt="img" />

          </div>

          <div className={sass.btnn}>
            <button className={sass.btnn1}><IoCloseCircle /></button>
            <button className={sass.btnn2}>Перенести</button>

          </div>
        </div>

        
      </div>
  
  );
};

export default Appointment;
