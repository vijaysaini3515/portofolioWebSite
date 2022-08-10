import React,{useState} from "react";
import './Header.scss'

import { Close, MenuOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [active,setActive]=useState(false);
 
  const showActive = ()=>{
    setActive(!active);
  }




  return (
    <div className="header_main_container">
      <div className="hader_logo">
        <h1>DEVELOPER</h1>
      </div>

      <nav className={active?'navbar_active':'navbar'}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showActive}/>
          </div>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Portefolio</Link>
          </li>

          <li>
            <Link to="/">Page</Link>
          </li>

          <li>
            <Link to="/">Blog</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="Changer">
          <MenuOutlined className="menu" onClick={showActive}/>
      </div>
    </div>
  );
};

export default Header;
