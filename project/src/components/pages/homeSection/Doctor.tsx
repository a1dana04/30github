import React from "react";
import doctor from "@/assets/img/doctor.png";
import books from "@/assets/img/books.png";
import bag from "@/assets/img/bag.png";
import like from "@/assets/img/like.png";
import Image from "next/image";
import sass from "../homeSection/Doctor.module.scss";

const criteria = [
  {
    img: books,
    title: "Образование",
    description: `Проводим проверку дипломов: 
                  наличие высшего образования в области медицины 
                  или сертификатов о переподготовке.`,
  },
  {
    img: bag,
    title: "Опыт работы",
    description: `Принимаем на рассмотрение специалистов с опытом работы,
                  подтвержденным не менее чем четырёхлетним стажем.`,
  },
  {
    img: like,
    title: "Рекомендации",
    description: `Рассматриваем специалистов с положительными отзывами 
                  и рекомендациями от предыдущих мест работы.`,
  },
];

const Doctor = () => {
  return (
    <div className={sass.doctor1}>
      <div className="container">
        <div className={sass.doctor}>
          <Image src={doctor} alt="img" />
          <h1>
            MediLink уделяет особое внимание отбору <br />
            специалистов, чтобы больше людей получило <br />
            профессиональную помощь
          </h1>
          <hr />
          <h2>Как мы отбираем специалистов</h2>
        </div>
        <div className={sass.edu}>
          {criteria.map((el, index) => (
            <div key={index} className={sass.books}>
              <Image src={el.img} alt={el.title} />
              <h1>{el.title}</h1>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
