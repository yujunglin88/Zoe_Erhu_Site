import { Routes, Route } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Home from './pages/Home/Home';
import Class from './pages/Class/Class';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;