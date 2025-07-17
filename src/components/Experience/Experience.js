import { Col, Container, Row } from "react-bootstrap";
import bgctk from "../../Assets/Projects/bgctk.png";
import eastside from "../../Assets/Projects/eastside.png";
import ezML from "../../Assets/Projects/ezML_2.png";
import ldrs from "../../Assets/Projects/ldrs.png";
import scotiabank from "../../Assets/Projects/scotiabank.png";
import td from "../../Assets/Projects/td.png";
import telus from "../../Assets/Projects/telus.png";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          <strong className="purple">Relevant Work Experience</strong>
        </h1>
        <p style={{ color: "white" }}>Here are my past work experiences</p>
        <Row className="justify-content-center mt-4">
          {" "}
          {/* Added mt-4 for margin-top */}
          <Col md={8} className="d-flex flex-column align-items-center">
            <div className="mb-4">
              <ExperienceCard
                imgPath={telus}
                isBlog={false}
                title="Incoming Cybersecurity Engineer"
                subtitle="Telus"
                subtitle2="October 2025 - Present"
                subtitle3="Toronto, ON"
                bullets={[
                  "Technology Specialist GTLP - TELUS Cybersecurity Engineer",
                ]}
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={ezML}
                isBlog={false}
                title="Software Engineer Intern"
                subtitle="ezML"
                subtitle2="February 2024 - April 2024"
                subtitle3="San Francisco, CA"
                bullets={[
                  "Deployed a cloud-based server to store videos for ezML’s computer vision program",
                  "Developed a front-end interface for customers to schedule a consultation with ezML",
                  "Worked with the back-end team to conduct code reviews on CV pipelines",
                ]}
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={scotiabank}
                isBlog={false}
                title="Security Engineer Intern"
                subtitle="Scotiabank"
                subtitle2="September 2023 - December 2023"
                subtitle3="Toronto, ON"
                bullets={[
                  "Performed a backup of the MySQL database and executed a vault migration due to an update to RHEL8",
                  "Deploying vaults through Scotiabank’s Linux servers on unresponsive servers to increase client efficiency by 20%",
                  "Managing API calls to the vault and the MySQL server while deploying visual data on PowerBI",
                  "Researching and documenting the Confluence pages on the threats and use cases of Quantum Cryptography",
                ]}
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={td}
                isBlog={false}
                title="Quality Engineer Intern"
                subtitle="TD Bank"
                subtitle2="May 2023 - August 2023"
                subtitle3="Toronto, ON"
                bullets={[
                  "Collaborated in a small team of 10 to extract data from TD’s Wealth and Finance databases using SQL",
                  "Composed over 100 feature files for the Security Management Team and DaaS platforms using Java and Selenium",
                  "Tested and mapped the traceability of the data through several test cases and TD automated tools to increase efficiency by 20%",
                  "Developed scripts that automated tasks such as database backups and restore servers, saving approximately 20 hours per week",
                ]}
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={eastside}
                isBlog={false}
                title="Software Developer"
                subtitle="Eastside"
                subtitle2="January 2023 - August 2023"
                subtitle3="Toronto, ON"
                bullets={[
                  "Supported in the development of the company's website using Tailwind CSS, React.js and Material UI",
                  "Planned weekly sprints using Jira",
                  "Updated and maintained the company's website with new contentm, videos and photos",
                ]}
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={ldrs}
                isBlog={false}
                title="Full Stack Developer Intern"
                subtitle="LDRS Investments Incorporated"
                subtitle2="January 2023 - April 2023"
                subtitle3="Toronto, ON"
                bullets={[
                  "Produced a full-stack website in a small team of 4 using Django, MySQL, Python, Javascript and React.Js",
                  "Designed an instantaneous chat feature for customer-to-service representatives using Django channels and React.Js that helped increase customer service by 70%",
                  "Implemented a login-authentication screen for newly registered users that boasts the security of the platform by 36%",
                  "Devised and upheld sprints through Trello and Git Bash to increase efficiency by 22%",
                ]}
              />
            </div>
            <div className="mb-4">
              <ExperienceCard
                imgPath={bgctk}
                isBlog={false}
                title="Kids Tech Nation Mentor"
                subtitle="BGCTK"
                subtitle2="September 2022 - December 2022"
                subtitle3="Toronto, ON"
                bullets={[
                  "Devised a curriculum for kids to learn Scratch",
                  "Created weekly presentations and tasks for each new topic",
                  "Raised over $5000 in funding for new equipment such as laptops, tablets, keyboards and etc..",
                ]}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
