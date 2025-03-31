import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import budgetwise from "../../Assets/Projects/budgetwise.jpg";
import crm from "../../Assets/Projects/crm.jpg";
import foodrecipe from "../../Assets/Projects/foodrecipe.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetwise}
              isBlog={false}
              title="budget-wise"
              description="organizational finance tracking web app "
              demoLink="https://github.com/BiruktawitAbera/Organizational_Finance_Tracking_Front_end.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="crm"
              description="A Human resource management system for Xcel tech campany"
              demoLink="https://github.com/BiruktawitAbera/crm.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="Online cloth shopping"
              demoLink="https://github.com/BiruktawitAbera/Online-cloth-shopping.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodrecipe}
              isBlog={false}
              title="UI/UX Designs"
              description="A collection of my UI/UX designs"
              demoLink="https://github.com/BiruktawitAbera/food-recipe-design/raw/main/Food-Recipe.pdf
" // Replace with the actual path
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
