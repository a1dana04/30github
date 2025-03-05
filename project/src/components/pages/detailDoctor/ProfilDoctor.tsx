"use client"
import React, { useState } from "react";
import profilD from "@/assets/img/profil-d-img.png";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import Star from "./Star";
import Image from "next/image";
import sass from "./ProfilDoctor.module.scss";
import { useRouter } from "next/navigation";
import ModalConsul from "@/components/ui/modalConsul/ModalConsul";
import axios from "axios";
import { toast } from "react-toastify";

// Добавим интерфейс для данных формы
interface TelegramFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  source: string; // Добавим источник обращения
}

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
    contactMethods: {
      telegram: true,
      whatsapp: true,
      chat: true
    }
  },
};

const ProfilDoctor = () => {
  const router = useRouter();
  const [modalType, setModalType] = useState<"form" | "success" | null>(null);

  const handleOpenModal = () => {
    setModalType("form");
  };

  const handleCloseModal = (type?: "success" | null) => {
    setModalType(type || null);
  };

  // Функция отправки в Telegram
  const submitToTelegram = async (data: TelegramFormData) => {
    try {
      const my_id = -1002445685524;
      const token = `7324192230:AAGCoUCL_LTlPSQm3UcacYA_JjwyT3fTGfg`;
      const api_url = `https://api.telegram.org/bot${token}/sendMessage`;

      const userInfo = {
        chat_id: my_id,
        parse_mode: "HTML",
        text: `Заявка с профиля врача:\n\nИсточник: Профиль доктора\nИмя: ${data.firstName}\nФамилия: ${data.lastName}\nТел номер: ${data.phone}\nПочта: ${data.email}\nАдрес: ${data.country}`,
      };

      await axios.post(api_url, userInfo);

      // Показываем успешное сообщение
      toast.success("Ваш заказ успешно отправлен!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Переключаем модалку на успешный статус
      setModalType("success");
    } catch (error) {
      console.error("Ошибка при отправке данных в Telegram:", error);
      toast.error(
        "Произошла ошибка при отправке данных. Попробуйте снова."
      );
    }
  };

  return (
    <>
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
                  <p>Виды связи:</p>
                  <p>Длительность1:</p>
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
                
                  <div className={sass.contactMethods}>
                    <button 
                      onClick={handleOpenModal} 
                      className={`${sass.contactButton} ${doctorInfo.details.contactMethods.telegram ? sass.active : ''}`}
                    >
                      <FaTelegramPlane />
                    </button>
                    <button className={`${sass.contactButton} ${doctorInfo.details.contactMethods.whatsapp ? sass.active : ''}`}>
                      <RiWhatsappFill />
                    </button>
                    <button className={`${sass.contactButton} ${doctorInfo.details.contactMethods.chat ? sass.active : ''}`}>
                      <IoChatboxEllipsesSharp />
                    </button>
                  </div>
                
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

      {modalType && (
        <ModalConsul 
          type={modalType} 
          onClose={handleCloseModal} 
          onSubmit={submitToTelegram}  // Передаем функцию отправки
        />
      )}
    </>
  );
};

export default ProfilDoctor;