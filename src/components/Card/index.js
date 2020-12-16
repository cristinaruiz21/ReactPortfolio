import React from "react";
import Row from "../Row";
import Button from "../Button";
import Thought from "../../images/ThoughtBubble.png";
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
        <a href="https://secret-reaches-35397.herokuapp.com/" target="_blank" className="link-text">Thought Bubble</a>
        <img src={Thought} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app" id="demo">
          <a href="https://secret-reaches-35397.herokuapp.com/" target="_blank">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app" id="git">
          <a href="https://github.com/cristinaruiz21/ThoughtBubble" target="_blank">GitHub</a>
        </Button>
      </div>
      <div className="card">
        <a href="https://cristinaruiz21.github.io/WeatherDashboard/" target="_blank" className="link-text">Weather Dashboard</a>
        <img src={Weather} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/WeatherDashboard/" target="_blank">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://github.com/cristinaruiz21/WeatherDashboard" target="_blank">GitHub</a>
        </Button>
      </div>
      </Row>
      <Row>
      <div className="card">
        <a href="https://fur-family-34.herokuapp.com/" target="_blank" className="link-text">Fur Family</a>
        <img src={FurFamily} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://fur-family-34.herokuapp.com/" target="_blank">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://github.com/cristinaruiz21/FurFamily" target="_blank">GitHub</a>
        </Button>
      </div>
      <div className="card">
        <a href="https://summer-mute.github.io/NCBI-Model-Organism-Inspector/" target="_blank" className="link-text">NCBI Model Organism Inpector</a>
        <img src={Organism} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://summer-mute.github.io/NCBI-Model-Organism-Inspector/" target="_blank">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://github.com/summer-mute/NCBI-Model-Organism-Inspector" target="_blank">GitHub</a>
        </Button>
      </div>
      </Row>
      <Row>
      <div className="card">
        <a href="https://cristinaruiz21.github.io/WorkDayScheduler/" target="_blank" className="link-text">Work Day Scheduler</a>
        <img src={Scheduler} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://cristinaruiz21.github.io/WorkDayScheduler/" target="_blank">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://github.com/cristinaruiz21/WorkDayScheduler" target="_blank">GitHub</a>
        </Button>
      </div>
      <div className="card">
        <a href="https://note-taker-348.herokuapp.com/" target="_blank" className="link-text">Note Taker</a>
        <img src={NoteTaker} className="img-thumbnail2" alt="password-generator"/>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://note-taker-348.herokuapp.com/" target="_blank">Demo</a>
        </Button>
        <Button className="btn btn-primary btn-lg app">
          <a href="https://github.com/cristinaruiz21/NoteTaker" target="_blank">GitHub</a>
        </Button>
      </div>
      </Row>
    </div>
  );
}

export default Card;
