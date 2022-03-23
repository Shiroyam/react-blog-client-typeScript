import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Menu} from "./components/menu/Menu"
import { MenuActive } from "./components/menu/MenuActive"

function App() {
  return (
    <>
      
      <Navbar/>
      <Menu></Menu>
      {/* <MenuActive></MenuActive> */}
      </>
  );
}

export default App;
