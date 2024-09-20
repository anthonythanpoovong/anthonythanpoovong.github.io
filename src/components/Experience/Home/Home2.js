import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Fun Facts About <span className="purple"> Me</span>
            </h1>
            <p className="home-about-body">
              My name is Anthony Thanpoovong and I'm 5th year Software Engineering Student
              <br />
              <br />I'm from South East and Eastern Asian, but I've lived in 
              <i>
                <b className="purple"> Toronto, Ontario </b>
              </i>
              my entire life
              <br />
              <br />
              My birthday is on
              <i>
                <b className="purple"> April Fools </b>
              </i>
              and coincidentally is the same birthday as Logan Paul and Randy Orton
              <br />
              <br />
              I love travelling and trying new food places. Places I've been to include
               <b className="purple"> Hong Kong, Thailand, Japan </b> and
              <i>
                <b className="purple">
                  {" "}
                  Miami.
                  {" "}
                </b>
              </i>
              For my graduation trip, I'm planning to go to Las Vegas!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anthonythanpoovong"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anthony-thanpoovong/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anthony.thanpoovong/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
