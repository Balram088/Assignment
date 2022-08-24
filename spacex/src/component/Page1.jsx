import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Page2 } from "./Page2";
import "./styles.css";

export const Page1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/launchpads`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        //  console.log(res);
      });
  }, []);
  function HandleClick() {
    <Page2 />
  }

  return (
    <>
      {data.map((element) => (
        <div className="main" key={element.id}>
          <img
            className="main_img"
            src={element.images.large[0]}
            alt={element.id}
          />
          <div className="main_name">
            <h1>{element.name}</h1>
            <p>{element.details}</p>
            <button className="buttons" onClick={HandleClick()}>Show Details</button>
          </div>
        </div>
      ))}
    </>
  );
};
