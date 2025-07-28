import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import budgetwise from "../../Assets/Projects/budgetwise.jpg";
import crm from "../../Assets/Projects/crm.jpg";
import foodrecipe from "../../Assets/Projects/foodrecipe.PNG";
import Ecommercee from "../../Assets/Projects/Ecommercee.PNG";
import Saas from "../../Assets/Projects/Saas.PNG";

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
              title="Budget-Wise"
              description="Organizational finance tracking web app"
              demoLink="https://github.com/BiruktawitAbera/Organizational_Finance_Tracking_Front_end.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="CRM"
              description="Human resource management system for Xcel Tech"
              demoLink="https://github.com/BiruktawitAbera/crm.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="Online cloth shopping platform"
              demoLink="https://github.com/BiruktawitAbera/Online-cloth-shopping.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodrecipe}
              isBlog={false}
              title="Food Recipe App"
              description="UI/UX design for recipe application"
              demoLink="https://github.com/BiruktawitAbera/food-recipe-design/raw/main/Food-Recipe.pdf"
            />
          </Col>
          
          {/* Figma Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommercee}
              isBlog={false}
              title="Data Wise"
              description="Figma design for Ecommerce website"
              demoLink="https://www.figma.com/design/YHLgBTsyGym811F5c3XCbe/Data-Wise?node-id=0-1&t=veCucmOHWXlraEIS-1"
            />
          </Col>

          {/* Figma Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Saas}
              isBlog={false}
              title="Saas Dashboard"
              description="UI design for SaaS platform"
              demoLink="https://www.figma.com/design/3jcVNyldjP9urtracEtcSD/Ecommerce-website?node-id=0-1&t=9gb3qbwmHPp6Jppg-1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;