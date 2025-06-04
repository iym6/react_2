import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/context/CartContext";
import { useFavorites } from "../Favourites/context/FavouritesContext";
import { useAuth } from "../Login/AuthContext";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { favorites } = useFavorites();
  const showMessage = () => {
    alert("Это будет потом");
  };
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { isLogin } = useAuth();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="home-button">
          <img src="/images/start.svg" alt="Домой" />
        </Link>
      </div>

      <div className="header-center">
        <div className="search-container">
          <input
            type="text"
            placeholder="Поиск"
            className="search-input"
            onClick={showMessage}
          />
        </div>
      </div>

      <div className="header-right">
        <Link to="/favourites" className="icon-button">
          <img src="/images/favorite.svg" alt="Избранное" />
          {favorites.length > 0 && (
            <span className="favourites-count">{favorites.length}</span>
          )}
        </Link>
        {isLogin ? (
          <Link to="/account" className="icon-button">
            <img src="/images/login.svg" alt="Войти" />
          </Link>
        ) : (
          <Link to="/login" className="icon-button">
            <img src="/images/login.svg" alt="Войти" />
          </Link>
        )}
        <Link to="/cart" className="icon-button cart-icon">
          <img src="/images/cart.svg" alt="Корзина" />
          {cart.length > 0 && <span className="cart-count">{count}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
