import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (
    <div>
        <Container>
            <h1>Contact Me</h1>
            <Row>
                <Col size="md-12">
                    <div class="icon LinkedIn">
                        <h2>LinkedIn</h2>
                        <a href="https://www.linkedin.com/in/cristina-ruiz-47527a134" class="fab fa-linkedin"></a>
                    </div>
                    <div class="icon github">
                        <h2>GitHub</h2>
                        <a href="https://github.com/cristinaruiz21" class="fab fa-github"></a>
                    </div>
                    <div class="icon phone">
                        <p>(512)-826-7879</p>
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="icon Resume">
                        <h2>Resume</h2>
                        <a href="https://drive.google.com/file/d/1hrWteCwBP2MqjcdB9RGJbktaDkn4CGtv/view?usp=sharing" class="fas fa-file"></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Contact;
