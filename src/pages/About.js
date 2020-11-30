import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProfPic from "../components/ProfPic";

function About() {
  return (
    <div>
        <Container>
        <h1>About Me</h1>
            <Row>
                <Col size="md-12">
                    <ProfPic/>
                </Col>
                <Col size="md-12">
                    <p>
                    Hello and welcome to my website! My name is Cristina Ruiz and I am so happy that you are here. I was born and raised in Austin, Texas and I am 23 years old. I graduated from Texas A&M University with a BS in Biomedical Sciences, and I am currently a student in a coding bootcamp via The University of Texas at Austin. My professsional goals include freelance website design, updating and running company websites, and I.T. support. On the portfolio page you will find some of the projects and assignments that I have completed thus far. I will be periodically updating that page with new websites and programs that I have worked on.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default About;
