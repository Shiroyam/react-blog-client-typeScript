import React from "react";
import "./posts.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const Posts: React.FC = () => {
  return (
    <>
      <div className="posts">
        <div className="posts__textContainer">
          <div className="posts__header">
            JavaScript: Как с помощью Dadata определить город по IP?
          </div>
          <div className="posts__text">
            На работе потребовалось запилить задачу для автоматического
            определения города при совершении заказа. Было решено сделать это на
            фронте, ибо бек был занят.
          </div>
          <div className="posts__dateContainer">
            <div className="posts__date">12 августа 2019 в 08:06</div>
            <div className="posts__iconContainer">
              <div className="posts__number">124</div>
              <VisibilityIcon className="posts__icon" />
            </div>
          </div>
        </div>
        <img className="posts__img" src="https://uploads.hb.cldmail.ru/geekbrains/public/ckeditor_assets/pictures/6933/content-dc09a3cb592ac82b7ce0522a7e7eb882.png"></img>
      </div>
    </>
  );
};
