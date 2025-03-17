"use client";
import React from "react";
import glavImg from "@/assets/img/hero-img.png";
import Image from "next/image";
import Link from "next/link";
import sass from "../../pages/homesection/HomeSection.module.scss";
import { useGetMainPageQuery } from "@/redux/api/product";

const HomeSection = () => {
  const { data} = useGetMainPageQuery();
  // console.log(data);
  

  return (
    <div className={sass.glavnyi1}>
      <div className="container">
        <div className={sass.glavnyi}>
          <div className={sass.text}>
            <h1>
              Консультация с врачом онлайн: <br />
              <span>
              улучшить качество здоровья и жизни
              </span>
            </h1>
            <div className={sass.parag}>
              <div className={sass.butt}>
                <button className={sass.btn1}>Взрослому</button>
                <button className={sass.btn2}>Ребёнку</button>
              </div>
              <p>от 1 200 сом за консультацию</p>
              <Link href={"/choose-doctor"}>
                <button className={sass.btn3}>Подобрать специалиста</button>
              </Link>
            </div>
          </div>

          <div className={sass.img}>
            <Image src={glavImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
