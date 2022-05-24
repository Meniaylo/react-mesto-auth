import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPath from '../images/logo.svg';

const Header = ({ email, handleSignOut }) => {

  const location = useLocation();
  console.log('email from header', email);

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
            <p className="header__item header__item_content_email link">{email}</p>
            <p className="header__item header__item_content_sign-out link" onClick={handleSignOut}>Выйти</p>
          </>
        )}
      </div>
    </header>
  );
  }

export default Header;