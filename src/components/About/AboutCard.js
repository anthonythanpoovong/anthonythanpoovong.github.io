import Card from "react-bootstrap/Card";
import { FaRunning } from "react-icons/fa";
import {
  GiBasketballJersey,
  GiGamepad,
  GiWeightLiftingUp,
} from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, <br />
            <br /> My name is{" "}
            <span className="purple">Anthony Thanpoovong </span>
            and I'm from <span className="purple"> Toronto, Ontario.</span>
            <br />
            I'm a recent new graduate from Toronto Metropolitan University with
            a degree in <span className="purple"> Software Engineering.</span>.
            <br />
            I'm passionate about software development, security and AI related
            work.
            <br />
            <br />
            In my free time, I enjoy
          </p>
          <ul>
            <li className="about-activity">
              <GiGamepad /> Playing Video Games
            </li>
            <li className="about-activity">
              <GiWeightLiftingUp /> Weight Lifting
            </li>
            <li className="about-activity">
              <FaRunning /> Running
            </li>
            <li className="about-activity">
              <IoFastFoodOutline /> Trying New Food Spots
            </li>
            <li className="about-activity">
              <GiBasketballJersey /> Playing Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is how high you bounce when you hit bottom"{" "}
          </p>
          <footer className="blockquote-footer">Anthony T</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
