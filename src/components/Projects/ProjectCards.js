import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import "./ProjectCard.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="card-img"
      />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-text" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Skills Section without purple box */}
        {props.skills && props.skills.length > 0 && (
          <div
            style={{
              background: "none",
              border: "none",
              padding: "0",
              margin: "15px 0",
            }}
          >
            <h5 style={{ marginBottom: "10px", color: "white" }}>
              Languages/Tools Used:
            </h5>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                justifyContent: "flex-start",
              }}
            >
              {props.skills.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
          </div>
        )}

        <Card.Subtitle
          className="card-subtitle"
          style={{ marginBottom: "10px" }}
        >
          {props.subtitle}
        </Card.Subtitle>
        <div className="buttons">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
