import React, { useEffect, useState } from "react";
import "./api.scss";

const Api = () => {
  const [data, setdata] = useState([]);
  const [number, setNumber] = useState("");
  useEffect(() => {
    apiGet();
  }, []);
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
            alt="desktop-image"
          />
          <img
            className="mobile"
            src="images/pattern-divider-mobile.svg"
            alt="mobile-image"
          />
        </div>
        <button onClick={apiGet}>
          <img src="images/icon-dice.svg" alt="dice-icon" />
        </button>
      </div>
    </>
  );
};

export default Api;
