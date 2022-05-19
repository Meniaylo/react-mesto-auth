import React from "react";

const SignPage = ({ title, submitText, children }) => {
  return (
    <div className='sign-page'>
      <h2 className='sign-page__title'>{title}</h2>
      <form className='sign-form'>
        <div>
          <input
            className='sign-form__input'
            placeholder='Email'
            type='email'
            required>
          </input>
          <input
            className='sign-form__input'
            placeholder='Пароль'
            type='password'
            required>
          </input>
        </div>
        <button className='sign-form__submit-btn'>{submitText}</button>
        {children}
      </form>
    </div>
  )
}

export default SignPage;