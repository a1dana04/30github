// components/EnterDate/EnterDate.jsx
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './EnterDate.module.scss';

const EnterDate = () => {
  const router = useRouter();

  return (
    <div className={styles.enterDate}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/images/enter-date.png"
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
              src="/images/avatar.png"
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