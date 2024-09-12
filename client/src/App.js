import "./App.css";
import pic from "./components/assets/photo.png";
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
          <div className="herofooter">
            <a href="#">
              perviously worked at Ocatnet services
              <i class="ri-arrow-right-up-line"></i>
            </a>
            <a href="#">
              perviously worked at multipier AI solutions{" "}
              <i class="ri-arrow-right-up-line"></i>
            </a>
            <div className="iconset">
              <div className="circle">
                <i class="ri-arrow-down-line"></i>
              </div>
              <div className="circle">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          {/* <h1>Projects</h1> */}
          <div className="element">
            <h1>Github search engine</h1>
          </div>
          <div className="element">
            <h1>bomb game</h1>
          </div>
          <div className="element elementlast">
            <h1>Clock projects</h1>
          </div>
        </div>
        <div className="about">
          <img src={pic} alt="Profile of Mohd Numan" />
          <div className="about-text">
            <h5>{"(About me)"}</h5>
            <p>
              Passionate Full Stack Developer specializing in the MERN stack and
              RESTful API integrations, I bring innovative, user-friendly
              solutions to life. With a knack for crafting responsive, scalable
              web applications, I transform complex designs into pixel-perfect,
              high-performance interfaces that offer a seamless user experience.
              My goal is to create web applications that not only look great but
              also deliver optimized functionality and performance.
            </p>
            <a>Let's talk</a>
          </div>
        </div>
        <div className="footer">
          <div className="footerleft">
            <h5>2024 &copy;</h5>
          </div>
          <div className="footerright">
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://github.com">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
