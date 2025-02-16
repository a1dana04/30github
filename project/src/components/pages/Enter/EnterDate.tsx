
"use client"
import Image from 'next/image';
import enterDateImg from '@/assets/img/enter-date.png';
import doctorava from '@/assets/img/doctor-ava.png';
import styles from './EnterDate.module.scss';
import { useRouter } from 'next/navigation';

const EnterDate = () => {
  const router = useRouter();

  return (
    <div className={styles.enterDate}>
      <div className={styles.imageWrapper}>
        <Image 
          src={enterDateImg}
          alt="Date selection"
          width={500}
          height={300}
          className={styles.mainImage}
          priority
        />
      </div>
      
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <h2 className={styles.timeHeading}>
            10:00 - 11:00
            <span>Сегодня</span>
          </h2>

          <div className={styles.avatarWrapper}>
            <Image 
              src={doctorava}
              alt="Doctor avatar"
              width={60}
              height={60}
              className={styles.avatar}
            />
          </div>
        </div>

        <div className={styles.cardCenter}>
          <h2 className={styles.doctorInfo}>
            Светлана Александровна
            <span>Педиатр, 5 лет опыта</span>
          </h2>
          <h1 className={styles.price}>1 200 сом</h1>
        </div>

        <button 
          className={styles.portfolioButton}
          onClick={() => router.push('/doctor-portfolio')}
        >
          Перейти к портфолио
        </button>
      </div>
    </div>
  );
};

export default EnterDate;