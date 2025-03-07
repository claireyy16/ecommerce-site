import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Badge } from 'react-bootstrap';
import './portfolio.css';

const Portfolio = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Claire's Crochet E-commerce",
      description: "An e-commerce site built with React and Stripe integration for selling crocheted items.",
      image: "/images/crochet-ecommerce.jpg", // Replace with your actual image path
      techStack: ["React", "Stripe API", "Bootstrap", "CSS"],
      githubLink: "https://github.com/claireyy16/ecommerce-site",
      liveLink: "https://claireycrochet.netlify.app",
      longDescription: "This project was created to combine my passion for crocheting with web development. It features a full shopping cart system, Stripe payment integration, and responsive design. Users can browse products, add them to cart, and checkout securely."
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my skills and projects.",
      image: "/images/portfolio.jpg", // Replace with your actual image path
      techStack: ["React", "CSS", "JavaScript"],
      githubLink: "https://github.com/claireyy16/portfolio",
      liveLink: "https://clairecui.dev",
      longDescription: "My personal portfolio site designed to showcase my skills and projects. Features a clean, modern design with sections for about me, skills, projects, and contact information."
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for managing daily tasks and projects.",
      image: "/images/task-app.jpg", // Replace with your actual image path
      techStack: ["React", "Firebase", "Material UI"],
      githubLink: "https://github.com/claireyy16/task-manager",
      liveLink: "https://taskmanager-demo.netlify.app",
      longDescription: "A comprehensive task management application that allows users to create, organize, and track their tasks. Features include task categorization, due dates, priority levels, and progress tracking."
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
      <p className="projects-subtitle">Check out some of my recent work</p>
      
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