import React from "react"
import "./profile.scss"
import { Menu } from "../../components/menu/Menu"

export const Profile: React.FC = () => {
    return(<>
    <Menu></Menu>
    <div className="profile">
        <div className="profile__container">
            <div className="profile__headerContainer">
                <div className="profile__header">Вася Пупкин</div>
            </div>
            <div className="profile__toggle">
                <div className="profile__togglePosts open">Статьи</div>
                <div className="profile__toggleComments">Комментарии</div>
            </div>
        </div>
    </div>
    </>)
}