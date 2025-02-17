import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Header = () => {
  
  const [btnNameReact, setBtnNameReact] = useState('Login')

  // if no dependency array means the useeffect is called whenever there is a rerendering occurs
  // if we have empty dependency array means only during the initial rendering the useEffect gets executed - just once

  useEffect(() => {
    console.log("useeffect called")
});

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
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
