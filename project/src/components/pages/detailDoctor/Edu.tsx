import React from 'react';
import sass from "./Edu.module.scss";

const educationData = [
    "1999-2005 - Кыргызский государственный медицинский университет, квалификация - Лечебное дело.",
    "2006-2008 - Клиническая ординатура по педиатрии, Национальный центр здоровья детей, Бишкек.",
    "2017-2019 - Магистратура по педиатрии, Кыргызский государственный медицинский университет, Бишкек.",
     "2017-2019 - Магистратура по педиатрии, Кыргызский государственный медицинский университет, Бишкек."
];

const experienceData = [
    "2019-2021 - Врач-ассистент, детская больница \"Радуга\".",
    "2021-2022 - Врач-педиатр, детская поликлиника \"Здоровье\".",
    "2022-2024 - Врач общей практики, Медицинский центр \"Семейный врач\".",
     "2022-2024 - Врач общей практики, Медицинский центр \"Семейный врач\".",
      "2022-2024 - Врач общей практики, Медицинский центр \"Семейный врач\".",
       "2022-2024 - Врач общей практики, Медицинский центр \"Семейный врач\" ."
];

const Edu: React.FC = () => (
    <div className={sass.edu1}>
        <div className="container">
            <div className={sass.edu}>
                <div className={sass.text}>
                    <h1>Образование</h1>
                    <ul className={sass.timeline}>
                        {educationData.map((item, index) => (
                            <li key={index} className={sass.timelineItem}>
                                <div className={sass.timelineContent}>{item}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={sass.text}>
                    <h1>Опыт работы</h1>
                    <ul className={sass.timeline}>
                        {experienceData.map((item, index) => (
                            <li key={index} className={`${sass.timelineItem} ${index === experienceData.length - 1 ? sass.lastItem : ''}`}>
                                <div className={sass.timelineContent}>{item}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Edu;