import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="intro">
      <div className={"intro", "paralax"}>
        <div className="intro--overlay"></div>
        <div className="intro--textContainer">
          <h1 className="intro--textContainer-person">Some Name</h1>
          <p className="intro--textContainer-title">Resume</p>
        </div>
      </div>
    </div>

  );
}

export default App;
