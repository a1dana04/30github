"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import kav from "@/assets/img/kavychka.png";
import foto1 from "@/assets/img/Ellipse1.png";
import foto2 from "@/assets/img/Ellipse2.png";
import foto3 from "@/assets/img/Ellipse3.png";
import styles from "../homeSection/Review.module.scss";

const reviews = [
  {
    date: "17.04.2024",
    text: "Сервис на высоком уровне! Каждая консультация была информативной, врач всегда уделял достаточно времени и внимания.",
    name: "Виктория",
    role: "Пациент",
    photo: foto1,
  },
  {
    date: "09.04.2024",
    text: "Сервис на высоком уровне! Каждая консультация была информативной, врач всегда уделял достаточно времени и внимания.",
    name: "Василий",
    role: "Пациент",
    photo: foto2,
  },
  {
    date: "17.04.2024",
    text: "Сервис на высоком уровне! Каждая консультация была информативной, врач всегда уделял достаточно времени и внимания.",
    name: "Наталья",
    role: "Пациент",
    photo: foto3,
  },

  {
    date: "17.04.2024",
    text: "Сервис на высоком уровне! Каждая консультация была информативной, врач всегда уделял достаточно времени и внимания.",
    name: "Наталья",
    role: "Пациент",
    photo: foto3,
  },

  {
    date: "17.04.2024",
    text: "Сервис на высоком уровне! Каждая консультация была информативной, врач всегда уделял достаточно времени и внимания.",
    name: "Наталья",
    role: "Пациент",
    photo: foto3,
  },

  {
    date: "17.04.2024",
    text: "Сервис на высоком уровне! Каждая консультация была информативной, врач всегда уделял достаточно времени и внимания.",
    name: "Виктория",
    role: "Пациент",
    photo: foto1,
  },
];

const Review = () => {
  return (
    <div className={styles.review1}>
      <div className="container">
        <h1>Что говорят наши пациенты</h1>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={styles.from}>
                <h6>{review.date}</h6>
                <p>{review.text}</p>
                <div className={styles.image}>
                  <Image src={kav} alt="Кавычка" />
                </div>
                <div className={styles.profil}>
                  <Image src={review.photo} alt={review.name} />
                  <div className={styles.text1}>
                    <h6>{review.name}</h6>
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
