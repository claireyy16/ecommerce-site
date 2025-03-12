import React, { useState } from 'react';
import { Container, Card, Modal, Button, Badge } from 'react-bootstrap';
//Row, Col,
import './portfolio.css';

import commerce from '../assets/commerecePic.jpg';
import pacesim from '../assets/pacesimPic.jpg';
import nutrition from "../assets/nutrition.jpg";

const Portfolio = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Claire's Crochet E-commerce",
      description: "An e-commerce site built with React and Stripe integration for selling crocheted items.",
      image: commerce, // Replace with your actual image path
      techStack: ["React", "Stripe API", "Bootstrap", "CSS"],
      githubLink: "https://github.com/claireyy16/ecommerce-site",
      liveLink: "https://claireycrochet.netlify.app/store",
      longDescription: "This project was created to combine my passion for crocheting with web development. It features a full shopping cart system, Stripe payment integration, and responsive design. Users can browse products, add them to cart, and checkout securely."
    },
    {
      id: 2,
      title: "Pacemaker Simulator Training Game",
      description: "Training software for JHMI nurses that syncs to a Raspberry Pi simulator",
      image: pacesim, // Replace with your actual image path
      techStack: ["React", "CSS", "JavaScript", "Python", "Databasing"],
      githubLink: "https://github.com/claireyy16/portfolio",
      liveLink: "https://claireycrochet.netlify.app/",
      longDescription: "I worked with nurses from the Johns Hopkins Medical Institution to design training software for external pacemakers. On the left, is the screen for the external pacemaker simulator, which is a Raspberry Pi with corresponding dials. On the right, is our training interface where users log in and track their progress with each module."
    },
    {
      id: 3,
      title: "Nutrition Tracking App",
      description: "A macronutrient tracker with Nutritionix API search functionality to track your daily meals",
      image: nutrition, // Replace with your actual image path
      techStack: ["React", "Nutritionix API", "Tailwind"],
      githubLink: "https://github.com/claireyy16/task-manager",
      liveLink: "https://taskmanager-demo.netlify.app",
      longDescription: "A nutrition tracking app that allows you to set goals for the major macronutrients and track how you are doing each day. There is search functionality with the Nutritionix API so you can search for your food items and then find the information to put them into your tracker. I am working on auto inputting information from the API."
    },
    // Add more projects as needed
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">Check out some of my recent work
        <br/>I am currently working on multiple projects through work and design teams so this website is updating slowly - the live links do not work yet - but my <a href="https://drive.google.com/file/d/1OkY6Y0Yefewj6TAsj9m7iZr5u485KFvm/view?usp=sharing">resume</a> is more frequent as well as my LinkedIn and GitHub which can all be found in my <a href='/aboutme'>about me</a> section.
        <br/>Feel free to reach out to me to learn more about any of my projects or experience!
      </p>
      
      <div className="projects-row">
        {projects.map((project) => (
          <div key={project.id} className="project-col">
            <Card className="project-card">
              <div className="card-img-container">
                {project.image ? (
                  <Card.Img variant="top" src={project.image} className="project-image" />
                ) : (
                  <div className="placeholder-image">{project.title.charAt(0)}</div>
                )}
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} bg="secondary" className="tech-badge">{tech}</Badge>
                  ))}
                </div>
                <Button 
                  variant="primary" 
                  className="learn-more-btn"
                  onClick={() => handleShowModal(project)}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-img-container">
                {selectedProject.image ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="modal-project-image" 
                  />
                ) : (
                  <div className="modal-placeholder-image">
                    {selectedProject.title.charAt(0)}
                  </div>
                )}
              </div>
              
              <h5 className="mt-4 mb-3">Project Overview</h5>
              <p>{selectedProject.longDescription}</p>
              
              <h5 className="mb-3">Technologies Used</h5>
              <div className="tech-stack-modal">
                {selectedProject.techStack.map((tech, index) => (
                  <Badge key={index} bg="secondary" className="tech-badge-modal">{tech}</Badge>
                ))}
              </div>
              
              <div className="project-links mt-4">
                {selectedProject.githubLink && (
                  <Button 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    View on GitHub
                  </Button>
                )}
                {selectedProject.liveLink && (
                  <Button 
                    href={selectedProject.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    View Live Site
                  </Button>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Portfolio;