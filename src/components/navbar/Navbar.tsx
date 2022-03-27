import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import { Posts } from "../posts/Posts";
import { useDispatch } from "react-redux";
import { openAuthorization } from "../../redux/authorization/action";
import { useTypesSelector } from "../../hooks/useTypeSelector";

export const Navbar: React.FC = () => {
  const { flagAuth } = useTypesSelector((state) => state.auth);
  console.log(flagAuth);
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
            <CreateIcon className="nav__iconCreate" />
          </div>
        </div>
        <div>
          <Posts></Posts>
        </div>
      </nav>
    </>
  );
};
