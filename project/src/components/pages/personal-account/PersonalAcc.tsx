import React from "react";
import sass from "../personal-account/PersonalAcc.module.scss";
import Link from "next/link";
import { LuClipboardList } from "react-icons/lu";
import { BsChatRightText } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { PiChatDotsBold } from "react-icons/pi";

const PersonalAcc = () => {
  return (
    <div className={sass.acc}>
      <div className={sass.acc1_nav}>
        <h1>Личный кабинет</h1>
        <div className={sass.zapis}>
          <span>
            <LuClipboardList />
          </span>
          <Link href={"/personal-account"}>Записи</Link>
        </div>
        <div className={sass.chat}>
          <span>
            <PiChatDotsBold />
          </span>
          <Link href={"/personal-account/chats"}>Чаты</Link>
        </div>
      </div>

      <div className={sass.lagout}>
        <span>
          <MdOutlineExitToApp />
        </span>
        <Link href={"/personal-account/chats"}>Выйти</Link>
      </div>
    </div>
  );
};

export default PersonalAcc;
