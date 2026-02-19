import logo from './res/logo.png';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Welcome to Zoe Li's Erhu Studio!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           this is a hyperlink
        </a> */}
      </header>
    </div>
  );
}

export default Home;
