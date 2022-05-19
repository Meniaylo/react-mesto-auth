import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPath from '../images/logo.svg';

const Header = () => {

  const location = useLocation();

  return (
    <header className="header">
      <Link to='/' className="header__logo">
        <img className="header__logo-img" src={logoPath} alt="Логотип: Место"/>
      </Link>
      <div className="header__container">
        {location.pathname === '/sign-in' && (
          <Link className="header__item link" to='/sign-up'>Регистрация</Link>
        )}
        {location.pathname === '/sign-up' && (
          <Link className="header__item link" to='/sign-in'>Войти</Link>
        )}
        {location.pathname === '/' && (
          <>
            <p className="header__email">Email</p>
            <Link className="header__item link" to='/sign-in'>Выйти</Link>
          </>
        )}
      </div>
    </header>
  );
  }

export default Header;