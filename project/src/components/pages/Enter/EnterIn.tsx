// components/EnterIn/EnterIn.jsx
"use client"
import Image from 'next/image';
import styles from './EnterIn.module.scss';
import { useRouter } from 'next/navigation';
import logomedilink from "@/assets/img/logomedilink.png"
const EnterIn = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <div className={styles.enterIn}>
      <div className={styles.head}>
        <h3 className={styles.activeTab}>Я пациент</h3>
        <h3 className={styles.inactiveTab}>Я консультант</h3>
      </div>

      <div className={styles.main}>
        <div className={styles.logoWrapper}>
          <Image
            src={logomedilink}
            alt="Medilink logo"
            width={200}
            height={60}
            priority
            className={styles.logo}
          />
        </div>

        <h1 className={styles.title}>Присоединяйтесь к нам!</h1>
        <p className={styles.description}>
          Заботьтесь о своем здоровье с профессиональными врачами онлайн. 
          Получите консультацию, не выходя из домаa!
        </p>
      </div>

      <button 
        className={styles.button} 
        onClick={handleLogin}
      >
        Вход
      </button>
      
      <button 
        className={`${styles.button} ${styles.buttonOutline}`}
        onClick={handleRegister}
      >
        Регистрация
      </button>
    </div>
  );
};

export default EnterIn;