import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Home.css'

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         SAMADHI
         MUNASINGHE
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Crafting exceptional digital experiences through clean code and 
          thoughtful design. Bridging the gap between technical 
          excellence and creative innovation.
        </motion.p>
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="btn">View Work</a>
        </motion.div>

        <motion.div
          className= "hero-icon"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
    
        <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", fontSize: "28px" }} />
        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffffff", fontSize: "28px" }} />
        <FontAwesomeIcon icon={faBehance} style={{ color: "#ffffff", fontSize: "28px" }} />

    
        </motion.div>


        <motion.div
          className="hero-ctaa"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#contact" className="btn2">Get In Touch</a>
        </motion.div>

        <p className='scroll'>scroll</p>

      </div>
    </section>
  );
}

export default Home;