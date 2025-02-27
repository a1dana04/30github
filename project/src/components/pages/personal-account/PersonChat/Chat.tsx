"use client"
// components/pages/personal-account/Chat.tsx
import React, { useState } from "react";
import sass from "./Chat.module.scss";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import foto1 from "@/assets/img/Subtract.png";
import { FaCircle } from "react-icons/fa6";
import ChatWindow from "./ChatWindow";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Светлана Александровна",
      specialty: "Педиатр",
      image: foto1,
      online: true,
      lastMessage: "Следуйте рекомендациям, и вашему малышу станет лучше!",
      time: "10:58",
      unread: 2
    }
  ];

  return (
    <div className={sass.chatContainer}>
      {!selectedChat ? (
        // Список чатов
        <div className={sass.chat}>
          <div className={sass.input1}>
            <input type="text" placeholder="Введите имя специалиста" />
            <button>
              <span>
                <CiSearch />
              </span>
            </button>
          </div>
          
          {doctors.map((doctor:any) => (
            <div 
              key={doctor.id}
              className={sass.chat_doc1}
              onClick={() => setSelectedChat(doctor)}
            >
              <div className={sass.chat_doc}>
                <div className={sass.circle}>
                  <Image src={doctor.image} alt="img" />
                  {doctor.online && (
                    <p>
                      <FaCircle />
                    </p>
                  )}
                </div>

                <div className={sass.name1}>
                  <h1>{doctor.name}</h1>
                  <span>{doctor.specialty}</span>
                </div>
              </div>
              
              <div className={sass.data}>
                <h3>{doctor.time}</h3>
                {doctor.unread > 0 && <p>{doctor.unread}</p>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Окно чата
        <ChatWindow 
          doctor={selectedChat}
          onBack={() => setSelectedChat(null)}
        />
      )}
    </div>
  );
};

export default Chat;