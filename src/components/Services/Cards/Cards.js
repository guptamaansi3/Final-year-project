import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="service-card">
      <div>
        <img className="service-image" src={props.image} alt="random"></img>
      </div>
      <h2 className='title'>{props.title}</h2>
      <p className='para1'>{props.content}</p>
    </div>
  );
};

export default Cards;
