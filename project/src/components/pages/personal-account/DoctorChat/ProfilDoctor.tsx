"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProfilDoctor.module.scss';

// Типы для рейтинга
type StarRating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

// Типы для дней недели
type WeekDay = 'ПН1' | 'ВТ' | 'СР' | 'ЧТ' | 'ПТ' | 'СБ' | 'ВС';

// Типы для врача
interface Education {
  period: string;
  description: string;
}

interface WorkExperience {
  period: string;
  description: string;
}

interface Doctor {
  fullName: string;
  specialization: string;
  about: string;
  yearsOfExperience: number;
  contactMethods: {
    phone: boolean;
    chat: boolean;
    video: boolean;
    email: boolean;
  };
  schedule: {
    days: Record<WeekDay, boolean>;
    hours: string[];
  };
  education: Education[];
  workExperience: WorkExperience[];
  rating: StarRating;
}

// Моковые данные доктора для использования до получения реальных данных
const mockDoctorData: Doctor = {
  fullName: 'Петрова Светлана Александровна',
  specialization: 'Педиатр',
  about: 'Диагностика симптомов и заболеваний. Обсуждение вопросов вакцинации и предоставление рекомендаций.',
  yearsOfExperience: 5,
  contactMethods: {
    phone: true,
    chat: true,
    video: true,
    email: false,
  },
  schedule: {
    days: {
      'ПН': true,
      'ВТ': false,
      'СР': true,
      'ЧТ': false,
      'ПТ': true,
      'СБ': false,
      'ВС': false,
    },
    hours: ['14:00', '16:00', '18:00'],
  },
  education: [
    {
      period: '1999-2005',
      description: 'Кыргызский государственный медицинский университет, квалификация - Педиатр',
    },
    {
      period: '2006-2008',
      description: 'Клиническая ординатура по педиатрии, Национальный центр здоровья детей',
    },
    {
      period: '2017-2019',
      description: 'Магистратура по педиатрии, Кыргызский государственный медицинский университет',
    },
  ],
  workExperience: [
    {
      period: '2019-2021',
      description: 'Врач-ассистент, детская больница "Радуга"',
    },
    {
      period: '2021-2022',
      description: 'Врач-педиатр, детская поликлиника "Здоровье"',
    },
    {
      period: '2022-2024',
      description: 'Врач общей практики, Медицинский центр "Семейный врач"',
    },
  ],
  rating: 4.8,
};

