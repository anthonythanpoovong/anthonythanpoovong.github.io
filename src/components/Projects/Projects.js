import { Col, Container, Row } from "react-bootstrap";
import administration from "../../Assets/Projects/admin.png";
import LLM from "../../Assets/Projects/ai.png";
import basketball from "../../Assets/Projects/basketball.png";
import bookstore from "../../Assets/Projects/book-shop.png";
import discord from "../../Assets/Projects/discord.png";
import doorlock from "../../Assets/Projects/keypad.png";
import analysis from "../../Assets/Projects/prison.png";
import recognize from "../../Assets/Projects/recognize.png";
import resume from "../../Assets/Projects/resume_2.png";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  // Helper function to create colorful skill text with colored boxes
  const createSkill = (text, color) => (
    <span
      style={{
        color: "#ffffff",
        backgroundColor: color,
        fontWeight: "bold",
        fontSize: "12px",
        padding: "6px 12px",
        margin: "4px",
        borderRadius: "20px",
        display: "inline-block",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
    >
      {text}
    </span>
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LLM}
              isBlog={false}
              title="LLM Tabular Data Analysis"
              description={
                <ul>
                  <li>
                    System accepts tabular data input in formats like CSV and or
                    Excel
                  </li>
                  <li>Manipulating data processing using Pandas</li>
                  <li>
                    Using machine learning techniques such as regression
                    analysis, clustering, or clustering
                  </li>
                  <li>
                    LLM can detect trends and patterns, to summarize and display
                    visualizations of the tabular data{" "}
                  </li>
                </ul>
              }
              skills={[
                createSkill("Python", "#3776ab"),
                createSkill("SQL", "#336791"),
                createSkill("MongoDB", "#47A248"),
                createSkill("Docker", "#2496ED"),
                createSkill("Kubernetes", "#326CE5"),
                createSkill("React", "#61DAFB"),
                createSkill("JavaScript", "#F5BF03"),
                createSkill("Azure", "#1520A6"),
                createSkill("Blob Buckets", "#231F20"),
              ]}
              subtitle="Completed"
              ghLink="https://github.com/TabularLLM"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recognize}
              isBlog={false}
              title="Road Sign Recognition"
              description={
                <ul>
                  <li>
                    Manipulating a phone camera to recognize road signs in
                    Ontario
                  </li>
                  <li>The project aims to have an accuracy of 80%</li>
                  <li>
                    Designing and training a deep-learning model to classify
                    different road signs from different angles, weather
                    conditions, and lighting
                  </li>
                  <li>
                    Enables autonomous vehicles to recognize and respond
                    accordinly to road signs
                  </li>
                  <li>
                    Helps improve road safety, compliance with traffic laws and
                    driving comfort.
                  </li>
                </ul>
              }
              skills={[
                createSkill("Python", "#3776ab"),
                createSkill("OpenCV", "#5C3EE8"),
                createSkill("TensorFlow", "#FF6F00"),
                createSkill("React", "#61DAFB"),
              ]}
              subtitle="Completed"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Full Stack Discord Clone"
              description={
                <ul>
                  <li>
                    Replicating the discord application both front-end and
                    back-end
                  </li>
                  <li>User's are able to login and message other people</li>
                  <li>These messages are stored on the user's account</li>
                  <li>
                    User's are able to create servers and group chats as well
                  </li>
                </ul>
              }
              skills={[
                createSkill("JavaScript", "#F5BF03"),
                createSkill("MongoDB", "#47A248"),
                createSkill("MySQL", "#4479A1"),
                createSkill("React", "#61DAFB"),
                createSkill("Tailwind CSS", "#06B6D4"),
                createSkill("CSS3", "#1572B6"),
                createSkill("Prisma", "#2D3748"),
                createSkill("TypeScript", "#3178C6"),
                createSkill("Git", "#F05032"),
              ]}
              subtitle="Planning Phase"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={basketball}
              isBlog={false}
              title="NBA Sports Betting Analyis Application"
              description={
                <ul>
                  <li>
                    Predicts odds for a player's points, assists, and rebounds
                  </li>
                  <li>Analyzes team vs team predictions</li>
                  <li>Frontend implemented with Javascript, React, Tailwind</li>
                  <li>
                    Machine Learning using a supervised dataset with Python{" "}
                  </li>
                </ul>
              }
              skills={[
                createSkill("Python", "#3776ab"),
                createSkill("Node.js", "#339933"),
                createSkill("React", "#61DAFB"),
                createSkill("JavaScript", "#F5BF03"),
                createSkill("Tailwind CSS", "#06B6D4"),
                createSkill("CSS3", "#1572B6"),
                createSkill("Heroku", "#430098"),
                createSkill("Git", "#F05032"),
                createSkill("MySQL", "#4479A1"),
              ]}
              subtitle="Prototype Stage"
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
                  <li>
                    Users can login, create, edit and save resumes with their
                    registed account
                  </li>
                  <li>
                    Built upon previous knowledge of Servlets, Forms and N-tier
                    architecture
                  </li>
                  <li>Implemented with Java, HTML, Docker, Kubernetes</li>
                  <li>Microservices deployed on Google Cloud</li>
                </ul>
              }
              skills={[
                createSkill("Java", "#ED8B00"),
                createSkill("HTML5", "#E34F26"),
                createSkill("CSS3", "#1572B6"),
                createSkill("Docker", "#2496ED"),
                createSkill("Kubernetes", "#326CE5"),
              ]}
              subtitle="Completed"
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
                  <li>
                    A book store application thats allows customers to purchase
                    books from a catalog using checkboxes
                  </li>
                  <li>Owners can add books and adjust prices</li>
                  <li>Used a hashmap to store the books</li>
                  <li>Built with Java and Java FXML for GUI</li>
                </ul>
              }
              skills={[createSkill("Java", "#ED8B00")]}
              subtitle="Completed"
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
                  <li>
                    Students view personal info, fees, courses, and grades
                  </li>
                  <li>Admins manage students, professors, and grades</li>
                  <li>Built with Oracle Apex and SQL</li>
                </ul>
              }
              subtitle="Completed"
              skills={[
                createSkill("SQL", "#336791"),
                createSkill("Oracle", "#F80000"),
              ]}
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
              skills={[createSkill("Python", "#3776ab")]}
              subtitle="Completed"
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
                  <li>
                    Peformed Data Analysis to analyze helicopter prison breaks
                  </li>
                  <li>Used Python and Jupyter Notebook</li>
                  <li>
                    Created infographics and charts for data visualization
                  </li>
                </ul>
              }
              skills={[
                createSkill("Python", "#3776ab"),
                createSkill("Jupyter", "#F37626"),
              ]}
              subtitle="Completed"
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
                  <li>
                    Components: Arduino Uno, LCD, 4x4 Keypad, Solenoid Lock
                  </li>
                </ul>
              }
              skills={[
                createSkill("C++", "#00599C"),
                createSkill("Arduino", "#00979D"),
              ]}
              subtitle="Completed"
              ghLink="https://github.com/anthonythanpoovong/Keypad-Door-Lock"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
