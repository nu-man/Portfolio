import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="main">
        <div className="hero">
          <div className="nav">
            <Link to="#">Mohd Numan</Link>
            <h4>Menu+</h4>
          </div>
          <div className="heading">
            <h1>Full-Stack</h1>
            <div className="blocktext">
              <h1 id="secondh1">Developer</h1>
              <h5>Based in Hyderabad</h5>
            </div>
          </div>
          <div className="subheading">
            <h5>Available for full time opportunities/freelance</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
