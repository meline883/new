import React from 'react';
import { Link } from 'react-router-dom';
import './Homee.css';

export const Homee = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <let className="shop1"></let>
          <h1>Добро пожаловать в наш магазин</h1>
          <p>Лучшие семена и товары для вашего сада!</p>
         
        </div>
      </div>
<div> 
<div className="gl">
            <figure>
              <Link to="/shop">
                <img src="images/gl1.jpg" alt="Гортензия" />
                <figcaption>Семена овощей</figcaption>
              </Link>
            </figure>
            <figure>
              <Link to="/shop/Плодовые растения">
                <img src="images/gl2.jpg" alt="Роза" />
                <figcaption>Плодовые растения</figcaption>
              </Link>
            </figure>
            <figure>
              <Link to="/shop/Цветочные семена">
                <img src="images/gl3.jpg" alt="Тюльпан" />
                <figcaption>Цветочные семена</figcaption>
              </Link>
            </figure>
          </div>
</div>
      <footer className="footer">
        <div className="footer-content">
          <h2>Контакты</h2>
          <div className="contact-info">
            <p><span className="icon">📞</span> Телефон: +374*********</p>
            <p><span className="icon">📧</span> Email: ******@****.**</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/Russakan.sermer.hyastanum" className="social-icon">Facebook</a>
            <a href="https://www.instagram.com/sedek.am/" className="social-icon">Instagram</a>
          </div>
          <p className="footer-note">© 2025 Sedek.am | Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};
