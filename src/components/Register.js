import React from "react";
import { Link } from "react-router-dom";
import SignPage from "./SignPage";
import * as auth from "./../utils/auth";


const Register = () => {

  const handleSubmit = (email, password) => {
    console.log('Success!', email, password);
    // auth.register(userData.password, userData.email)
    //   .then((res) => {
    //     console.log('res:', res);
    //   })
  }

  return (
    <SignPage
      title='Регистрация'
      submitText='Зарегистрироваться'
      submitFunc={handleSubmit}
    >
      <div className="sign-page__register-container">
        <p className="sign-page__register-text">Уже зарегистрированы?</p>
        <Link to='/sign-in' className="sign-page__register-text link">Войти</Link>
      </div>
    </SignPage>
  )
}

export default Register;