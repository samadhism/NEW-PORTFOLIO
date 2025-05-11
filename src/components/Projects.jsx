import { motion } from 'framer-motion';
import '../Styles/Projects.css'

function Projects() {
  const projects = [
    {
      title: "Smart Tutor",
      description: "A digital marketing platform that helps tutors promote their services online.The website makes it easy for teachers to build profiles, schedule lessons, and find new students. This tool helps tutors grow their business without needing skills. ",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "E-commerce Website",
      description: "Developed an interactive Android dice game using Kotlin, simulating a turn-based competition between a human player and the computer. Implemented core game mechanics including dice rolling, scoring logic, and optional re-rolls, adhering to specified rules",
      technologies: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <motion.section 
      className="section" id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;