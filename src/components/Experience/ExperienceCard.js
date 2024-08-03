import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import "./ExperienceCard.css"; // Import the CSS file

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <Row>
          <Col md={4}>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-img-top"/>
          </Col>
          <Col md={8}>
            <Card.Title className="card-title">{props.title}</Card.Title>
            {props.subtitle && (
              <Card.Subtitle
                className="mb-2 subtitle"
                style={{ fontStyle: "italic", color: "white" }} // Added color: white
              >
                {props.subtitle}
              </Card.Subtitle>
            )}
            {props.subtitle2 && (
              <Card.Subtitle
                className="mb-2 subtitle"
                style={{ fontStyle: "italic", color: "white" }} // Added color: white
              >
                {props.subtitle2}
              </Card.Subtitle>
            )}
            <Card.Text style={{ textAlign: "justify" }}>
              <ul>
                {props.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </Card.Text>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}

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
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
