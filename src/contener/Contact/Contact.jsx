import React from 'react';
import './Contact.css';

export const Contact = () => {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Свяжитесь с нами</h1>
                <p>Мы готовы помочь вам с любыми вопросами!</p>
            </header>

            <section className="contact-form-section">
                <h2>Напишите нам</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Ваше имя:</label>
                        <input type="text" id="name" name="name" placeholder="Введите ваше имя" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Ваш email:</label>
                        <input type="email" id="email" name="email" placeholder="Введите ваш email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Ваше сообщение:</label>
                        <textarea id="message" name="message" placeholder="Введите ваше сообщение" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Отправить</button>
                </form>
            </section>

            <section className="contact-info-section">
                <h2>Контактная информация</h2>
                <div className="contact-info">
                    <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                    <p><strong>Email:</strong> info@sedek.ru</p>
                    <p><strong>Адрес:</strong> Москва, ул. Примерная, д. 10</p>
                </div>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531531884!3d-37.81627974202112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b9e0267b3b0!2sVictoria!5e0!3m2!1sen!2sau!4v1619147716077!5m2!1sen!2sau"
                        width="100%"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        title="Map"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
