import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import Man from "../../assets/vv1.png";
import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_contant">
          <div className="text">
            <p>Hey There</p>
            <h1>I am Vijay saini</h1>
            <p>Create Awesome Design & Devloper</p>

            <div className="icons">
              <Twitter className="icon" />
              <Facebook className="icon" />
              <Instagram className="icon" />
              <LinkedIn className="icon" />
              <GitHub className="icon" />
            </div>
            <div className="buttons">
              <button>See My Work</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>
        <div className="main_img">
          <img src={Man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
