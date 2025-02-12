"use client";
import React from "react";
import Image from "next/image";
import s from "./DoctorCard.module.scss";
import avatar from "../../../../../assets/img/doctor-ava.png";
// @ts-ignore
import  StarRatings  from "react-star-ratings";
import { useRouter } from "next/navigation";





const DoctorCard = ({ className = "" }) => {
  const router = useRouter();
  const rating = 4.5;


  return (
    <div className={`${s.doctorCard} ${className}`}>
      <div className={s.doctorCard__about}>
        <div className={s.doctorCard__about__text}>
          <h2>Светлана Александровна</h2>
          <h3>Педиатр, 5 лет опыта</h3>
          <div className={s.doctorCard__about__text__rate}>
            <span>{rating}</span>
            <StarRatings
              rating={rating}
              starRatedColor="#ffd700"
              numberOfStars={5}
              starDimension="24px"
              starSpacing="2px"
            />
          </div>
        </div>
        <Image src={avatar} alt="img" />
      </div>
      <div className={s.doctorCard__times}>
        <h2>10:00 - 11:00</h2>
        <h3>Сегодня</h3>
        <h1>1 200 сом</h1>
      </div>
      <button  onClick={() => router.push(`/profil-doctor`)}>
        Перейти к портфолио
      </button>
    </div>
  );
};

export default DoctorCard;
