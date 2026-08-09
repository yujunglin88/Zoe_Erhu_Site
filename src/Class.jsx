import logo from './res/logo.png';
import portrait from './res/portrait.jpg';
import './Class.css';
import NavBar from './componenets/Navbar';

function Class() {
  return (
    <>
      <NavBar/>
      <div className="Class">
        <header className="Class-header">
          <img src={logo} className="Class-logo" alt="logo" />
          <img src={portrait} className="Class-portrait" alt="portrait" />
          <h1 className="Class-heading">Classes</h1>
        </header>
      </div>
      <div className="Class-content">
        <p>Here is some information about our classes.</p>
        <a href="/classes" className="Class-link" target="_blank" rel="noopener noreferrer">
          View Our Classes
        </a>
      </div>
    </>
  );
}

export default Class;