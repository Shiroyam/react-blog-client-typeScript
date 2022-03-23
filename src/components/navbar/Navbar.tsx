import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import { Posts } from "../posts/Posts";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="nav">
          <div className="nav__content">
              <div className="nav__header">VASYA BLOG</div>
        <div className="nav__icon">
          <SearchIcon className="nav__iconSearch" />
          <PersonIcon className="nav__iconPerson" />
          <CreateIcon className="nav__iconCreate" />
        </div>
          </div>
          <div >
           <Posts></Posts>
          </div>  
      </nav>
    </>
  );
};
