import React from 'react';
import logo1 from '@/assets/img/logo1.png'
import logo2 from '@/assets/img/logo2.png'
import logo3 from '@/assets/img/logo3.png'
import logo4 from '@/assets/img/logo4.png'
import Image from 'next/image';
import sass from "@/components/layout/Footer/Footer.module.scss"

const Footer = () => {
    return (
        <div id={sass.footer1}>
            <div className="container">
                <div className={sass.footer}>
                   <div className={sass.text}>
                    <h1>MediLink</h1>
                    <p>4517 Washington Ave. Manchester, Kentucky 39495

                    </p>
                    <p>(225) 555-0118</p>
                    <p>bill.sanders@example.com</p>
                   </div>

                   <div className={sass.logo}>
                    <Image src={logo1} alt="img" />
                    <Image src={logo2} alt="img" />
                    <Image src={logo3} alt="img" />
                    <Image src={logo4} alt="img" />
                    
                   </div>

                   <div className={sass.nav}>
                    <p>О нас</p>
                    <p>Контакты</p>
                    <p>Контакты</p>
                   </div>


                   <div className={sass.nav1}>
                    <p>Главная</p>
                    <p>Запись на консультацию</p>
                    <p>Наши специалисты</p>
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;