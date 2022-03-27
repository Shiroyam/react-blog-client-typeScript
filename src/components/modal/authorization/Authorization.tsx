import React from "react";
import "./authorization.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeAuthorization } from "../../../redux/authorization/action";

export const Authorization: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__headerContainer">
            <div className="modal__header">Вход в аккаунт</div>
            <CloseIcon
              onClick={() => dispatch(closeAuthorization())}
              className="modal__close"
            />
          </div>
          <div className="modal__inputEmail">
            <div className="modal__headerEmail">Email</div>
            <input className="modal__input" />
          </div>
          <div className="modal__inputPassword">
            <div className="modal__headerPassword">Пароль</div>
            <input className="modal__input" />
          </div>
          <button className="modal__button">Войти</button>
        </div>
      </div>
    </>
  );
};
