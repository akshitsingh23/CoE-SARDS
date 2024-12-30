import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Events from '../src/components/pastevents/Events';
import Footer from './components/footer/Footer';
import Team from '../src/components/Team/Team';
import Contact from '../src/components/Contact/Contact';
import Courses from '../src/components/Courses/Courses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router basename='/coe-sards'>
      <div>
        < div className="bg-black" >
          {/* <Home /> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
          <Footer />
        </div >
      </div>
    </Router>
  );
}

export default App;
