import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { getHousePersonajes, getPersonajes } from "../api/api";
import { load, setHouse } from "../stores/features/personajes";

import logo from "../assets/images/Harry-Potter-Logo.png";
import "../assets/scss/Home.scss";
import "../assets/scss/Header.scss";

export default function () {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleFetchHouse = async (event) => {
    if (event.target.value) {
      await getHousePersonajes(event.target.value)
        .then((result) => {
          dispatch(setHouse(result.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await getPersonajes()
        .then((result) => {
          dispatch(load(result.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {}, []);

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
          {location.pathname === "/characters" && (
            <select onChange={handleFetchHouse}>
              <option value="">Select School</option>
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>
          )}
        </ul>
      </div>
    </div>
  );
}
