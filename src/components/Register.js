import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignPage from "./SignPage";
import * as auth from "./../utils/auth";
import InfoTooltip from "./InfoTooltip";
import regOkImgPath from "../images/registration-ok.svg";
import regFailImgPath from "../images/registration-fail.svg";

const Register = () => {
  const [tooltipState, setTooltipState] = useState({
    isOpen: false,
    imgSrc: '',
    text: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (userData) => {
    auth.register(userData)
      .then((res) => {
        console.log("res:", res);
        setTooltipState({
          isOpen: true,
          imgSrc: regOkImgPath,
          text: "Вы успешно зарегистрировались!",
        });
      })
      .catch((err) => {
        console.log("error!", err);
        setTooltipState({
          isOpen: true,
          imgSrc: regFailImgPath,
          text: "Что-то пошло не так! Попробуйте ещё раз.",
        });
      });
  };

  const closeTooltip = () => {
    setTooltipState((prev) => ({
      ...prev,
      isOpen: false,
    }));
    if (tooltipState.imgSrc === regOkImgPath) {
      setTimeout(() => {
        navigate("/sign-in");
      }, 444);
    }
  };

  return (
    <>
      <SignPage
        title="Регистрация"
        submitText="Зарегистрироваться"
        submitFunc={handleSubmit}
      >
        <div className="sign-page__register-container">
          <p className="sign-page__register-text">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="sign-page__register-text link">
            Войти
          </Link>
        </div>
      </SignPage>

      <InfoTooltip
        isOpen={tooltipState.isOpen}
        onClose={closeTooltip}
        imgSrc={tooltipState.imgSrc}
        title={tooltipState.text}
      />
    </>
  );
};

export default Register;
