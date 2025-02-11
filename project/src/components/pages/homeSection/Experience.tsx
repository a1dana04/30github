import React from 'react';
import sass from "@/components/pages/homeSection/Experience.module.scss"

const Experience = () => {
    return (
        <div className={sass.experience1}>
            <div className="">
                <div className={sass.experience}>
                    <div className={sass.block}>

                    <div className={sass.box}>
                        <h1>8 000 +</h1>
                        <span>успешных онлайн-консультаций</span>



                    </div>
                    <div className={sass.box}>
                        <h1>4 года</h1>
                        <span>средней практики специалиста</span>

                    </div>

                    <div className={sass.box}>
                        <h1>100 +</h1>
                        <span>лучших специалистов на связи</span>
                    </div>

                    <div className={sass.box}>
                        <h1>95 %</h1>
                        <span>клиентов довольны результатом</span>
                        


                    </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Experience;