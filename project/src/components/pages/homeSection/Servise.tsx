import React from "react";
import security from "@/assets/img/securety.png";
import home from "@//assets/img/home.png";
import clock from "@//assets/img/clock.png";
import family from "@/assets/img/family.png";
import mom_baby from "@/assets/img/mom-baby.png";
import Image from "next/image";
import sass from "@/components/pages/homeSection/Servise.module.scss";

const Servise = () => {
  return (
    <div className={sass.service1}>
      <div className="container">
        <div className={sass.service}>
          <h1>
            Сервис организован <span>просто</span> и удобно{" "}
          </h1>
          <div className={sass.content}>
            <div className={sass.cards}>
              <div className={sass.card}>
                <Image src={security} alt="img" />
                <h3>Информация о Вас будет конфиденциальной.</h3>
              </div>
              <div className={sass.card}>
                <Image src={home} alt="img" />
                <h3>Консультируйтесь, не выходя из дома.</h3>
              </div>
              <div className={sass.card}>
                <Image src={clock} alt="img" />
                <h3>Вы назначаете консультацию в удобное для Вас время.</h3>
              </div>

              <div className={sass.card}>
                <Image src={family} alt="img" />
                <h3>Не нужно стоять в очередях.</h3>
              </div>
            </div>
            <Image className={sass.img} src={mom_baby} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servise;
