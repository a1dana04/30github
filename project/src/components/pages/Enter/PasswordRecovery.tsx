// pages/password-recovery.tsx
"use client"
import { FC } from 'react';
import Image from 'next/image';
import styles from './PasswordRecovery.module.scss';
import { useRouter } from 'next/navigation';
import logomedilink from "@/assets/img/logomedilink.png"

const PasswordRecovery: FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleLogin = () => {
    // Добавьте здесь логику для входа
    router.push('/login');
  };

  return (
    <div className={styles.passRecovery}>
      <Image 
        src={logomedilink}
        alt="MediLink Logo"
        width={200}
        height={60}
        priority
      />
      <h1>Восстановление пароля</h1>
      
      <div className={styles.form}>
        <input 
          type="tel" 
          placeholder="+996 "
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <input 
          type="text" 
          placeholder="Код активации"
        />
        <input 
          type="password" 
          placeholder="Новый пароль"
        />
      </div>

      <div className={styles.buttons}>
        <button 
          onClick={handleBack}
          className={styles.backButton}
        >
          Назад
        </button>
        <button 
          onClick={handleLogin}
          className={styles.loginButton}
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default PasswordRecovery;