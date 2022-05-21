import React from "react";

const InfoTooltip = ({ isOpen, imgSrc, title }) => {
  return (
    <section className={`popup ${isOpen && 'popup_active'}`}>
      <div className="popup__container">
        <img className="popup__info-img" src={imgSrc} />
        <h2 className="popup__title">{title}</h2>
        <button
          className="popup__exit-btn link"
          type="button"
          aria-label="Выход">
        </button>
      </div>
    </section>
  )
}

export default InfoTooltip;