const ProfilDoctor: React.FC = () => {
  // Состояние для данных врача, начально используем моковые данные
  const [doctor, setDoctor] = useState<Doctor>(mockDoctorData);
  const [loading, setLoading] = useState(false);
  
  // useEffect для загрузки данных с бэкенда в будущем
  useEffect(() => {
    // Эта функция будет вызываться для загрузки данных врача с бэкенда
    const fetchDoctorData = async () => {
      try {
        setLoading(true);
        // Здесь будет API-запрос, когда бэкенд будет готов
        // Пример:
        // const response = await fetch('/api/doctor-profile');
        // const data = await response.json();
        // setDoctor(data);
        
        // Пока используем моковые данные
        // Можете раскомментировать следующую строку для имитации задержки загрузки
        // await new Promise(resolve => setTimeout(resolve, 1000));
        
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке данных врача:', error);
        setLoading(false);
      }
    };

    // Закомментируйте следующую строку, если не хотите сейчас делать запрос
    // fetchDoctorData();
  }, []);

  const [editMode, setEditMode] = useState<{
    fullName: boolean;
    specialization: boolean;
    about: boolean;
    yearsOfExperience: boolean;
    education: boolean;
    workExperience: boolean;
  }>({
    fullName: false,
    specialization: false,
    about: false,
    yearsOfExperience: false,
    education: false,
    workExperience: false,
  });

  // Обработчики для редактирования
  const handleEdit = (field: keyof typeof editMode) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleChange = (field: keyof Doctor, value: any) => {
    setDoctor({ ...doctor, [field]: value });
  };

  const handleSave = () => {
    // Здесь был бы API-запрос для сохранения изменений
    console.log('Сохраненные данные:', doctor);
    // Сбрасываем все режимы редактирования
    setEditMode({
      fullName: false,
      specialization: false,
      about: false,
      yearsOfExperience: false,
      education: false,
      workExperience: false,
    });
  };

  // Рендер звездного рейтинга
  const renderStars = (rating: StarRating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className={styles.starFull}>★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className={styles.starHalf}>★</span>);
      } else {
        stars.push(<span key={i} className={styles.starEmpty}>★</span>);
      }
    }

    return (
      <div className={styles.stars}>
        {stars}
        <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Показываем индикатор загрузки, если данные загружаются
  if (loading) {
    return <div className={styles.loading}>Загрузка данных врача...</div>;
  }

  return (
    <div className={styles.doctorProfile}>
      <div className={styles.header}>
        <div className={styles.avatarContainer}>
          <Image 
            src="/doctor-avatar.jpg" 
            alt={doctor.fullName} 
            width={100} 
            height={100} 
            className={styles.avatar}
          />
          <button className={styles.editAvatar}>
            <Image src="/edit-icon.svg" alt="Редактировать" width={16} height={16} />
          </button>
        </div>

        <div className={styles.doctorInfo}>
          <h1 className={styles.doctorName}>{doctor.fullName}</h1>
          <p className={styles.doctorSpecialization}>{doctor.specialization}</p>
          {renderStars(doctor.rating)}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>ФИО</h3>
        <div className={styles.sectionContent}>
          {editMode.fullName ? (
            <input
              type="text"
              value={doctor.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={styles.input}
            />
          ) : (
            <p>{doctor.fullName}</p>
          )}
          <button 
            className={styles.editButton}
            onClick={() => handleEdit('fullName')}
          >
            <Image src="/edit-icon.svg" alt="Редактировать" width={16} height={16} />
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Специальность</h3>
        <div className={styles.sectionContent}>
          {editMode.specialization ? (
            <input
              type="text"
              value={doctor.specialization}
              onChange={(e) => handleChange('specialization', e.target.value)}
              className={styles.input}
            />
          ) : (
            <p>{doctor.specialization}</p>
          )}
          <button 
            className={styles.editButton}
            onClick={() => handleEdit('specialization')}
          >
            <Image src="/edit-icon.svg" alt="Редактировать" width={16} height={16} />
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>О себе</h3>
        <div className={styles.sectionContent}>
          {editMode.about ? (
            <textarea
              value={doctor.about}
              onChange={(e) => handleChange('about', e.target.value)}
              className={styles.textarea}
            />
          ) : (
            <p>{doctor.about}</p>
          )}
          <button 
            className={styles.editButton}
            onClick={() => handleEdit('about')}
          >
            <Image src="/edit-icon.svg" alt="Редактировать" width={16} height={16} />
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Стаж работы</h3>
        <div className={styles.sectionContent}>
          {editMode.yearsOfExperience ? (
            <input
              type="number"
              value={doctor.yearsOfExperience}
              onChange={(e) => handleChange('yearsOfExperience', parseInt(e.target.value))}
              className={styles.input}
            />
          ) : (
            <p>{doctor.yearsOfExperience} лет</p>
          )}
          <button 
            className={styles.editButton}
            onClick={() => handleEdit('yearsOfExperience')}
          >
            <Image src="/edit-icon.svg" alt="Редактировать" width={16} height={16} />
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Виды связи</h3>
        <div className={styles.contactMethods}>
          <button className={`${styles.contactButton} ${doctor.contactMethods.phone ? styles.active : ''}`}>
            <Image src="/phone-icon.svg" alt="Телефон" width={20} height={20} />
          </button>
          <button className={`${styles.contactButton} ${doctor.contactMethods.chat ? styles.active : ''}`}>
            <Image src="/chat-icon.svg" alt="Чат" width={20} height={20} />
          </button>
          <button className={`${styles.contactButton} ${doctor.contactMethods.video ? styles.active : ''}`}>
            <Image src="/video-icon.svg" alt="Видео" width={20} height={20} />
          </button>
          <button className={`${styles.contactButton} ${doctor.contactMethods.email ? styles.active : ''}`}>
            <Image src="/email-icon.svg" alt="Email" width={20} height={20} />
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Расписание</h3>
        <div className={styles.scheduleContent}>
          <div className={styles.weekDays}>
            {Object.entries(doctor.schedule.days).map(([day, isActive]) => (
              <div 
                key={day} 
                className={`${styles.weekDay} ${isActive ? styles.active : ''}`}
              >
                {day}
              </div>
            ))}
            <button className={styles.editButton}>
              <Image src="/edit-icon.svg" alt="Редактировать" width={16} height={16} />
            </button>
          </div>
          <div className={styles.hours}>
            {doctor.schedule.hours.map((hour) => (
              <div key={hour} className={styles.hour}>
                {hour}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Образование</h3>
        {doctor.education.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <p className={styles.educationPeriod}>{edu.period}</p>
            <p className={styles.educationDescription}>{edu.description}</p>
            <button className={styles.editButton}>
              <Image src="/edit-icon.svg" alt="Редактировать" width={16} height={16} />
            </button>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Опыт работы</h3>
        {doctor.workExperience.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <p className={styles.experiencePeriod}>{exp.period}</p>
            <p className={styles.experienceDescription}>{exp.description}</p>
            <button className={styles.editButton}>
              <Image src="/edit-icon.svg" alt="Редактировать" width={16} height={16} />
            </button>
          </div>
        ))}
      </div>

      <button 
        className={styles.saveButton}
        onClick={handleSave}
      >
        Сохранить изменения
      </button>
    </div>
  );
};

export default ProfilDoctor;