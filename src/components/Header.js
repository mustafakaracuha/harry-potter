import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { search, load } from "../stores/personajes";
import { getPersonajes } from "../api/api";
import logo from "../assets/images/Harry-Potter-Logo.png";
import "../assets/scss/Home.scss";
import "../assets/scss/Header.scss";

export default function () {
  const dispatch = useDispatch();

  const searchCharacter = (event) => {
    if (event.target.value) {
      dispatch(search(event.target.value));
    } else {
      handleFetchData();
    }
  };

  const handleFetchData = async () => {
    const response = await getPersonajes()
      .then((result) => {
        dispatch(load(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      {/* <input placeholder="Search character" onChange={searchCharacter} /> */}
    </div>
  );
}
