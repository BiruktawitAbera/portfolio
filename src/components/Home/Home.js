import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Particle from "../Particle";
import Intro from "./Intro";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> BIRUKTAWIT ABERA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center align-items-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid rounded-circle"
                style={{ maxWidth: "450px", height: "450px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Intro />
    </section>
  );
}

export default Home;
