import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import "./ProjectCard.css";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        height: "100%",
        minHeight: "700px", // Increased for better spacing
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="card-img"
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "20px",
        }}
      >
        {/* Title Section */}
        <Card.Title className="card-title" style={{ flexShrink: 0 }}>
          {props.title}
        </Card.Title>

        {/* Description Section */}
        <Card.Text
          className="card-text"
          style={{
            textAlign: "justify",
            marginBottom: "20px",
            minHeight: "200px", // Fixed minimum height for consistent positioning
            overflow: "auto", // Allow scrolling if content is too long
          }}
        >
          {props.description}
        </Card.Text>

        {/* Skills Section */}
        {props.skills && props.skills.length > 0 && (
          <div
            className="skills-section"
            style={{
              flexShrink: 0,
              marginBottom: "20px",
              minHeight: "80px", // Fixed minimum height for skills section
            }}
          >
            <h5
              style={{
                marginBottom: "15px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Languages/Tools Used:
            </h5>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {props.skills.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom section */}
        <div
          className="bottom-section"
          style={{
            flexShrink: 0,
            marginTop: "auto",
          }}
        >
          <Card.Subtitle
            className="card-subtitle"
            style={{
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            {props.subtitle}
          </Card.Subtitle>
          <div
            className="buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {!props.isBlog && props.demoLink && (
              <Button variant="primary" href={props.demoLink} target="_blank">
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
