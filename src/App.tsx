import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Menu} from "./components/menu/Menu"
import { MenuActive } from "./components/menu/MenuActive"
import { Main } from "./pages/main/Main"

function App() {
  return (
    <>
      <Navbar/>
      <Menu></Menu>
      <Main></Main>
      {/* <MenuActive></MenuActive> */}
      </>
  );
}

export default App;
