import React from "react";
import "./comments.scss";

export const Comments: React.FC = () => {
  return (
    <>
      <div className="comments">
        <div className="comments__header">
          <div className="comments__fullName">Vasya Pupkin</div>
          <div className="comments__date">12 августа 2019 в 08:06</div>
        </div>
        <div className="comments__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
          adipiscing leo id sed neque, diam nibh.
        </div>
      </div>
    </>
  );
};
