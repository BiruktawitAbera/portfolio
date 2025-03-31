import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there <span className="purple">Biruktawit Abera </span> here.
            
            <br />I'm a software engineering student at Addis Ababa University.
            <br />
            <br />
            Apart from coding, what do I enjoy?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Self-esteem book
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You don’t need to make everything easy; instead, focus on staying consistent, as steady practice and persistence are key to mastering coding."{" "}
          </p>
          <footer className="blockquote-footer"> keep coding </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
