import React from 'react';
import logo from '../images/logo.png';
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <div className="left">
        <NavLink exact activeStyle={{display:'block', border:'2px solid green'}} to='/'>
   <img src={logo} alt="Logo" />
        </NavLink>
     
      </div>
      <div className="right">
        <NavLink exact activeStyle={{ backgroundColor:'white', color:'black'}} to='/help'>Help</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
