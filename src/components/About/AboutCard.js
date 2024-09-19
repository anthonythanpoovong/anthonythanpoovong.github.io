import React from "react";
import Card from "react-bootstrap/Card";
import {FaRunning } from "react-icons/fa";
import { GiGamepad, GiWeightLiftingUp, GiBasketballJersey   } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, <br /><br /> My name is <span className="purple">Anthony Thanpoovong </span>
            and I'm from <span className="purple"> Toronto, Ontario.</span>
            <br />
            I'm currently in my 5th year as a software engineering student at Toronto Metropolitan University
            <br />
            I'm passionate about software development, security engineering and mobile development.  
            <br />
            <br />
            In my free time, I enjoy
          </p>
          <ul>
            <li className="about-activity">
              <GiGamepad  /> Playing Video Games
            </li>
            <li className="about-activity">
              <GiWeightLiftingUp  /> Weight Lifting
            </li>
            <li className="about-activity">
              <FaRunning  /> Running
            </li>
            <li className="about-activity">
              <IoFastFoodOutline  /> Trying New Food Spots
            </li>
            <li className="about-activity">
              <GiBasketballJersey  /> Playing Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We are all destined for greatness"{" "}
          </p>
          <footer className="blockquote-footer">Anthony T</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
