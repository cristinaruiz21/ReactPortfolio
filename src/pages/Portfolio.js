import React, {Component} from "react";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Card from "../components/Card";

function Portfolio(){
    return (
      <div className="page">
          <Container>
              <h1>Portfolio</h1>
              <Card/>
          </Container>
      </div>
    );
  }

export default Portfolio;
