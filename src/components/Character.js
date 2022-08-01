import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../stores/features/personajes";
import Header from "./Header";
import "../assets/scss/Home.scss";
import { getPersonajes } from "../api/api";
import Dialog from "@mui/material/Dialog";

export default function Character() {
  const [open, setOpen] = useState(false);
  const [characterDetail, setCharacterDetail] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    hogwartsStudent: Boolean,
    actor: "",
    image: "",
  });

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

  const handleClickOpen = (item) => {
    setOpen(true);
    const items = {
      name: item.name,
      dateOfBirth: item.dateOfBirth,
      eyeColour: item.eyeColour,
      hairColour: item.hairColour,
      hogwartsStudent: item.hogwartsStudent,
      actor: item.actor,
      image: item.image,
    };
    setCharacterDetail(items);
  };

  const handleClose = (value) => {
    setOpen(false);
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
                <div className="imageBox" onClick={() => handleClickOpen(item)}>
                  <img width="250" height="300" src={item.image} alt="" />
                </div>
                <h2>{item.name}</h2>
                <p className="house">{item.house}</p>
                <p className="actor">( {item.actor} )</p>
              </div>
            )
        )}
        <Dialog onClose={handleClose} open={open}>
          <div className="characterDetail">
            <img width="250" height="300" src={characterDetail.image} alt="" />
            <div>
              <p className=""> Name : {characterDetail.name}</p>
              <p className=""> Date of Birth : {characterDetail.dateOfBirth}</p>
              <p className=""> Eye Colour : {characterDetail.eyeColour}</p>
              <p className=""> Hair Colour : {characterDetail.hairColour}</p>
              <p className="">
                {" "}
                Hogwarts Student :{" "}
                {characterDetail.hogwartsStudent === true ? "Yes" : "No"}
              </p>
              <p className=""> House : {characterDetail.house}</p>
              <p className=""> Actor : {characterDetail.actor}</p>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
