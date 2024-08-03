import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import ezML from "../../Assets/Projects/ezML_2.png";
import scotiabank from "../../Assets/Projects/scotiabank.png";
import td from "../../Assets/Projects/td.png";
import ldrs from "../../Assets/Projects/ldrs.png";
import bgctk from "../../Assets/Projects/bgctk.png";
import eastside from "../../Assets/Projects/eastside.png";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          <strong className="purple">Relevant Work Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my past work experiences
        </p>
        <Row className="justify-content-center mt-4"> {/* Added mt-4 for margin-top */}
          <Col md={8} className="d-flex flex-column align-items-center">
            <div className="mb-4">
              <ExperienceCard
                imgPath={ezML}
                isBlog={false}
                title="Software Engineer Intern"
                subtitle="Company ABC, June 2021 - August 2021"
                subtitle2="Location: New York, NY"
                bullets={[
                  "Using Python and Jupyter Notebook",
                  "Analyzed all the Helicopter Prison breaks",
                  "Viewed the statistics using infographics and charts"
                ]}
                ghLink="https://github.com/anthonythanpoovong/Helicopter-Prison-Break-Analysis"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={scotiabank}
                isBlog={false}
                title="Security Engineer Intern"
                subtitle="Company XYZ, September 2021 - December 2021"
                subtitle2="Location: Toronto, ON"
                bullets={[
                  "A book store application that allows customers to purchase from a catalogue of books using a checkbox feature",
                  "Owners can add more books to the catalogue and adjust the prices",
                  "Uses Java and Java FXML to create the GUI and application"
                ]}
                ghLink="https://github.com/anthonythanpoovong/BookStore-App"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={td}
                isBlog={false}
                title="Quality Engineer Intern"
                subtitle="Company DEF, January 2022 - April 2022"
                subtitle2="Location: Vancouver, BC"
                bullets={[
                  "A university student administration system",
                  "Students can see their personal information, financial fees, courses, and grades",
                  "Admins can see the students in a course, the professors teaching the course, and the grades of the students",
                  "Uses Oracle Apex and SQL to manipulate the data and queries"
                ]}
                ghLink="https://github.com/anthonythanpoovong/University-Administration-System"
                demoLink="https://apex.oracle.com/pls/apex/r/ramss/better-ramss/login?session=14818000220722"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={eastside}
                isBlog={false}
                title="Software Developer"
                subtitle="Company GHI, May 2022 - August 2022"
                subtitle2="Location: Seattle, WA"
                bullets={[
                  "Using C++ and an Arduino Kit",
                  "Reused cardboard as a safe box to keep items inside",
                  "Used an Arduino Uno, LCD, 4x4 Keypad, Linear Solenoid Lock, and IRF510N MOSFET"
                ]}
                ghLink="https://github.com/anthonythanpoovong/Keypad-Door-Lock"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={ldrs}
                isBlog={false}
                title="Full Stack Developer Intern"
                subtitle="Company JKL, September 2022 - December 2022"
                subtitle2="Location: San Francisco, CA"
                bullets={[
                  "A Tic-Tac-Toe application using Python",
                  "Allows either 1 or 2 players to play a game of Tic-Tac-Toe"
                ]}
                ghLink="https://github.com/anthonythanpoovong/Tic-Tac-Toe"
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={bgctk}
                isBlog={false}
                title="Kids Tech Nation Mentor"
                subtitle="Company MNO, January 2023 - April 2023"
                subtitle2="Location: Chicago, IL"
                bullets={[
                  "Using C++ and an Arduino Kit",
                  "Reused cardboard as a safe box to keep items inside",
                  "Used an Arduino Uno, LCD, 4x4 Keypad, Linear Solenoid Lock, and IRF510N MOSFET"
                ]}
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
