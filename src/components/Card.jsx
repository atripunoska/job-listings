import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__logo"></div>
      <div className="card__company">{props.company}</div>
      <div className="card__position"></div>
    </div>
  );
};
export default Card;
