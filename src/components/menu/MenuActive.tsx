import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./menuActive.scss";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../redux/menu/action";
import { NavLink } from "react-router-dom";

export const MenuActive: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="menuActive">
        <div className="menuActive__content">
          <div className="menuActive__routes">
            <div className="menuActive__headerName">{localStorage.getItem("name")}</div>
            <NavLink to="/" className="menuActive__route">Главная</NavLink>
            <NavLink to="/profile" className="menuActive__route">Мой профиль</NavLink>
            <NavLink to="/create" className="menuActive__route">Создать запись</NavLink>
            <li className="menuActive__route">Выйти</li>
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
