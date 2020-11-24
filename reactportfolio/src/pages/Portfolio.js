import React, {Component} from "react";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Card from "../components/Card";
import projects from "../projects.json";

class Portfolio extends Component{
  state ={
    projects
  };

  render(){
  return (
    <div>
        <Container>
            <h1>Portfolio</h1>
            {this.state.projects.map(project =>(
              <Card 
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
            ))}
            
        </Container>
    </div>
  );
}
}

export default Portfolio;
