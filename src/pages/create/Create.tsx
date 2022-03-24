import React from "react";
import "./create.scss";
import { Menu } from "../../components/menu/Menu";
import { Navbar } from "../../components/navbar/Navbar";

export const Create: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <Navbar></Navbar>
      <div className="create">
        <div className="create__headerContainer">
          <textarea
            placeholder="Введите заголовок..."
            className="create__headerInput"
          ></textarea>
          </div>
          <div className="create__descriptionContainer">
            <div className="create__header">Короткое описание</div>
            <textarea className="create__input"></textarea>
          </div>
          <div className="create__linkContainer">
            <div className="create__header">Ссылка на изображение:</div>
            <div className="create__form">
              <input disabled className="create__input"></input>
              <button className="create__button">Загрузить</button>
            </div>
          </div>
          <div className="create__textContainer">
              <div className="create__header">Полное описание</div>
              <textarea className="create__input"></textarea>
          </div>
          <button className="create__button">Опубликовать</button>
      </div>
    </>
  );
};
