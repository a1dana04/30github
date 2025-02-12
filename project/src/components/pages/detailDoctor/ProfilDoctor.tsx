"use client"
import React from "react";
import profilD from "@/assets/img/profil-d-img.png";
import {
  IoChatboxEllipsesOutline,
  IoVideocamOutline,
  IoCallOutline,
} from "react-icons/io5";
import Star from "./Star";
import Edu from "./Edu";
import Image from "next/image";
import sass from "./ProfilDoctor.module.scss";
import { useRouter } from "next/navigation";

// Данные вынесены наверх
const doctorInfo = {
  name: "Петрова Светлана Александровна",
  specialization: "Педиатр",
  description: `
    Диагностика симптомов и заболеваний. Обсуждение вопросов вакцинации и предоставление рекомендаций 
    по питанию и профилактике заболеваний. Оценка психоэмоционального состояние ребенка, советы 
    по воспитанию и направление к узким специалистам при необходимости.
  `,
  details: {
    experience: "5 лет",
    consultations: "500 +",
    rating: "4.8",
    duration: "60 мин.",
    price: "1 200 сом",
    contacts: [
      { icon: IoCallOutline, title: "Звонок" },
      { icon: IoChatboxEllipsesOutline, title: "Чат" },
      { icon: IoVideocamOutline, title: "Видео" },
    ],
  },
  //   buttons: ["Только спросить", "Записаться"],
};

const ProfilDoctor = () => {
  const router = useRouter();
  return (
    <div className={sass.profilDoctor1}>
    <div className="container">
      <div className={sass.profilDoctor}>
        <Image src={profilD} alt="img" />
        <div className={sass.text}>
          <h1>{doctorInfo.name}</h1>
          <span>{doctorInfo.specialization}</span>
          <h6>{doctorInfo.description}</h6>
          <hr />

          <div className={sass.detal}>
            <div className={sass.key}>
              <p>Стаж:</p>
              <p>Проведено консультаций:</p>
              <p>Рейтинг:</p>
              <p>Доступные виды связи:</p>
              <p>Длительность:</p>
            </div>
            <div className={sass.value}>
              <p>{doctorInfo.details.experience}</p>
              <p>{doctorInfo.details.consultations}</p>
              <div className={sass.star1}>
                <p>{doctorInfo.details.rating}</p>
                <div className={sass.block}>
                  <Star />
                </div>
              </div>
              <p>
                {doctorInfo.details.contacts.map(({ icon: Icon }, index) => (
                  <span key={index}>
                    <Icon />
                  </span>
                ))}
              </p>
              <p>{doctorInfo.details.duration}</p>
            </div>

            <div className={sass.money}>
              <h1>{doctorInfo.details.price}</h1>
            </div>
          </div>

          <div className={sass.btn}>
            <button onClick={() => router.push("/personal-account")} className={sass.btn1}>
              Только спросить
            </button>
            <button className={sass.btn2}> Записаться</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )

 
};

export default ProfilDoctor;
