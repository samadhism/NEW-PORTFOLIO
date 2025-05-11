import { motion } from 'framer-motion';
import '../Styles/About.css'

function About() {
  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <motion.div 
          className="about-content"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I am a Computer Science undergraduate with a passion for creating beautiful and functional web experiences. 
            Specializing in front-end development and UI/UX design, I combine technical expertise with creative design 
            thinking to build engaging digital solutions.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Front-end Development </li>
              <li>UI/UX Design</li>
              
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;