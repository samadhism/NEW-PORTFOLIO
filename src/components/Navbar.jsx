import { motion } from 'framer-motion';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
          <div className="nav-links">
          <div className="logo">SM</div>
            <a href="#home" className="nav-link active">Home</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#services" className="nav-link">About</a>
            {/* <a href="#blog" className="nav-link">Blogs</a> */}
            <a href="#contact" className="nav-link">Contact</a>
          </div> 
      </div>
      
    </motion.nav>
  );
}

export default Navbar;
