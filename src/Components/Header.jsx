import React from 'react';
import './Header.css';
import Images from "../images/salome.png";
function Header() {
  return (
    
       <header className="header">
        <h1 className="header-title">Portfolio Standart</h1>
      <img className="header-image" src={Images} alt=""/>
      </header>
     

  );
}

export default Header;