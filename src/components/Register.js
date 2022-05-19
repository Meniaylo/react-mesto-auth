import React from "react";
import { Link } from "react-router-dom";
import SignPage from "./SignPage";


const Register = () => {
  return (
    <SignPage
      title='Регистрация'
      submitText='Зарегистрироваться'
    >
      <div className="sign-page__register-container">
        <p className="sign-page__register-text">Уже зарегистрированы?</p>
        <Link to='/sign-in' className="sign-page__register-text link">Войти</Link>
      </div>
    </SignPage>
  )
}

export default Register;