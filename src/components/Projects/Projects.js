import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import administration from "../../Assets/Projects/admin.png";
import basketball from "../../Assets/Projects/basketball.png";
import bookstore from "../../Assets/Projects/book-shop.png";
import doorlock from "../../Assets/Projects/keypad.png";
import analysis from "../../Assets/Projects/prison.png";
import resume from "../../Assets/Projects/resume_2.png";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={basketball}
              isBlog={false}
              title="NBA Sports Betting Analyis Application"
              description={
                <ul>
                  <li>Predicts odds for a player's points, assists, and rebounds</li>
                  <li>Analyzes team vs team odds</li>
                  <li>Frontend implemented with Javascript, React, Tailwind</li>
                  <li>Machine Learning using a supervised dataset with Python </li>
                </ul>
              }
              ghLink="https://github.com/anthonythanpoovong/NBA-Sports-Betting-Analysis-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resumeholic"
              description={
                <ul>
                  <li>Resume-building web application</li>
                  <li>Users can login, create, edit and save resumes</li>
                  <li>Implemented with Java, HTML, Docker, Kubernetes</li>
                  <li>Microservices deployed on Google Cloud</li>
                </ul>
              }
              ghLink="https://github.com/Resumeholic/resumeholic-prototype"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Book Store"
              description={
                <ul>
                  <li>A book store application thats allows customers to purchase books from a catalog using checkboxes</li>
                  <li>Owners can add books and adjust prices</li>
                  <li>Used a hashmap to store the books</li>
                  <li>Built with Java and Java FXML for GUI</li>
                </ul>
              }
              ghLink="https://github.com/anthonythanpoovong/BookStore-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={administration}
              isBlog={false}
              title="Better RAMSS"
              description={
                <ul>
                  <li>University student administration system</li>
                  <li>Students view personal info, fees, courses, and grades</li>
                  <li>Admins manage students, professors, and grades</li>
                  <li>Built with Oracle Apex and SQL</li>
                </ul>
              }
              ghLink="https://github.com/anthonythanpoovong/University-Administration-System"
              demoLink="https://apex.oracle.com/pls/apex/r/ramss/better-ramss/login?session=14818000220722"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description={
                <ul>
                  <li>1 or 2-player Tic-Tac-Toe game</li>
                  <li>If one player, user versus an AI</li>
                  <li>Implemented using Python and and GUI uses Tkinter</li>
                </ul>
              }
              ghLink="https://github.com/anthonythanpoovong/Tic-Tac-Toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analysis}
              isBlog={false}
              title="Helicopter Prison Break Analysis"
              description={
                <ul>
                  <li>Peformed Data Analysis to analyze helicopter prison breaks</li>
                  <li>Used Python and Jupyter Notebook</li>
                  <li>Created infographics and charts for data visualization</li>
                </ul>
              }
              ghLink="https://github.com/anthonythanpoovong/Helicopter-Prison-Break-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doorlock}
              isBlog={false}
              title="Key Pad Door Lock"
              description={
                <ul>
                  <li>Created a keypad-based door lock system</li>
                  <li>Alarm will sound when an incorrect password occurs</li>
                  <li>Used C++ and an Arduino Kit</li>
                  <li>Components: Arduino Uno, LCD, 4x4 Keypad, Solenoid Lock</li>
                </ul>
              }
              ghLink="https://github.com/anthonythanpoovong/Keypad-Door-Lock"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
