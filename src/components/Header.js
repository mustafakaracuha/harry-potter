import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Harry-Potter-Logo.png";
import "../assets/scss/Home.scss";
import "../assets/scss/Header.scss";

export default function () {

  useEffect(() => {
  }, []);

  return (
    <div className="contentTitle">
      <div>
        <img src={logo} />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/">Series</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
