import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Title:</strong> {props.name}
          </li>
          <li>
            <strong>GitHub:</strong> {props.github}
          </li>
          <li>
            <strong>Demo:</strong> {props.demo}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
