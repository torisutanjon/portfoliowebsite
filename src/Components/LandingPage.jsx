import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/LandingPageStyles.css";
const LandingPage = () => {
  const [text] = useState("< More About Me />");
  return (
    <div className="landingpage-div">
      <section id="section1">
        <div className="landingpag-section1-topnav">
          <div className="landingpage-topnav1-home">
            <Link to="/">Tristan John Girao</Link>
          </div>
          <div className="landingpage-topnav1-portfolio">
            <Link to="/portfoliopage">My Portfolio</Link>
          </div>
        </div>
        <div className="landingpage-section1-bodydiv">
          <div className="landingpage-myinfo">
            <div className="myinfo-name">
              <p>Tristan John P. Girao</p>
            </div>
            <div className="myinfo-aboutme">
              <p>Eager to be a web and app developer</p>
              <p>Adaptive · Thinker · Team Player · Introvert ·</p>
              <p>A funny Person</p>
            </div>
          </div>
          <div className="landingpage-mylinks">
            <div className="mylinks-fb"></div>
            <div className="mylinks-twitter"></div>
            <div className="mylinks-instagram"></div>
            <div className="mylinks-github"></div>
            <div className="mylinks-linkedin"></div>
          </div>
        </div>
        <div className="landingpage-footer">
          <div className="footer-learnmore">
            <p onClick={() => (window.location = "#section2")}>Learn More</p>
          </div>
        </div>
      </section>
      <section id="section2">
        <div className="landingpage-section2-topnav">
          <div className="landingpage-topnav2-home">
            <p onClick={() => (window.location = "#section1")}>
              Tristan John Girao
            </p>
          </div>
          <div className="landingpage-topnav2-portfolio">
            <Link to="/portfoliopage">My Portfolio</Link>
          </div>
        </div>
        <div className="landingpage-section2-bodydiv">
          <div className="more-about-me-div">{text}</div>
          <div className="more-about-me-content-div">
            I view writing code and thinking what to code as a good past time
            and a good fuel to my liking in problem solving. I may not be good
            at it, but it still gives me an interesting feeling when I make
            mistakes and learning new things. Even it makes me feel bored
            sometimes on sometimes that I just have no idea on the problem but
            that’s what makes solving it feels better. Been doing some small
            projects for practice and hoping to have a real experience in
            industry, which I think will make me face things and situations that
            I’ve never been into and make me realise it.
          </div>
        </div>
        <div className="landingpage-section2-footer">
          <div className="top-div">
            <p>You can reach me at :</p>
          </div>
          <div className="mid-div">
            <div className="mylinks-fb"></div>
            <div className="mylinks-twitter"></div>
            <div className="mylinks-instagram"></div>
            <div className="mylinks-github"></div>
            <div className="mylinks-linkedin"></div>
          </div>
          <div className="bottom-div">
            <p> Copyright &copy; Tristan John P. Girao 2021</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
