import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    
    <div className="Navbar">

    <ul className="list2">
        <li id="Logo" ><NavLink to='/Inicio'>Café & Prosa</NavLink></li>
        <li><NavLink to='/Inicio'>Início</NavLink></li>
        <li><NavLink to='/contato'>Contate-nos</NavLink></li>
        <li><a>Quem somos?</a></li>
        <li><a>Seja cumplice!</a></li>
    </ul>

</div>

  );
}

export default Header;

