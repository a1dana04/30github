import React from 'react';
import one from "@/assets/img/one-consul.png"
import two from "@/assets/img/two-comsul.png"
import three from "@/assets/img/three-consul.png"
import Image from 'next/image';
import sass from "../homeSection/Consultation.module.scss"

const Consultation = () => {
    return (
        <div className={sass.consul1}>
            <div className="container">
                <h1>Как начать консультацию в <span>MediLink </span> </h1>
                <div className={sass.consul}>
                    <div className={sass.card}>
                        <Image src={one} alt="img" />
                        <h4>Подберите подходящего <br />
                         специалиста</h4>
                         <p>Изучите анкеты и выберите <br />
                          специалиста, с которым хотите <br />
                          проконсультроваться</p>

                    </div>

                    <div className={sass.card1}>
                        <Image src={two} alt="img" />
                        <h4>Выберите дату и время <br />
                         первой консультации</h4>
                         <p>Зарегистрируйтесь на MediLink через <br />
                          номер телефона и оплатите <br />
                           консультацию</p>

                    </div>


                    <div className={sass.card2}>
                        <Image src={three} alt="img" />
                        <h4>В личном кабинете <br />
                         управляйте распианием</h4>
                         <p>Выбирайте дату и время, переносите <br />
                          консультации</p>

                    </div>

                   

                </div>
                <button>Подобрать специалиста</button>
            </div>
            
        </div>
    );
};

export default Consultation;