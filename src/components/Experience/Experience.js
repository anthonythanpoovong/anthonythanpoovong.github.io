import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
import scotiabank from "../../Assets/Projects/scotiabank.png";
import administration from "../../Assets/Projects/administration-system.png";
import analysis from "../../Assets/Projects/prison-break.png";
import doorlock from "../../Assets/Projects/keypad-door-lock.jpg";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          <strong className="purple">Work Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my past work experiences
        </p>
        <Row className="justify-content-center mt-4"> {/* Added mt-4 for margin-top */}
          <Col md={4} className="d-flex flex-column align-items-center">
            <div className="mb-4">
              <ExperienceCard
                imgPath={scotiabank}
                isBlog={false}
                title="Book Store"
                description="A book store application that allows customers to purchase from a catalogue of books using a checkbox feature. The owners can add more books to the catalogue and adjust the prices. This program uses Java and Java FXML to create the GUI and application of the program."
                ghLink="https://github.com/anthonythanpoovong/BookStore-App"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={administration}
                isBlog={false}
                title="Better RAMSS"
                description="A university student administration system that lets students see their personal information, financial fees, courses, and grades. The admins can see the students in a course, the professors teaching the course and the grades of the students. This application uses Oracle Apex and SQL to manipulate the data and queries given."
                ghLink="https://github.com/anthonythanpoovong/University-Administration-System"
                demoLink="https://apex.oracle.com/pls/apex/r/ramss/better-ramss/login?session=14818000220722"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={tictactoe}
                isBlog={false}
                title="Tic-Tac-Toe"
                description="A Tic-Tac-Toe application that uses Python to let either 1 or 2 players play a game of Tic-Tac-Toe."
                ghLink="https://github.com/anthonythanpoovong/Tic-Tac-Toe"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={analysis}
                isBlog={false}
                title="Helicopter Prison Break Analysis"
                description="Using Python and Jupyter Notebook, I analyzed all the Helicopter Prison breaks and viewed the statistics using infographics and charts."
                ghLink="https://github.com/anthonythanpoovong/Helicopter-Prison-Break-Analysis"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={doorlock}
                isBlog={false}
                title="Key Pad Door Lock"
                description="Using C++ and an Arduino Kit, I was able to reuse cardboard as a safe box, to keep any items inside the safe. This project used an Arduino Uno, LCD, 4x4 Keypad, Linear Solenoid Lock, and IRF510N MOSFET."
                ghLink="https://github.com/anthonythanpoovong/Keypad-Door-Lock"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
