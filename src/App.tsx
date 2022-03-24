import React from "react";
import "./App.css";
import { Main } from "./pages/main/Main";
import { Post } from "./pages/post/Post";
import { Authorization } from "./components/modal/authorization/Authorization"
import { Registration } from "./components/modal/registration/Registration"

function App() {
  return (
    <>
      <Post></Post>
      {/* <Main></Main> */}
      {/* <Authorization></Authorization> */}
      {/* <Registration></Registration> */}
    </>
  );
}

export default App;
