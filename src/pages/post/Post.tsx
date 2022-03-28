import React from "react";
import "./post.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Menu } from "../../components/menu/Menu";
import { Navbar } from "../../components/navbar/Navbar";
import { Comments } from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { getPost } from "../../redux/post/action";
import { getCommentsPost } from "../../redux/comments/action";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypeSelector";



export const Post: React.FC = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  React.useEffect(()=>{
    dispatch(getPost(id))
    dispatch(getCommentsPost(id))
  }, [id])
  const { post } = useTypesSelector((state) => state.post)
  
  return (
    <>
      <Menu></Menu>
      <Navbar></Navbar>
      <div className="post">
        <div  style={{ backgroundImage: `url(${post.photoUrl})` }} className="post__headerContainer">
          <div className="post__dateContainer">
            <div className="post__date">{post.createdAt}</div>
            <div className="post__iconContainer">
              <VisibilityIcon className="post__icon" />
              <div className="post__number">{post.views}</div>
            </div>
          </div>
          <div className="post__headerText">
            <div className="post__header">
              {post.title}
            </div>
            <div className="post__description">
             {post.description}
            </div>
          </div>
        </div>
        <div className="post__textContainer">
          <div className="post__text">
            {post.text}
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
