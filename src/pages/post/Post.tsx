import React from "react";
import "./post.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Menu } from "../../components/menu/Menu";
import { Navbar } from "../../components/navbar/Navbar";
import { Comments } from "../../components/comments/Comments";

export const Post: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <Navbar></Navbar>
      <div className="post">
        <div className="post__headerContainer">
          <div className="post__dateContainer">
            <div className="post__date">12 августа 2019 в 08:06</div>
            <div className="post__iconContainer">
              <VisibilityIcon className="post__icon" />
              <div className="post__number">55</div>
            </div>
          </div>
          <div className="post__headerText">
            <div className="post__header">
              Какой-то очень интересный заголовок
            </div>
            <div className="post__description">
              Я часто замечаю, что начинающие фронтенд-разработчики по несколько
              раз то начинают, то забрасывают изучение технологий.
            </div>
          </div>
        </div>
        <div className="post__textContainer">
          <div className="post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
            fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
            scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
            quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
            nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
            laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
            phasellus malesuada non nisi.
          </div>
        </div>
        <div className="post__commentsContainer">
          <div className="post__commentsHeader">Комментарии (3)</div>
          <Comments></Comments>
          <div className="post__commentsInputContainer">
              <div className="post__commentsInputHeader">
              Добавить комментарий
              </div>
              <textarea className="post__commentsInput"></textarea>
              <button className="post__commentsButton">Отправить</button>
          </div>
        </div>
      </div>
    </>
  );
};
