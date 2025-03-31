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
              LET ME <span className="purple"> INTRO</span>DUCE MYSELF
            </h1>
            <p className="home-about-body">
              I started programming in early 2020, when I joined Software
              Engineering department at AAU.
              <br />
              <br />I first started with Python then worked on web development
              for a while.
              <br />
              And my favorite coding language has been
              <i>
                <b className="purple"> Javascript </b> and I'm conversant with
                React, Python and, sometimes django 🚀!
              </i>
              <br />
              <br />
              I'm highly interested in &nbsp;
              <i>
                <b className="purple">Web Development </b> and also in{" "}
                <b className="purple">UI/UX Designing</b>
              </i>
              <br />
              <br />
              I worked as a Frontend Developer at 
              <b className="purple"> Xcel Tec</b> where I
              <i>
                <b className="purple"> honed my skills </b>
              </i>
              &nbsp; by
              <b className="purple"> Practice</b>   creating engaging, responsive interfaces and collaborated on building robust web applications
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
                  href="https://github.com/BiruktawitAbera"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/biruktawit-abera-421632242/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/biruktawit_abera/?__pwa=1#"
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
