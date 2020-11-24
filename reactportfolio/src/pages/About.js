import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
        <Container>
        <h1>About Me</h1>
            <Row>
                <Col size="md-12">
                    <p>*Insert Image Here*</p>
                </Col>
                <Col size="md-12">
                    <p>
                        Hello there and welcome to my page!
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default About;
