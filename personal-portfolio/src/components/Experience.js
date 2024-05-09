import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project 1.png";
import projImg2 from "../assets/img/project 2.png";
import projImg3 from "../assets/img/project 3.png";
import projImg4 from "../assets/img/project 4.png";
import projImg5 from "../assets/img/project 5.PNG";
import projImg6 from "../assets/img/project 6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {

  const projects = [
    {
      title: "SneekyKleen",
      description: " Sneaker cleaning services",
      url: "https://sneakykleenz.netlify.app/",
      imgUrl: projImg1,
      
    },
    {
      title: "Techno Champs",
      description: "Travel Agency",
      url: "https://technochampstouring.netlify.app/",
      imgUrl: projImg2,
    },
    {
      title: "FindersHub Landing Page",
      description: "Landing Page",
      url: "https://findershub.netlify.app/",
      imgUrl: projImg3,
    },
    {
      title: "FindersHub ",
      description: "Lost and Found App",
      url: "https://findershub.netlify.app/indexes",
      imgUrl: projImg4,
    },
    {
      title: "My Portfolio",
      description: "HTML, CSS, Javascript Portfolio",
      url: "https://bukhosomhlahaloportfolio.netlify.app",
      imgUrl: projImg5,
    },
    {
      title: "Python Quiz App",
      description: "Beginner App",
      imgUrl: projImg6,
    },
  ];
 




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Demos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
