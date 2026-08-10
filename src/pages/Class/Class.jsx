import './Class.css';

function Class() {
  return (
    <>
      <div className="Class">
        <header className="Class-header">
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