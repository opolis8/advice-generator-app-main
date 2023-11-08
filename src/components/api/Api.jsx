import React, { useState } from "react";
import "./api.scss";

const Api = () => {
  const [data, setdata] = useState([]);
  const [number, setNumber] = useState("");
  const apiGet = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data.slip.advice);
        setNumber(data.slip.id);
      });
  };
  return (
    <>
      <div className="api-container">
        <div className="advice-number">
          <p>{`ADVICE #${number}`}</p>
        </div>
        <div className="data-output">
          <p>{`" ${data} "`}</p>
        </div>
        <div className="pattern">
          <img
            className="desktop"
            src="images/pattern-divider-desktop.svg"
            alt=""
          />
          <img
            className="mobile"
            src="images/pattern-divider-mobile.svg"
            alt=""
          />
        </div>
        <button onClick={apiGet}>
          <img src="images/icon-dice.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default Api;