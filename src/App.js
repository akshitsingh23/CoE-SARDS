import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Events from '../src/components/pastevents/Events';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      < div className="bg-black " >
        {/* <Home /> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/sards" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
        {/* <Mou /> */}

      </div >
    </Router>
  );
}

export default App;
