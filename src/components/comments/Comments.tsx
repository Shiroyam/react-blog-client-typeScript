import React from "react";
import "./comments.scss";
import { useTypesSelector } from "../../hooks/useTypeSelector";

export const Comments: React.FC = () => {
  const { comment } = useTypesSelector((state) => state.comments)
  console.log(comment)
  return (
    <>
      {comment.map(comments => (
        <div key={comments._id} className="comments">
          <div className="comments__header">
            <div className="comments__fullName">{comments.user.fullName}</div>
            <div className="comments__date">{comments.user.createdAt}</div>
          </div>
          <div className="comments__text">
            {comments.text}
          </div>
        </div>
      ))}
    </>
  );
};
