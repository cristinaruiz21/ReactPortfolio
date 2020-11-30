import React from "react";
import "./style.css";
import Row from "../Row";
import Password from "../../images/Password.png";
import Weather from "../../images/Weather1.png";
import FurFamily from "../../images/FurFamily.png";
import Organism from "../../images/Organism-Inspector.png";
import Scheduler from "../../images/Work-day-scheduler.png";
import NoteTaker from "../../images/NoteTaker.png";

function Card() {
  return (
    <div>
      <Row>
      <div className="card">
        <figure className="col-md-6">
          <img src={Password} className="img-thumbnail" alt="password-generator"/>
          <a href="https://cristinaruiz21.github.io/Password-Generator/" className="link-text">Random Password Generator</a>
        </figure>
      </div>
      <div className="card">
        <figure className="col-md-6">
          <img src={Weather} className="img-thumbnail" alt="password-generator"/>
          <a href="https://cristinaruiz21.github.io/WeatherDashboard/" className="link-text">Weather Dashboard</a>
        </figure>
      </div>
      </Row>
      <Row>
      <div className="card">
        <figure className="col-md-6">
          <img src={FurFamily} className="img-thumbnail" alt="password-generator"/>
          <a href="https://fur-family-34.herokuapp.com/" className="link-text">Fur Family</a>
        </figure>
      </div>
      <div className="card">
        <figure className="col-md-6">
          <img src={Organism} className="img-thumbnail" alt="password-generator"/>
          <a href="https://summer-mute.github.io/NCBI-Model-Organism-Inspector/" className="link-text">NCBI Model Organism Inpector</a>
        </figure>
      </div>
      </Row>
      <Row>
      <div className="card">
        <figure className="col-md-6">
          <img src={Scheduler} className="img-thumbnail" alt="password-generator"/>
          <a href="https://cristinaruiz21.github.io/WorkDayScheduler/" className="link-text">Work Day Scheduler</a>
        </figure>
      </div>
      <div className="card">
        <figure className="col-md-6">
          <img src={NoteTaker} className="img-thumbnail" alt="password-generator"/>
          <a href="https://note-taker-348.herokuapp.com/" className="link-text">Note Taker</a>
        </figure>
      </div>
      </Row>
    </div>
  );
}

export default Card;
