import React from "react";
import "./App.css";
import { Main } from "./pages/main/Main";
import { Post } from "./pages/post/Post";
import { Create } from "./pages/create/Create";
import { Profile } from "./pages/profile/Profile";
import { Authorization } from "./components/modal/authorization/Authorization";
import { Registration } from "./components/modal/registration/Registration";
import { useTypesSelector } from "./hooks/useTypeSelector";
import { Routes, Route } from "react-router-dom";

function App() {
  const { flagAuth } = useTypesSelector((state) => state.auth);
  return (
    <>
      {/* <Registration /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      {flagAuth && <Authorization />}
    </>
  );
}

export default App;
