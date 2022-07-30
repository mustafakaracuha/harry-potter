import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../stores/features/personajes";
import Header from "./Header";
import "../assets/scss/Home.scss";
import { getPersonajes } from "../api/api";

export default function Character() {
  const dispatch = useDispatch();
  const { personajes } = useSelector((state) => state.person);

  const handleFetchData = async () => {
     await getPersonajes()
      .then((result) => {
        dispatch(load(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="persons">
        {personajes.map(
          (item, i) =>
            item.image && (
              <div
                key={i}
                title={item.name}
                style={
                  item.house === "Gryffindor"
                    ? { background: "#740001", color: "#EEBA30" }
                    : item.house === "Slytherin"
                    ? { background: "#1A472A", color: "#AAAAAA" }
                    : item.house === "Ravenclaw"
                    ? { background: "#222F5B", color: "#946B2D" }
                    : item.house === "Hufflepuff"
                    ? { background: "#FFDB00", color: "#000000" }
                    : {}
                }
              >
                <div className="imageBox">
                  <img width="250" height="300" src={item.image} alt="" />
                </div>
                <h2>{item.name}</h2>
                <p className="house">{item.house}</p>
                <p className="actor">( {item.actor} )</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}
