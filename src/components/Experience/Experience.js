import { useState } from "react";
import { Container } from "react-bootstrap";
import bgctk from "../../Assets/Projects/bgctk.png";
import eastside from "../../Assets/Projects/eastside.png";
import ezML from "../../Assets/Projects/ezML_2.png";
import ldrs from "../../Assets/Projects/ldrs.png";
import scotiabank from "../../Assets/Projects/scotiabank.png";
import td from "../../Assets/Projects/td.png";
import telus from "../../Assets/Projects/telus.png";
import Particle from "../Particle";

const experiences = [
  {
    id: "telus",
    logo: telus,
    title: "Incoming Cybersecurity Engineer",
    company: "Telus",
    period: "October 2025 - Present",
    location: "Toronto, ON",
  },
  {
    id: "ezml",
    logo: ezML,
    title: "Software Engineer Intern",
    company: "ezML",
    period: "February 2024 - April 2024",
    location: "San Francisco, CA",
  },
  {
    id: "scotiabank",
    logo: scotiabank,
    title: "Security Engineer Intern",
    company: "Scotiabank",
    period: "September 2023 - December 2023",
    location: "Toronto, ON",
  },
  {
    id: "td",
    logo: td,
    title: "Quality Engineer Intern",
    company: "TD Bank",
    period: "May 2023 - August 2023",
    location: "Toronto, ON",
  },
  {
    id: "eastside",
    logo: eastside,
    title: "Software Developer",
    company: "Eastside",
    period: "January 2023 - August 2023",
    location: "Toronto, ON",
  },
  {
    id: "ldrs",
    logo: ldrs,
    title: "Full Stack Developer Intern",
    company: "LDRS Investments Incorporated",
    period: "January 2023 - April 2023",
    location: "Toronto, ON",
  },
  {
    id: "bgctk",
    logo: bgctk,
    title: "Kids Tech Nation Mentor",
    company: "BGCTK",
    period: "September 2022 - December 2022",
    location: "Toronto, ON",
  },
];

function Experience() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 className="experience-heading">
            <strong className="purple">Relevant Work Experience</strong>
          </h1>
          <p style={{ color: "white" }}>Here are my past work experiences</p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          {/* Vertical Timeline Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              bottom: "0",
              width: "2px",
              backgroundColor: "#333",
              zIndex: 1,
              transform: "translateX(-50%)",
            }}
          />

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2.5rem",
                position: "relative",
                justifyContent: "center",
              }}
            >
              {/* Company Logo */}
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border:
                    hoveredItem === exp.id
                      ? "4px solid #d11dd1"
                      : "4px solid #333",
                  transition: "all 0.3s ease",
                  transform: hoveredItem === exp.id ? "scale(1.1)" : "scale(1)",
                  boxShadow:
                    hoveredItem === exp.id
                      ? "0 0 25px rgba(209, 29, 209, 0.5)"
                      : "0 0 15px rgba(0,0,0,0.3)",
                  zIndex: 2,
                  position: "relative",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredItem(exp.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                    borderRadius: "50%",
                  }}
                />

                {/* Hover Card - Positioned to the right */}
                {hoveredItem === exp.id && (
                  <div
                    className="hover-card"
                    style={{
                      position: "absolute",
                      left: "160px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#1a1a2e",
                      borderRadius: "12px",
                      padding: "2rem",
                      boxShadow: "0 0 20px rgba(209, 29, 209, 0.3)",
                      border: "1px solid #333",
                      width: "400px",
                      zIndex: 10,
                      animation:
                        "slideInFromLeft 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      opacity: 1,
                    }}
                  >
                    {/* Job Title */}
                    <h3
                      className="card-title"
                      style={{
                        color: "#d11dd1",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        margin: 0,
                      }}
                    >
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <h4
                      style={{
                        color: "#fff",
                        fontSize: "1.2rem",
                        marginBottom: "0.3rem",
                        fontStyle: "italic",
                        margin: "0.5rem 0",
                      }}
                    >
                      {exp.company}
                    </h4>

                    {/* Period */}
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "1rem",
                        fontStyle: "italic",
                        marginBottom: "0.3rem",
                        margin: "0.3rem 0",
                      }}
                    >
                      {exp.period}
                    </p>

                    {/* Location */}
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "1rem",
                        margin: "0.3rem 0",
                      }}
                    >
                      {exp.location}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes slideInFromLeft {
              0% {
                opacity: 0;
                transform: translateY(-50%) translateX(-50px);
                visibility: hidden;
              }
              1% {
                visibility: visible;
              }
              100% {
                opacity: 1;
                transform: translateY(-50%) translateX(0);
                visibility: visible;
              }
            }
            
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            /* Add staggered animation for content inside hover card */
            .hover-card h3 {
              animation: slideInContent 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both;
            }
            
            .hover-card h4 {
              animation: slideInContent 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
            }
            
            .hover-card p:first-of-type {
              animation: slideInContent 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
            }
            
            .hover-card p:last-of-type {
              animation: slideInContent 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
            }

            @keyframes slideInContent {
              0% {
                opacity: 0;
                transform: translateX(-20px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `,
        }}
      />
    </Container>
  );
}

export default Experience;
