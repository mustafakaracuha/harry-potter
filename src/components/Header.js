import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getHousePersonajes, getPersonajes } from "../api/api";
import { load, setHouse, searchCharacter } from "../stores/features/personajes";
import logo from "../assets/images/Harry-Potter-Logo.png";
import "../assets/scss/Home.scss";
import "../assets/scss/Header.scss";


export default function () {
  const location = useLocation();
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleFetchHouse = async (event) => {
    if (event.target.value) {
      await getHousePersonajes(event.target.value)
        .then((result) => {
          dispatch(setHouse(result.data));
        })
        .catch((err) => {
                  toast.warn(err.message);
        });
    } else {
      await getPersonajes()
        .then((result) => {
          dispatch(load(result.data));
        })
        .catch((err) => {
               toast.warn(err.message);
        });
    }
  };

  const handleFetchData = async () => {
    await getPersonajes()
      .then((result) => {
        dispatch(load(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSearch = (event) => {
    const val = event.target.value;
    if (val) {
      dispatch(searchCharacter(event.target.value));
    } else if (val === "") {
      handleFetchData();
    }
  };

  useEffect(() => {
    if(location.pathname === "/characters")
    inputRef.current.focus();
  }, []);

  return (
    <div className="contentTitle">
      <div>
      <NavLink to="/">        
      <img src={logo} />
    </NavLink>
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
          {location.pathname === "/characters" && (
            <>
                <input
                  ref={inputRef}
                  placeholder="Search Character"
                  onChange={getSearch}
                />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
