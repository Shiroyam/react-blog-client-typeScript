import React from "react";
import "./App.css";
import { Main } from "./pages/main/Main";
import { MenuActive } from "./components/menu/MenuActive"
import { Post } from "./pages/post/Post";
import { Create } from "./pages/create/Create"
import {Profile} from "./pages/profile/Profile"
import { Authorization } from "./components/modal/authorization/Authorization"
import { Registration } from "./components/modal/registration/Registration"



function App() {
  return (
    <>
      {/* <Profile></Profile> */}
      {/* <Create></Create> */}
      {/* <Post></Post> */}
      <Main></Main>
      {/* <MenuActive></MenuActive> */}
      {/* <Authorization></Authorization> */}
      {/* <Registration></Registration> */}
    </>
  );
}

export default App;
