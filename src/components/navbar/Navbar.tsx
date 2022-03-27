import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import { Posts } from "../posts/Posts";
import { useDispatch } from "react-redux";
import { openAuthorization } from "../../redux/authorization/action";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="nav">
        <div className="nav__content">
          <div className="nav__header">VASYA BLOG</div>
          <div className="nav__icon">
            <SearchIcon className="nav__iconSearch" />
            <PersonIcon
              onClick={() => dispatch(openAuthorization())}
              className="nav__iconPerson"
            />
            <Link to="/create"><CreateIcon className="nav__iconCreate" /></Link>
          </div>
        </div>
        <div>
          <Posts></Posts>
        </div>
      </nav>
    </>
  );
};
