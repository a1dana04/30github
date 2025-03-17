"use client"
import React from 'react';
import logo from '../../../assets/img/logomedilink.png';
import styles from './Login.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Login = () => {
    const router = useRouter();
    return (    
        <div className={styles.login}>
            <div className={styles.login__title}>
                <Image src={logo} alt="img" />
                <h3>Вход</h3>
            </div>
            <div className={styles.login__inputs}>
                <input type="text" placeholder='Имя пользователя' />
                <input type="text" placeholder='Пароль' />
                <a href="#">Забыли пароль?</a>
            </div>
            <div className={styles.login__btn}>
                <button type="button" onClick={() => router.push("/")}>Назад</button>
                <button>Войти</button>
            </div>
        </div>
    );
};

export default Login;