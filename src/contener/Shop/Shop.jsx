import React, { useState } from 'react';
import './Shop.css';

export const Shop = () => {
  const categories = [
    {
      name: "Семена овощей",
      products: [
        { id: 1, name: "Томат F1 Детская Радость", image: "images/tomato.jpg", price: 500 },
        { id: 2, name: "Баклажани Длинный Фиолетовый", image: "images/cucumber.jpg", price: 400 },
        { id: 3, name: "Салат Листовой Холодок", image: "images/cabbage.jpg", price: 300 },
        { id: 4, name: "Семена томатов", image: "images/tomato1.jpg", price: 500 },
        { id: 5, name: "Семена огурцов", image: "images/bazuk.jpg", price: 400 },
        { id: 6, name: "Семена капусты", image: "images/kabachka.jpg", price: 300 },
        { id: 7, name: "Семена капусты", image: "images/perec.jpg", price: 300 },
        { id: 8, name: "Семена капусты", image: "images/perec1.jpg", price: 300 },
        { id: 9, name: "Семена капусты", image: "images/bazuk.jpg", price: 300 },
        { id: 10, name: "Семена капусты", image: "images/bibar1.jpg", price: 300 },
      ],
    },
    {
      name: "Плодовые растения",
      products: [
        { id: 7, name: "Саженец яблони", image: "images/apple.jpg", price: 1200 },
        { id: 8, name: "Саженец груши", image: "images/pear.jpg", price: 1300 },
      ],
    },
    {
      name: "Цветочные семена",
      products: [
        { id: 8, name: "Семена роз", image: "images/rose.jpg", price: 800 },
        { id: 9, name: "Семена тюльпанов", image: "images/tulip.jpg", price: 700 },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cartItems.find((item) => item.product.id === id);
    if (existingItem.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.product.id !== id));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="shop-container">
      {/* Категории */}
      <div className="categories">
        <h2>Категории</h2>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className="category-button"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Список продуктов */}
      <div className="products-container">
        <h2>{selectedCategory.name}</h2>
        <div className="products">
          {selectedCategory.products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price} ₽</p>
              <button onClick={() => addToCart(product)} className="add-to-cart">
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Корзина */}
      <div className="cart-container">
        <h2>Корзина</h2>
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.product.id} className="cart-item">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="cart-item-image"
                  />
                  <div>
                    <p>{item.product.name}</p>
                    <p>Цена: {item.product.price} ₽</p>
                    <p>Количество: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="remove-item"
                  >
                    Уменьшить
                  </button>
                </div>
              ))}
            </div>
            <p className="cart-total">Итог: {totalPrice} ₽</p>
            <button onClick={clearCart} className="clear-cart">
              Очистить корзину
            </button>
          </>
        ) : (
          <p>Корзина пуста</p>
        )}
      </div>
    </div>
  );
};
