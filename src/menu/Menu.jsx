import { Link } from 'react-router-dom';
import './Menu.css';
import { FaShoppingCart } from 'react-icons/fa'; // Установите react-icons

const Menu = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Sedek.am</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              <FaShoppingCart />
              <span className="cart-count">3</span> {/* Пример количества */}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
