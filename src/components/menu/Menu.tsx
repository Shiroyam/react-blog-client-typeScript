import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./menu.scss";

export const Menu: React.FC = () => {
  return (
    <>
      <div className="menu active-menu">
        <div className="menu__content">
          <div className="menu__headerContainer">
            <div className="menu__header">МЕНЮ</div>
            <MenuIcon className="menu__icon" />
          </div>
        </div>
      </div>
    </>
  );
};
