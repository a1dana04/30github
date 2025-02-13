"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoCloseCircle } from 'react-icons/io5';
import styles from './Appointment.module.scss';
import doctorAvatar from '@/assets/img/аватарка.png';

const Appointment = () => {
  const [activeTab, setActiveTab] = useState('planned');

  const appointments = [
    {
      id: 1,
      date: 'Сегодня',
      time: '10:00-11:00',
      doctor: 'Светлана Александровна',
      specialty: 'Педиатр',
      status: 'active'
    },
    {
      id: 2,
      date: 'Вчера',
      time: '10:00-11:00',
      doctor: 'Светлана Александровна',
      specialty: 'Педиатр',
      status: 'inactive'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button 
          onClick={() => setActiveTab('planned')}
          className={`${styles.tab} ${activeTab === 'planned' ? styles.activeTab : ''}`}
        >
          Запланированные
        </button>
        <button 
          onClick={() => setActiveTab('completed')}
          className={`${styles.tab} ${activeTab === 'completed' ? styles.activeTab : ''}`}
        >
          Завершённые
        </button>
        <button 
          onClick={() => setActiveTab('all')}
          className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
        >
          Все
        </button>
      </div>

      {/* Headers */}
      <div className={styles.headers}>
        <div className={styles.header}>Дата</div>
        <div className={styles.header}>Специалист</div>
      </div>

      {/* Appointments List */}
      <div className={styles.appointmentsList}>
        {appointments.map((appointment) => (
          <div key={appointment.id} className={styles.appointmentCard}>
            <div className={styles.dateSection}>
              <div className={styles.date}>{appointment.date}</div>
              <div className={styles.time}>{appointment.time}</div>
            </div>
            
            <div className={styles.doctorSection}>
              <div className={styles.doctorName}>{appointment.doctor}</div>
              <div className={styles.specialty}>{appointment.specialty}</div>
            </div>
            
            <div className={styles.avatarSection}>
              <Image 
                src={doctorAvatar}
                alt="Фото врача"
                width={55}
                height={55}
                className={styles.avatar}
              />
            </div>
            
            <div className={styles.actions}>
              <button 
                className={styles.cancelButton}
                aria-label="Отменить"
              >
                <IoCloseCircle />
              </button>
              <button 
                className={`${styles.rescheduleButton} ${
                  appointment.status !== 'active' ? styles.disabled : ''
                }`}
                disabled={appointment.status !== 'active'}
              >
                Перенести
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;