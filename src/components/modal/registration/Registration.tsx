import React from "react";
import "./registration.scss";
import CloseIcon from "@mui/icons-material/Close";

export const Registration: React.FC = () => {
  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__headerContainer">
            <div className="modal__header">Вход в аккаунт</div>
            <CloseIcon className="modal__close" />
          </div>
          <div className="modal__fullName">
            <div className="modal__headerFullName">Имя и Фамилия</div>
            <input className="modal__input" />
          </div>
          <div className="modal__inputEmail">
            <div className="modal__headerEmail">Email</div>
            <input className="modal__input" />
          </div>
          <div className="modal__inputPassword">
            <div className="modal__headerPassword">Пароль</div>
            <input className="modal__input" />
          </div>
          <button className="modal__button">Зарегистрироваться</button>
        </div>
      </div>
    </>
  );
};
