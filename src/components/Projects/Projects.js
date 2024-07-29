import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
import bookstore from "../../Assets/Projects/bookstore.jpg";
import administration from "../../Assets/Projects/administration-system.png";
import analysis from "../../Assets/Projects/prison-break.png";
import doorlock from "../../Assets/Projects/keypad-door-lock.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Book Store"
              description="A book store application that allows customers to purchase from a catalogue of books using a checkbox feature. The owners can add more books to the catalogue and adjust the prices. This program uses Java and Java FXML to create the GUI and application of the program  "
              ghLink="https://github.com/anthonythanpoovong/BookStore-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={administration}
              isBlog={false}
              title="Better RAMSS"
              description="A university student administration system that lets students see their personal information, financial fees, courses, and grades. The admins can see the students in a course, the professors teaching the course and the grades of the students. This application uses Oracle Apex and SQL to manipulate the data and queries given."
              ghLink="https://github.com/anthonythanpoovong/University-Administration-System"
              demoLink="https://apex.oracle.com/pls/apex/r/ramss/better-ramss/login?session=14818000220722"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A Tic-Tac-Toe application that uses Python to let either 1 or 2 players play a game of Tic-Tac-Toe."
              ghLink="https://github.com/anthonythanpoovong/Tic-Tac-Toe"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analysis}
              isBlog={false}
              title="Helicopter Prison Break Analysis"
              description="Using Python and Jupyter Notebook, I analyzed all th Helicopter Prison breaks and viewed the statistics using inforgraphics and chats."
              ghLink="https://github.com/anthonythanpoovong/Helicopter-Prison-Break-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doorlock}
              isBlog={false}
              title="Key Pad Door Lock"
              description="Using C++ and a Arduino Kit, I was able to reuse cardboard as a safe box, to keep any items inside the safe. This project used a Arduino Uno, LCD, 4x4 Keypad, Linear Solenoid Lock and IRF510N MOSFET. "
              ghLink="https://github.com/anthonythanpoovong/Keypad-Door-Lock"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
