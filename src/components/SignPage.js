import React, { useState } from "react";

const SignPage = ({ title, submitText, submitFunc, children }) => {
  
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;
    console.log('submitFunc:', submitFunc);
    console.log('email:', email);
    console.log('password:', password);
    if (submitFunc && email && password) {
      submitFunc(email, password);
    }
  }

  return (
    <div className='sign-page'>
      <h2 className='sign-page__title'>{title}</h2>
      <form className='sign-form' onSubmit={handleSubmit}>
        <div>
          <input
            className='sign-form__input'
            placeholder='Email'
            type='email'
            name='email'
            value={userData.email}
            onChange={handleInputChange}
            required>
          </input>
          <input
            className='sign-form__input'
            placeholder='Пароль'
            type='password'
            name='password'
            value={userData.password}
            minLength="2"
            maxLength="10"
            onChange={handleInputChange}
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