import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="service-card">
      <div>
        <img className="service-image" src={props.image} alt="random"></img>
      </div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Cards;
