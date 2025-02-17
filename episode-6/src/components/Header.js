import logo from "../images/logo.jpeg";
import { useState } from "react";

const Header = () => {
  
  const [btnNameReact, setBtnNameReact] = useState('Login')

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button 
            className="login" 
            onClick={() => {
              btnNameReact == 'Login' 
              ? setBtnNameReact("Logout") 
              : setBtnNameReact('Login');
            }}>
              {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
