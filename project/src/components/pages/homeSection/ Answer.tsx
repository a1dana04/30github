import React from "react";
import sass from "@/components/pages/homeSection/ Answer.module.scss";

const questions = [
  {
    question: "Что такое онлайн-консультация?",
    answer:
      "Онлайн-консультация — это простая и удобная возможность получить квалифицированную медицинскую помощь прямо из вашего дома. Просто выберите врача и обсудите свои вопросы через видеозвонок, чат или телефон. Мы здесь, чтобы помочь вам заботиться о вашем здоровье!",
  },
  {
    question: "Какие специалисты доступны для онлайн-консультаций?",
    answer:
      "Онлайн-консультации по видео могут проводить разные специалисты: дерматолог, педиатр, гинеколог, терапевт и другие.",
  },
  {
    question: "Как записаться на консультацию?",
    answer:
      "Как записаться к врачу по направлению через сайт Госуслуги. Перейдите в форму записи на приём, выберите направление, удобные дату и время, нажмите «Записаться» и дождитесь подтверждения.",
  },
  {
    question: "Нужно ли регистрироваться на сайте?",
    answer:
      "Выслушивает жалобы пациента, оценивает состояние кожи, заполняет медицинскую карту и составляет программу назначений.",
  },
  {
    question: "Как проходит консультация?",
    answer:
      "Выслушиваются жалобы пациента, оценивается состояние кожи, заполняется медицинская карта, составляется программа назначений, даются рекомендации по уходу.",
  },
  {
    question: "Можно ли получить рецепт на лекарства во время консультации?",
    answer:
      "Медицинская карта содержит персональные и медицинские данные пациента, включая информацию о лечении и состоянии здоровья.",
  },
  {
    question: "Как защищены мои личные данные?",
    answer:
      "Медицинская карта содержит персональные и медицинские данные, которые тщательно защищены и конфиденциальны.",
  },
  {
    question: "Что делать, если у меня возникли проблемы с подключением?",
    answer:
      "Если вы не можете получать почту или просматривать веб-страницы, проверьте подключение к сети и устраните проблемы с Интернетом1.",
  },
  {
    question: "Как отменить или перенести консультацию?",
    answer:
      "Если нужно перенести или отменить консультацию, пожалуйста, предупредите как можно раньше, желательно за сутки.",
  },
];

const Answer = () => {
  return (
    <div className={sass.answer1}>
      <div className="container">
        <h1>Ответы на частые вопросы</h1>
        <div className={sass.answer}>
          {questions.map((item, index) => (
            <details key={index}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answer;
