import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.module.css'
import Req from './Req';
// import style from './App.module.css';
import menuStyle from './components/menu.module.css';
import { Menu } from './components/menu';

export default function App() {
  return (
    <>
    <Menu
        option02={<Link to="/Req" className={menuStyle.navLink}>API Dragon ball</Link>}
      />
<h1>oi</h1>
    <Routes>
        <Route path='/Req' element={<Req/>}/>
      </Routes>
    </>
  )
}