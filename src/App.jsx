// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import About from './components/About';
// import Contact from './components/Contact';
// import Blog from './components/Blog';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/blog" element={<Blog />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
