import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import administration from "../../Assets/Projects/admin.png";
import LLM from "../../Assets/Projects/ai.png";
import bank from "../../Assets/Projects/bank.png";
import basketball from "../../Assets/Projects/basketball.png";
import bookstore from "../../Assets/Projects/book-shop.png";
import discord from "../../Assets/Projects/discord.png";
import doorlock from "../../Assets/Projects/keypad.png";
import analysis from "../../Assets/Projects/prison.png";
import recognize from "../../Assets/Projects/recognize.png";
import resume from "../../Assets/Projects/resume_2.png";
import Satellite from "../../Assets/Projects/satellite.png";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
import ticket from "../../Assets/Projects/ticket.png";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

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

  // All projects data
  const allProjects = [
    {
      imgPath: LLM,
      isBlog: false,
      title: "LLM Tabular Data Analysis",
      description: (
        <ul>
          <li>
            System accepts tabular data input in formats like CSV and or Excel
          </li>
          <li>Manipulating data processing using Pandas</li>
          <li>
            Using machine learning techniques such as regression analysis,
            clustering, or clustering
          </li>
          <li>
            LLM can detect trends and patterns, to summarize and display
            visualizations of the tabular data
          </li>
        </ul>
      ),
      skills: [
        createSkill("Python", "#3776ab"),
        createSkill("FastAPI", "#1c3950ff"),
        createSkill("SQL", "#336791"),
        createSkill("MongoDB", "#47A248"),
        createSkill("Docker", "#2496ED"),
        createSkill("Kubernetes", "#326CE5"),
        createSkill("React", "#61DAFB"),
        createSkill("JavaScript", "#F5BF03"),
        createSkill("TypeScript", "#2335fcff"),
        createSkill("NextJS", "#27c08aff"),
        createSkill("Tailwind CSS", "#336d59ff"),
        createSkill("Azure", "#1520A6"),
        createSkill("Azure Blob Storage", "#170e2fff"),
        createSkill("OpenAI", "#eb0c92ff"),
        createSkill("Prompt Engineering", "#7b0c4fff"),
        createSkill("Fine-tuning LLM's", "#7d4b69ff"),
      ],
      subtitle: "Completed",
      ghLink: "https://github.com/TabularLLM",
    },
    {
      imgPath: Satellite,
      isBlog: false,
      title: "Satellite Monitoring System",
      description: (
        <ul>
          <li>
            Keeps track of the number of clients within a given service area,
            peak usage times of the system, and key logs of satellites in orbit.
          </li>
          <li>
            The backend portion is a combination of FastAPI application
            utilizing websockets for real-time data, RabbitMQ to handle logs,
            MongoDB for storage.
          </li>
        </ul>
      ),
      skills: [
        createSkill("Python", "#3776ab"),
        createSkill("FastAPI", "#1c3950ff"),
        createSkill("MongoDB", "#47A248"),
        createSkill("Docker", "#2496ED"),
        createSkill("Kubernetes", "#326CE5"),
        createSkill("React", "#61DAFB"),
        createSkill("JavaScript", "#F5BF03"),
        createSkill("TypeScript", "#2335fcff"),
        createSkill("NextJS", "#27c08aff"),
        createSkill("Tailwind CSS", "#336d59ff"),
        createSkill("Azure", "#1520A6"),
        createSkill("RabbitMQ", "#ec5c80ff"),
      ],
      subtitle: "Completed",
      ghLink:
        "https://github.com/anthonythanpoovong/Satellite-Monitoring-System",
    },
    {
      imgPath: recognize,
      isBlog: false,
      title: "Road Sign Recognition",
      description: (
        <ul>
          <li>
            Manipulating a Yolov8 model to recognize road signs in real-time
          </li>
          <li>The project aims to have an accuracy of 80%</li>
          <li>
            Designing and training a deep-learning model to classify different
            road signs from different angles, weather conditions, and lighting
          </li>
          <li>
            Enables autonomous vehicles to recognize and respond accordinly to
            road signs
          </li>
        </ul>
      ),
      skills: [
        createSkill("Python", "#3776ab"),
        createSkill("FastAPI", "#1c3950ff"),
        createSkill("OpenCV", "#5C3EE8"),
        createSkill("TensorFlow", "#FF6F00"),
        createSkill("React", "#61DAFB"),
      ],
      subtitle: "Completed",
      ghLink: "https://github.com/anthonythanpoovong/Road-Sign-Tracker",
    },
    {
      imgPath: ticket,
      isBlog: false,
      title: "Customer Support Ticketing System",
      description: (
        <ul>
          <li>
            Submit a Ticket: Allows clients to submit a technical or
            reward-related support request
          </li>
          <li>
            Real-time Tracking: Allows clients to track the status of their
            support tickets in real-time
          </li>
          <li>
            Real-time Chat: Provide real-time chat to clients for quick support
            solutions
          </li>
          <li>
            Administrator Management: Allows administrators to assign support
            agents and manage requests
          </li>
        </ul>
      ),
      skills: [
        createSkill("Python", "#3776ab"),
        createSkill("FastAPI", "#1c3950ff"),
        createSkill("MongoDB", "#47A248"),
        createSkill("React", "#61DAFB"),
        createSkill("TypeScript", "#2335fcff"),
      ],
      subtitle: "Completed",
      ghLink:
        "https://github.com/anthonythanpoovong/BizPoints-Customer-Support-Ticketing-System",
    },
    {
      imgPath: bank,
      isBlog: false,
      title: "Secure Banking System",
      description: (
        <ul>
          <li>RSA used for key exchange & AES for secure communication</li>
          <li>Create new accounts with unique account numbers</li>
          <li>
            Persist balances even after server restarts via transaction log
          </li>
          <li>Deposit, withdraw, and check balance functionalities</li>
          <li>TCP socket-based communication between client and server</li>
        </ul>
      ),
      skills: [createSkill("Python", "#3776ab")],
      subtitle: "Completed",
      ghLink: "https://github.com/anthonythanpoovong/Secure-Banking-Protocol",
    },
    {
      imgPath: discord,
      isBlog: false,
      title: "Full Stack Discord Clone",
      description: (
        <ul>
          <li>
            Replicating the discord application both front-end and back-end
          </li>
          <li>User's are able to login and message other people</li>
          <li>These messages are stored on the user's account</li>
          <li>User's are able to create servers and group chats as well</li>
        </ul>
      ),
      skills: [
        createSkill("JavaScript", "#F5BF03"),
        createSkill("MongoDB", "#47A248"),
        createSkill("MySQL", "#4479A1"),
        createSkill("React", "#61DAFB"),
        createSkill("Tailwind CSS", "#06B6D4"),
        createSkill("CSS3", "#1572B6"),
        createSkill("Prisma", "#2D3748"),
        createSkill("TypeScript", "#3178C6"),
        createSkill("Git", "#F05032"),
      ],
      subtitle: "Planning Phase",
      ghLink: "https://github.com/anthonythanpoovong/MERN-Discord-Clone",
    },
    {
      imgPath: basketball,
      isBlog: false,
      title: "NBA Sports Betting Analyis Application",
      description: (
        <ul>
          <li>Predicts odds for a player's points, assists, and rebounds</li>
          <li>Analyzes team vs team predictions</li>
          <li>Frontend implemented with Javascript, React, Tailwind</li>
          <li>Machine Learning using a supervised dataset with Python</li>
        </ul>
      ),
      skills: [
        createSkill("Python", "#3776ab"),
        createSkill("Node.js", "#339933"),
        createSkill("React", "#61DAFB"),
        createSkill("JavaScript", "#F5BF03"),
        createSkill("Tailwind CSS", "#06B6D4"),
        createSkill("CSS3", "#1572B6"),
        createSkill("Heroku", "#430098"),
        createSkill("Git", "#F05032"),
        createSkill("MySQL", "#4479A1"),
      ],
      subtitle: "Prototype Stage",
      ghLink:
        "https://github.com/anthonythanpoovong/NBA-Sports-Betting-Analysis-App",
    },
    {
      imgPath: resume,
      isBlog: false,
      title: "Resumeholic",
      description: (
        <ul>
          <li>Resume-building web application</li>
          <li>
            Users can login, create, edit and save resumes with their registed
            account
          </li>
          <li>
            Built upon previous knowledge of Servlets, Forms and N-tier
            architecture
          </li>
          <li>Implemented with Java, HTML, Docker, Kubernetes</li>
          <li>Microservices deployed on Google Cloud</li>
        </ul>
      ),
      skills: [
        createSkill("Java", "#ED8B00"),
        createSkill("HTML5", "#E34F26"),
        createSkill("CSS3", "#1572B6"),
        createSkill("Docker", "#2496ED"),
        createSkill("Kubernetes", "#326CE5"),
      ],
      subtitle: "Completed",
      ghLink: "https://github.com/Resumeholic/resumeholic-prototype",
    },
    {
      imgPath: bookstore,
      isBlog: false,
      title: "Book Store",
      description: (
        <ul>
          <li>
            A book store application thats allows customers to purchase books
            from a catalog using checkboxes
          </li>
          <li>Owners can add books and adjust prices</li>
          <li>Used a hashmap to store the books</li>
          <li>Built with Java and Java FXML for GUI</li>
        </ul>
      ),
      skills: [createSkill("Java", "#ED8B00")],
      subtitle: "Completed",
      ghLink: "https://github.com/anthonythanpoovong/BookStore-App",
    },
    {
      imgPath: administration,
      isBlog: false,
      title: "Better RAMSS",
      description: (
        <ul>
          <li>University student administration system</li>
          <li>Students view personal info, fees, courses, and grades</li>
          <li>Admins manage students, professors, and grades</li>
          <li>Built with Oracle Apex and SQL</li>
        </ul>
      ),
      subtitle: "Completed",
      skills: [createSkill("SQL", "#336791"), createSkill("Oracle", "#F80000")],
      ghLink:
        "https://github.com/anthonythanpoovong/University-Administration-System",
      demoLink:
        "https://apex.oracle.com/pls/apex/r/ramss/better-ramss/login?session=14818000220722",
    },
    {
      imgPath: tictactoe,
      isBlog: false,
      title: "Tic-Tac-Toe",
      description: (
        <ul>
          <li>1 or 2-player Tic-Tac-Toe game</li>
          <li>If one player, user versus an AI</li>
          <li>Implemented using Python and and GUI uses Tkinter</li>
        </ul>
      ),
      skills: [createSkill("Python", "#3776ab")],
      subtitle: "Completed",
      ghLink: "https://github.com/anthonythanpoovong/Tic-Tac-Toe",
    },
    {
      imgPath: analysis,
      isBlog: false,
      title: "Helicopter Prison Break Analysis",
      description: (
        <ul>
          <li>Peformed Data Analysis to analyze helicopter prison breaks</li>
          <li>Used Python and Jupyter Notebook</li>
          <li>Created infographics and charts for data visualization</li>
        </ul>
      ),
      skills: [
        createSkill("Python", "#3776ab"),
        createSkill("Jupyter", "#F37626"),
      ],
      subtitle: "Completed",
      ghLink:
        "https://github.com/anthonythanpoovong/Helicopter-Prison-Break-Analysis",
    },
    {
      imgPath: doorlock,
      isBlog: false,
      title: "Key Pad Door Lock",
      description: (
        <ul>
          <li>Created a keypad-based door lock system</li>
          <li>Alarm will sound when an incorrect password occurs</li>
          <li>Used C++ and an Arduino Kit</li>
          <li>Components: Arduino Uno, LCD, 4x4 Keypad, Solenoid Lock</li>
        </ul>
      ),
      skills: [
        createSkill("C++", "#00599C"),
        createSkill("Arduino", "#00979D"),
      ],
      subtitle: "Completed",
      ghLink: "https://github.com/anthonythanpoovong/Keypad-Door-Lock",
    },
  ];

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= totalPages ? 0 : nextIndex;
    });
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? totalPages - 1 : nextIndex;
    });
  };

  const getCurrentProjects = () => {
    const start = currentIndex * projectsPerPage;
    const end = start + projectsPerPage;
    return allProjects.slice(start, end);
  };

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

        {/* Navigation Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
            gap: "20px",
          }}
        >
          <button
            onClick={prevProjects}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              fontSize: "20px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              zIndex: "10",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          >
            <BsChevronLeft />
          </button>

          <div
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {currentIndex + 1} of {totalPages}
          </div>

          <button
            onClick={nextProjects}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              fontSize: "20px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              zIndex: "10",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          >
            <BsChevronRight />
          </button>
        </div>

        {/* Projects Grid */}
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            display: "flex",
            alignItems: "stretch",
            minHeight: "600px",
          }}
        >
          {getCurrentProjects().map((project, index) => (
            <Col
              md={4}
              key={`${currentIndex}-${index}`}
              className="project-card"
              style={{ display: "flex" }}
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                skills={project.skills}
                subtitle={project.subtitle}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        {/* Dots Indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                background:
                  currentIndex === index
                    ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
