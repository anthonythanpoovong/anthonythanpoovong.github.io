import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./ExperienceCard.css"; // Make sure this exists

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <Row>
          {/* Centered Logo */}
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center logo-container"
          >
            <Card.Img
              variant="top"
              src={props.imgPath}
              alt="card-img"
              className="card-img-top"
            />
          </Col>

          {/* Text Content */}
          <Col md={8}>
            <Card.Title className="card-title">{props.title}</Card.Title>

            {props.subtitle && (
              <Card.Subtitle
                className="mb-2 subtitle"
                style={{ fontStyle: "italic", color: "white" }}
              >
                {props.subtitle}
              </Card.Subtitle>
            )}

            {props.subtitle2 && (
              <Card.Subtitle
                className="mb-2 subtitle"
                style={{ fontStyle: "italic", color: "white" }}
              >
                {props.subtitle2}
              </Card.Subtitle>
            )}

            {props.subtitle3 && (
              <Card.Subtitle
                className="mb-2 subtitle"
                style={{ fontStyle: "italic", color: "white" }}
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
