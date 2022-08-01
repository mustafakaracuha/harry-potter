import React, { useEffect } from "react";
import "../assets/scss/Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Header";
import { getBooks } from "../api/api";
import { load } from "../stores/features/books";
import "../assets/scss/Home.scss";


export default function Home() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state) => state.book);

  const handleFetchData = async () => {
    await getBooks()
      .then((result) => {
        dispatch(load(result.data));
      })
      .catch((err) => {
        toast.warn(err.message);
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
