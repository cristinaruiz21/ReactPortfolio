import React from "react";
import Row from "../Row";
import Button from "../Button";
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
        <a href="https://cristinaruiz21.github.io/Password-Generator/" className="link-text">Random Password Generator</a>
        <img src={Password} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app" id="demo">
          <a href="https://cristinaruiz21.github.io/Password-Generator/">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app" id="git">
          <a href="https://github.com/cristinaruiz21/Password-Generator">GitHub</a>
        </Button>
      </div>
      <div className="card">
        <a href="https://cristinaruiz21.github.io/WeatherDashboard/" className="link-text">Weather Dashboard</a>
        <img src={Weather} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/WeatherDashboard/">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://github.com/cristinaruiz21/WeatherDashboard">GitHub</a>
        </Button>
      </div>
      </Row>
      <Row>
      <div className="card">
        <a href="https://fur-family-34.herokuapp.com/" className="link-text">Fur Family</a>
        <img src={FurFamily} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/WeatherDashboard/">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/Password-Generator/">GitHub</a>
        </Button>
      </div>
      <div className="card">
        <a href="https://summer-mute.github.io/NCBI-Model-Organism-Inspector/" className="link-text">NCBI Model Organism Inpector</a>
        <img src={Organism} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/WeatherDashboard/">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/Password-Generator/">GitHub</a>
        </Button>
      </div>
      </Row>
      <Row>
      <div className="card">
        <a href="https://cristinaruiz21.github.io/WorkDayScheduler/" className="link-text">Work Day Scheduler</a>
        <img src={Scheduler} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/WeatherDashboard/">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/Password-Generator/">GitHub</a>
        </Button>
      </div>
      <div className="card">
        <a href="https://note-taker-348.herokuapp.com/" className="link-text">Note Taker</a>
        <img src={NoteTaker} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/WeatherDashboard/">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/Password-Generator/">GitHub</a>
        </Button>
      </div>
      </Row>
    </div>
  );
}

export default Card;
