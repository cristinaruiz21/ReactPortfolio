import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProfPic from "../components/ProfPic";

function About() {
  return (
    <div className="page">
        <Container>
        <h1>About Me</h1>
            <Row>
                <Col size="md-4 offset-md-2">
                    <ProfPic/>
                </Col>
                <Col size="md-6">
                    <p className="about">
                    Hello and welcome to my website! My name is Cristina Ruiz and I am so happy that you are here. I was born and raised in Austin, Texas and I am 24 years old. I graduated from Texas A&M University with a BS in Biomedical Sciences, and I more recently completed a Full Stack Web Development Coding Boot Camp via The University of Texas at Austin. My professsional goals include freelance website design, front and back end web development, and general software development. On the portfolio page you will find some of the projects that I have completed thus far. I will be periodically updating that page with new websites and programs that I have worked on. Please feel free to reach out to me and connect with me via my links on my contact page. 
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default About;
