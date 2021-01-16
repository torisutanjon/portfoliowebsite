import React, { useState, useEffect } from "react";
import "./Styles/LandingPageStyles.css";

const LandingPage = () => {
  const [text] = useState("< MORE ABOUT ME />");

  return (
    <div className="landingpage-div">
      <div className="landingpage-topnav-container">
        <div className="landingpage-topnav">
          <div>
            <a href="/" style={{ fontWeight: 500 }}>
              Tristan John Girao
            </a>
          </div>
          <div>
            <a href="/portfoliopage">My Portfolio</a>
          </div>
        </div>
      </div>
      <section id="section1">
        <div className="landingpage-section1-bodydiv">
          <div className="landingpage-myinfo-container">
            <div className="landingpage-myinfo">
              <p className="myname">Tristan John P. Girao</p>
              <p>Eager to be a web and app developer</p>
              <p>Adaptive · Thinker · Team Player · Introvert ·</p>
              <p>A funny Person</p>
            </div>
          </div>
          <div className="landingpage-mylinks">
            <div
              className="mylinks fb"
              onClick={() =>
                window.open("https://web.facebook.com/tristanjohn.girao")
              }
            ></div>
            <div
              className="mylinks twitter"
              onClick={() => window.open("https://twitter.com/GiraoJ4nj4n")}
            ></div>
            <div
              className="mylinks instagram"
              onClick={() =>
                window.open("https://www.instagram.com/j4nj4n6403/")
              }
            ></div>
            <div
              className="mylinks github"
              onClick={() => window.open("https://github.com/torisutanjon")}
            ></div>
            <div
              className="mylinks linkedin"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tristan-john-girao-69521a201/"
                )
              }
            ></div>
          </div>
        </div>
        <div className="landingpage-footer">
          <div className="footer-learnmore">
            <p onClick={() => (window.location = "#section2")}>Learn More</p>
          </div>
        </div>
      </section>
      <section id="section2">
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
            <div
              className="mylinks fb"
              onClick={() =>
                window.open("https://web.facebook.com/tristanjohn.girao")
              }
            ></div>
            <div
              className="mylinks twitter"
              onClick={() => window.open("https://twitter.com/GiraoJ4nj4n")}
            ></div>
            <div
              className="mylinks instagram"
              onClick={() =>
                window.open("https://www.instagram.com/j4nj4n6403/")
              }
            ></div>
            <div
              className="mylinks github"
              onClick={() => window.open("https://github.com/torisutanjon")}
            ></div>
            <div
              className="mylinks linkedin"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tristan-john-girao-69521a201/"
                )
              }
            ></div>
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
