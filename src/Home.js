import logo from './res/logo.png';
import portrait from './res/portrait.jpg';
import './Home.css';

function Home() {
  return (
    <>
      <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <img src={portrait} className="Home-portrait" alt="portrait" />
        <h1 className="Home-heading">Welcome to Zoe Li's Erhu Studio</h1>
        
      </header>
      </div>
      <div className="Home-content">
        <text>
          At Zoe Li's Erhu Studio, we are dedicated to providing high-quality erhu lessons for students of all ages and skill levels.{"\n"}
          Our experienced instructors are passionate about sharing their love for the erhu and helping students develop their musical talents.{"\n"}
          Whether you are a beginner looking to learn the basics or an advanced player seeking to refine your skills, we have a program that will suit your needs.{"\n"}
          Join us at Zoe Li's Erhu Studio and embark on a musical journey that will enrich your life and bring joy through the beautiful sounds of the erhu.{"\n"}
        </text>
      </div>
    </>
  );
}

export default Home;
