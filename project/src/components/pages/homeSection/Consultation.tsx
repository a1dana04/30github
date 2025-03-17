"use client"
import React from 'react';
import one from "@/assets/img/one-consul.png";
import two from "@/assets/img/two-comsul.png";
import three from "@/assets/img/three-consul.png";
import Image from 'next/image';
import sass from "../homeSection/Consultation.module.scss";
import { useRouter } from 'next/navigation';

const Consultation = () => {
    const router = useRouter()
    return (
        <div className={sass.consul1}>
            <div className="container">
                <h1>Как начать консультацию в <span>MediLink</span></h1>
                <div className={sass.consul}>
                    <div className={sass.card}>
                        <Image src={one} alt="img" />
                        <h4>Выберите способ связи</h4>
                        <p>Зайдите в профиль врача, выберите <br />
                          удобный способ связи: WhatsApp или <br />
                           Telegram.</p>
                    </div>

                    <div className={sass.card1}>
                        <Image src={two} alt="img" />
                        <h4>Свяжитесь с врачом</h4>
                     
                        <p>Напишите врачу в выбранном мессенджере <br />
                         и уточните детали консультации.</p>
                    </div>

                    <div className={sass.card2}>
                        <Image src={three} alt="img" />
                        <h4>Пройдите онлайн-консультацию</h4>
                        <p>Получите ссылку на Google Meet от <br />
                         врача и пройдите онлайн-консультацию.</p>
                    </div>
                </div>
                <button onClick={() => router.push("/choose-doctor")}>Выбрать врача</button>
            </div>
        </div>
    );
};

export default Consultation;