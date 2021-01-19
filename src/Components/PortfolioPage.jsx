import React from "react";
import "./Styles/MyPortfolioPageStyles.css";
const PortfolioPage = () => {
  return (
    <div className="portfoliopage-bodydiv">
      <div className="portfoliopage-topdiv-container">
        <div className="portfoliopage-topdiv">
          <div>
            <a href="/">Tristan John Girao</a>
          </div>
          <div>
            <a href="/portfoliopage">My Portfolio</a>
          </div>
        </div>
      </div>
      <div className="portfoliopage-maindiv">
        <div className="my-top-projects-body-div">
          <div className="my-top-projects-top-div">
            <p className="my-top-projects-p">My Top Projects</p>
          </div>
          <div className="my-top-projects-main-div">
            <div className="projectdiv div1">
              <div
                className="project-topdiv"
                onClick={() =>
                  window.open(
                    "https://github.com/torisutanjon/FirstComeFirstServeCPUAlgo"
                  )
                }
              ></div>
              <div
                className="project-bottomdiv"
                onClick={() =>
                  window.open(
                    "https://github.com/torisutanjon/FirstComeFirstServeCPUAlgo"
                  )
                }
              >
                <p>First Come First Serve CPU Scheduling Algorithm</p>
              </div>
            </div>
            <div className="projectdiv div2">
              <div
                className="project-topdiv"
                onClick={() =>
                  window.open(
                    "https://github.com/torisutanjon/Shortest-Job-First-Pre-Emptive"
                  )
                }
              ></div>
              <div
                className="project-bottomdiv"
                onClick={() =>
                  window.open(
                    "https://github.com/torisutanjon/Shortest-Job-First-Pre-Emptive"
                  )
                }
              >
                <p>Shortest Job First Pre-Emptive CPU Scheduling Algorithm</p>
              </div>
            </div>
            <div className="projectdiv div3">
              <div
                className="project-topdiv"
                onClick={() =>
                  window.open("https://github.com/torisutanjon/ecommerceapp")
                }
              ></div>
              <div
                className="project-bottomdiv"
                onClick={() =>
                  window.open("https://github.com/torisutanjon/ecommerceapp")
                }
              >
                <p>E-Commerce Website Application (Unfinished Yet)</p>
              </div>
            </div>
            {/* <div className="projectdiv div4">
              <div className="project-topdiv"></div>
              <div className="project-bottomdiv">
                <p>Project 4</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="technologies-i-use-body-div">
          <div className="technologies-i-use-top-div">
            <p className="technologies-i-use-p">Technologies I Use</p>
          </div>
          <div className="technologies-i-use-main-div">
            <div className="technologies-div div1">
              <div className="technologies-topdiv">
                <p>Programming Languages</p>
              </div>
              <div className="technologies-maindiv">
                <div className="left-ul">
                  <ul>
                    <li>JavaScript</li>
                    <li>HTML 5</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div className="right-ul">
                  <ul>
                    <li>Java</li>
                    <li>c#</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="technologies-div div2">
              <div className="technologies-topdiv">
                <p>Platforms</p>
              </div>
              <div className="technologies-maindiv">
                <ul className="whole-ul">
                  <li>Web Development(Comfortable)</li>
                  <li>
                    Desktop Application Development (Have Experience Before
                    Using Java and C#)
                  </li>
                  <li>
                    Android Application Development (Have Experience Before
                    Using Java)
                  </li>
                </ul>
              </div>
            </div>
            <div className="technologies-div div3">
              <div className="technologies-topdiv">
                <p>Operating System/s</p>
              </div>
              <div className="technologies-maindiv">
                <ul className="whole-ul">
                  <li>Windows</li>
                </ul>
              </div>
            </div>
            <div className="technologies-div div4">
              <div className="technologies-topdiv">
                <p>Other Stuffs</p>
              </div>
              <div className="technologies-maindiv">
                <ul className="left-ul">
                  <li>Visual Studio Code (Web Development)</li>
                  <li>GitHub</li>
                  <li>NetBeans</li>
                </ul>
                <ul className="right-ul">
                  <li>Netlify</li>
                  <li>Android Studio (JAVA)</li>
                  <li>Visual Studio (C#)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
