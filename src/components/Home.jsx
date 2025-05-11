import { motion } from 'framer-motion';
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
         Samadhi Munasinghe
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
      </div>
    </section>
  );
}

export default Home;