import React from "react"
import "./profile.scss"
import { Posts } from "../../components/posts/Posts"
import { Comments } from "../../components/comments/Comments"
import { Menu } from "../../components/menu/Menu"
import { Navbar } from "../../components/navbar/Navbar"

export const Profile: React.FC = () => {
    return(<>
    <Menu></Menu>
    <div className="profile">
        <div className="profile__container">
            <div className="profile__headerContainer">
                <div className="profile__header">Вася Пупкин</div>
            </div>
            <div className="profile__toggle">
                <div className="profile__togglePosts active">Статьи</div>
                <div className="profile__toggleComments">Комментарии</div>
            </div>
        </div>
    </div>
    </>)
}