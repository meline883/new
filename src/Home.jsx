import React from 'react';
import Menu from './menu/Menu.jsx';


function Home() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="logo"><img src={logo} alt="" />
          
          </div>
          <ul className="nav-links">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <header className="hero">
          <h1>Добро пожаловать на главную страницу</h1>
          <p>Здесь вы можете найти информацию о нашей агрокомпании, изучить новости и узнать больше о нашей продукции..</p>
        </header>
      </div>
    
    );
  }
  export default Home;