import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./menuActive.scss";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/menu/action";

export const MenuActive: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="menuActive">
        <div className="menuActive__content">
          <div className="menuActive__routes">
            <div className="menuActive__headerName">Вася Пупкин</div>
            <ul>
              <li className="menuActive__route active">Главная</li>
              <li className="menuActive__route">Мой профиль</li>
              <li className="menuActive__route">Создать запись</li>
              <li className="menuActive__route">Выйти</li>
            </ul>
          </div>
          <div className="menuActive__closeContainer">
            <CloseIcon
              onClick={() => dispatch(closeMenu())}
              className="menuActive__icon"
            />
            <div className="menuActive__header">МЕНЮ</div>
          </div>
        </div>
      </div>
    </>
  );
};
