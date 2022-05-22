import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignPage from "./SignPage";
import * as auth from "./../utils/auth";
import InfoTooltip from "./InfoTooltip";
import regOkImgPath from "../images/registration-ok.svg";
import regFailImgPath from "../images/registration-fail.svg";

const Login = () => {
  const [tooltipState, setTooltipState] = useState({
    isOpen: false,
    imgSrc: '',
    text: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (userData) => {
    auth.login(userData)
      .then((res) => {
        console.log("res:", res);
        if (res.token)
        localStorage.setItem('token', res.token);
          // navigate("/");
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
  };

  return (
    <>
      <SignPage
        title="Вход"
        submitText="Войти"
        submitFunc={handleSubmit}
      />

      <InfoTooltip
        isOpen={tooltipState.isOpen}
        onClose={closeTooltip}
        imgSrc={tooltipState.imgSrc}
        title={tooltipState.text}
      />
    </>
  );
};

export default Login;
