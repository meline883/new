import React from 'react';
import './About.css'; // Добавьте стили в отдельный CSS-файл

export const About = () => {
    return (
        <>
            <header className="about-header">
                <h1>Добро пожаловать в компанию "Седек"</h1>
                <p>Мы обеспечиваем качественные семена для вашего успешного урожая.</p>
            </header>

            <section className="about-section">
                <h2>О нас</h2>
                <p>Компания "Седек" уже более 20 лет специализируется на производстве и продаже семян высшего качества. Мы предлагаем широкий ассортимент семян овощей, цветов и трав, которые соответствуют самым высоким стандартам.</p>
                <p>Наша цель — помочь каждому садоводу и фермеру достичь лучших результатов благодаря нашим семенам.</p>
            </section>

            <section className="features-section">
                <h2>Наши преимущества</h2>
                <div className="features">
                    <div className="feature">
                        <img src="/images/high-quality.jpg" alt="Высокое качество" />
                        <h3>Высокое качество</h3>
                        <p>Мы тщательно отбираем семена, чтобы гарантировать отличную всхожесть.</p>
                    </div>
                    <div className="feature">
                        <img src="/images/sedek.jpg" alt="Широкий ассортимент" />
                        <h3>Широкий ассортимент</h3>
                        <p>У нас вы найдете семена для любых нужд — от овощей до декоративных растений.</p>
                    </div>
                    <div className="feature">
                        <img src="/images/support.jpg" alt="Поддержка клиентов" />
                        <h3>Поддержка клиентов</h3>
                        <p>Наши специалисты всегда готовы помочь вам с выбором и советом.</p>
                    </div>
                </div>
            </section>

            <footer className="about-footer">
                <p>&copy; 2025 Компания "Седек". Все права защищены.</p>
            </footer>
        </>
    );
};

export default About;
