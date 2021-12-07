import React from "react";

const Card = (props) => {
  const Languages = () => {
    const filters = props.filters;
    let lang = "";
    if (filters) {
      lang = (
        <div>
          <ul>
            {filters.map((filter) => (
              <li key={filter}> {filter} </li>
            ))}
          </ul>
        </div>
      );
    }
    return lang;
  };
  return (
    <div className="card">
      <div className="card__logo">
        <img src={props.logo} alt="" />
      </div>
      <div className="card__company">{props.company}</div>
      <div className="card__position">{props.position}</div>
      <div className="card__role">{props.role}</div>
      <div className="card__level">{props.level}</div>
      <div className="card__postedAt">{props.postedAt}</div>
      <div className="card__contract">{props.contract}</div>
      <div className="card__location">{props.location}</div>
      <div className="card__filters">{Languages()}</div>
    </div>
  );
};
export default Card;
