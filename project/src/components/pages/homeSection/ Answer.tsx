"use client"
import React, { useState, useRef, RefCallback } from "react";
import styles from "@/components/pages/homeSection/ Answer.module.scss";

// Определяем интерфейс для вопроса
interface QuestionItem {
  question: string;
  answer: string;
}

// Массив вопросов и ответов
const questions: QuestionItem[] = [
  {
    question: "Что такое онлайн-консультация?",
    answer:
      "Онлайн-консультация — это простая и удобная возможность получить квалифицированную медицинскую помощь прямо из вашего дома. Просто выберите врача и обсудите свои вопросы через видеозвонок, чат или телефон. Мы здесь, чтобы помочь вам заботиться о вашем здоровье!",
      
  },

  {
    question: "Что такое онлайн-консультация?",
    answer:
      "Онлайн-консультация — это простая и удобная возможность получить квалифицированную медицинскую помощь прямо из вашего дома. Просто выберите врача и обсудите свои вопросы через видеозвонок, чат или телефон. Мы здесь, чтобы помочь вам заботиться о вашем здоровье!",
      
  },

  {
    question: "Что такое онлайн-консультация?",
    answer:
      "Онлайн-консультация — это простая и удобная возможность получить квалифицированную медицинскую помощь прямо из вашего дома. Просто выберите врача и обсудите свои вопросы через видеозвонок, чат или телефон. Мы здесь, чтобы помочь вам заботиться о вашем здоровье!",
      
  },


  {
    question: "Что такое онлайн-консультация?",
    answer:
      "Онлайн-консультация — это простая и удобная возможность получить квалифицированную медицинскую помощь прямо из вашего дома. Просто выберите врача и обсудите свои вопросы через видеозвонок, чат или телефон. Мы здесь, чтобы помочь вам заботиться о вашем здоровье!",
      
  },

  {
    question: "Что такое онлайн-консультация?",
    answer:
      "Онлайн-консультация — это простая и удобная возможность получить квалифицированную медицинскую помощь прямо из вашего дома. Просто выберите врача и обсудите свои вопросы через видеозвонок, чат или телефон. Мы здесь, чтобы помочь вам заботиться о вашем здоровье!",
      
  },


  {
    question: "Что такое онлайн-консультация?",
    answer:
      "Онлайн-консультация — это простая и удобная возможность получить квалифицированную медицинскую помощь прямо из вашего дома. Просто выберите врача и обсудите свои вопросы через видеозвонок, чат или телефон. Мы здесь, чтобы помочь вам заботиться о вашем здоровье!",
      
  },

  {
    question: "Что такое онлайн-консультация?",
    answer:
      "Онлайн-консультация — это простая и удобная возможность получить квалифицированную медицинскую помощь прямо из вашего дома. Просто выберите врача и обсудите свои вопросы через видеозвонок, чат или телефон. Мы здесь, чтобы помочь вам заботиться о вашем здоровье!",
      
  },
  // ... остальные вопросы остаются теми же
];

const Answer: React.FC = () => {
  // Состояние для хранения открытого вопроса
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  
  // Ссылки на элементы контента
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  // Функция установки ссылки
  const setRef = (index: number): RefCallback<HTMLDivElement> => (element) => {
    contentRefs.current[index] = element;
  };

  // Обработчик клика по заголовку
  const handleToggle = (index: number): void => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className={styles.answer1}>
      <div className="container">
        <h1>Ответы на частые вопросы</h1>
        <div className={styles.answer}>
          {questions.map((item, index) => (
            <div className={styles.accordionItem} key={index}>
              <div 
                className={`${styles.accordionHeader} ${openQuestion === index ? styles.open : ''}`}
                onClick={() => handleToggle(index)}
              >
                <span className={styles.question}>{item.question}</span>
                <span className={styles.icon}>{openQuestion === index ? "-" : "+"}</span>
              </div>
              <div 
                className={`${styles.accordionContent} ${openQuestion === index ? styles.expanded : ''}`}
                ref={setRef(index)}
                style={{
                  maxHeight: openQuestion === index 
                    ? `${contentRefs.current[index]?.scrollHeight || 0}px` 
                    : "0px"
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answer;