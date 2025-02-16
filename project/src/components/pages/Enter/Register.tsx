import React from 'react';
import logo from '@/assets/img/Logo.png'
import Image from 'next/image';

const Register = () => {
    return (
        <div className="passRecovery">
        <Image src={logo} alt="img" />
        <h1>Регистрация</h1>
        <div className="passRecovery--form">
          <input type="text" placeholder="+996 " />
          <input type="text" placeholder="Имя пользователя" />
          <input type="text" placeholder="Пароль" />
        </div>
        <div className="passRecovery--btn">
          <button>Назад</button>
          <button>Зарегистрироваться</button>
        </div>
      </div>
    );
};

export default Register;