import React, { useEffect } from "react";
import Header from "./Header";
import "../assets/scss/Home.scss";
import { getBooks } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../stores/features/books";

export default function Home() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state) => state.book);

  const handleFetchData = async () => {
    await getBooks()
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
      {bookList.map((item) => (
        <div key={item.id} title={item.title} className="bookBox">
          <div className="bookTitle">
            <h1>{item.title}</h1>
            <p className="">({item.releaseDay})</p>
          </div>
          <div className="bookDesc">
            <h3 className=""> Author : {item.author}</h3>
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
