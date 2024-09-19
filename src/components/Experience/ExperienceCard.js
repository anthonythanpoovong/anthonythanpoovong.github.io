import React from "react";
import Card from "react-bootstrap/Card";
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
            {props.subtitle3 && (
              <Card.Subtitle
                className="mb-2 subtitle"
                style={{ fontStyle: "italic", color: "white" }} // Added color: white
              >
                {props.subtitle3}
              </Card.Subtitle>
            )}
            <Card.Text style={{ textAlign: "justify" }}>
              <ul>
                {props.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
