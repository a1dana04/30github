"use client"
// components/pages/personal-account/ChatWindow.tsx
import React, { useState } from "react";
import sass from "./DocChatWindow.module.scss";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";


interface Doctor {
  name: string;
  specialty: string;
  image: string;
  online: boolean;
}

interface Message {
  id: number;
  text: string;
  time: string;
  isDoctor: boolean;
}

interface ChatWindowProps {
  doctor: Doctor;
  onBack: () => void;
}

const DocChatWindow: React.FC<ChatWindowProps> = ({ doctor, onBack }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Следуйте рекомендациям, и вашему малышу станет лучше!",
      time: "10:57",
      isDoctor: true,
    },
    {
      id: 2,
      text: "Я вас поняла, спасибо большое!",
      time: "10:57",
      isDoctor: false,
    },
  ]);

  const sendMessage = (): void => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: message,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isDoctor: false,
        },
      ]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  return (
    <div className={sass.chatWindow}>
      {/* Заголовок чата */}
      <div className={sass.chatHeader}>
        <button onClick={onBack} className={sass.backButton}>
          <IoArrowBack />
        </button>
        <div className={sass.doctorInfo}>
          <div className={sass.avatar}>
            <Image 
              src={doctor.image} 
              alt={doctor.name}
              width={40}  // Добавлены обязательные пропсы для Image
              height={40}
            />
            {doctor.online && (
              <span className={sass.onlineStatus}>
                <FaCircle />
              </span>
            )}
          </div>
          <div className={sass.info}>
            <h2>{doctor.name}</h2>
            <span>{doctor.specialty}</span>
          </div>
        </div>
      </div>

      {/* Сообщения */}
      <div className={sass.messageList}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${sass.message} ${
              msg.isDoctor ? sass.doctorMessage : sass.userMessage
            }`}
          >
            <p>{msg.text}</p>
            <span className={sass.messageTime}>{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Ввод сообщения */}
      <div className={sass.messageInput}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Отправьте сообщение"
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default DocChatWindow;