import React from "react";
import kav from "@/assets/img/kavychka.png";
import foto1 from "@/assets/img/Ellipse1.png";
import foto2 from "@/assets/img/Ellipse2.png";
import foto3 from "@/assets/img/Ellipse3.png";
import Image from "next/image";
import sass from "../homeSection/Review.module.scss";

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
];

const Review = () => {
  return (
    <div className={sass.review1}>
      <div className="container">
        <h1>Что говорят наши пациенты</h1>
        <div className={sass.review}>
          {reviews.map((review, index) => (
            <div key={index} className={sass.from}>
              <h6>{review.date}</h6>
              <p>{review.text}</p>
              <div className={sass.image}>
                <Image src={kav} alt="img" />
              </div>
              <div className={sass.profil}>
                <Image src={review.photo} alt="" />
                <div className={sass.text1}>
                  <h6>{review.name}</h6>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
