import React from "react";
import "./Styles/MyPortfolioPageStyles.css";
import fcfsgif from "./Images/FCFS.gif";
import sjfgif from "./Images/SJF-Pre-Emptive.gif";
import ecommercegif from "./Images/ecommerce.gif";
import MediaQuery from "react-responsive";

const PortfolioPage = () => {
  return (
    <div className="portfoliopage-bodydiv">
      <div className="portfoliopage-topdiv-container">
        <div className="portfoliopage-topdiv">
          <a href="/">Tristan John Girao</a>
          <a href="/portfoliopage">My Portfolio</a>
        </div>
      </div>
      <div className="portfoliopage-maindiv">
        <MediaQuery minWidth={1280}>
          <div className="desktop__project__list">
            <div className="project__list__title">
              <p>My Projects List</p>
            </div>
            <div className="project__list__body">
              <div className="desktop__project__1__div">
                <div className="project__1__main">
                  <img
                    src={fcfsgif}
                    alt="FCFS Here"
                    onClick={() =>
                      window.open(
                        "https://github.com/torisutanjon/FirstComeFirstServeCPUAlgo"
                      )
                    }
                  />
                </div>
                <div
                  className="project__1__footer"
                  onClick={() =>
                    window.open(
                      "https://github.com/torisutanjon/FirstComeFirstServeCPUAlgo"
                    )
                  }
                >
                  <p>
                    First Come First Serve CPU Scheduling Algorithm Simulation
                  </p>
                </div>
              </div>
              <div className="desktop__project__2__div">
                <div className="project__2__main">
                  <img
                    src={sjfgif}
                    alt="SJF Here"
                    onClick={() =>
                      window.open(
                        "https://github.com/torisutanjon/Shortest-Job-First-Pre-Emptive"
                      )
                    }
                  />
                </div>
                <div
                  className="project__2__footer"
                  onClick={() =>
                    window.open(
                      "https://github.com/torisutanjon/Shortest-Job-First-Pre-Emptive"
                    )
                  }
                >
                  <p>
                    Shortest Job First Pre-Emptive Scheduling Algorithm
                    Simulation
                  </p>
                </div>
              </div>
              <div className="desktop__project__3__div">
                <div className="project__3__main">
                  <img
                    src={ecommercegif}
                    alt="E-Commerce Here"
                    onClick={() =>
                      window.open(
                        "https://github.com/torisutanjon/ecommerceapp"
                      )
                    }
                  />
                </div>
                <div
                  className="project__3__footer"
                  onClick={() =>
                    window.open("https://github.com/torisutanjon/ecommerceapp")
                  }
                >
                  <p>E-Commerce Website Application (Unfinished Yet)</p>
                </div>
              </div>
              {/* <div className="">
                <div className="project__1__main">

                </div>
                <div className='project__1__footer'>
                  
                </div>
                </div> */}
            </div>
          </div>
          <div className="desktop__technologies__list">
            <div className="technology__list__title">
              <p>Technologies I Use</p>
            </div>
            <div className="technology__list__body">
              <div className="desktop__pl__div">
                <div className="technology__body__title">
                  <p>Programming Languages</p>
                </div>
                <div className="technology__body body__row">
                  <div className="pl__leftside">
                    <ul>
                      <li>Javascript</li>
                      <li>HTML 5</li>
                      <li>CSS</li>
                    </ul>
                  </div>
                  <div className="pl__rightside">
                    <ul>
                      <li>Java</li>
                      <li>C#</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="desktop__platforms__div">
                <div className="technology__body__title">
                  <p>Platforms</p>
                </div>
                <div className="technology__body">
                  <ul>
                    <li>Web Development (Comfortable)</li>
                    <li>
                      Desktop Application Development (Have <br /> Experience
                      Before Using Java and C#)
                    </li>
                    <li>
                      Android Application Development <br />
                      Experience Before Using Java)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="desktop__os__div">
                <div className="technology__body__title">
                  <p>Operating Systems</p>
                </div>
                <div className="technology__body">
                  <ul>
                    <li>Windows</li>
                  </ul>
                </div>
              </div>
              <div className="desktop__others__div">
                <div className="technology__body__title">
                  <p>Other Stuffs</p>
                </div>
                <div className="technology__body  body__row">
                  <div className="others__leftside">
                    <ul>
                      <li>VS Code</li>
                      <li>Github</li>
                      <li>NetBeans</li>
                    </ul>
                  </div>
                  <div className="others__rightside">
                    <ul>
                      <li>Netlify</li>
                      <li>Android Studio</li>
                      <li>Visual Studio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1280}>
          <div className="project__list">
            <div className="project__list__title">
              <p>My Project List</p>
            </div>
            <div className="project__list__container">
              <ul className="project__list__ul">
                <li
                  onClick={() =>
                    window.open(
                      "https://github.com/torisutanjon/FirstComeFirstServeCPUAlgo"
                    )
                  }
                >
                  First Come First Serve CPU Scheduling Algorithm Simulator
                </li>
                <li
                  onClick={() =>
                    window.open(
                      "https://github.com/torisutanjon/Shortest-Job-First-Pre-Emptive"
                    )
                  }
                >
                  Shortest Job First : Pre-Emptive CPU Scheduling Algorithm
                  Simulator
                </li>
                <li
                  onClick={() =>
                    window.open("https://github.com/torisutanjon/ecommerceapp")
                  }
                >
                  E-Commerce Website Application (Unfinished Yet)
                </li>
              </ul>
            </div>
          </div>
          <div className="technologies__list">
            <div className="technologies__list__title">
              <p>Technologies I Use</p>
            </div>
            <div className="technologies_container">
              <div className="pl__div subdiv">
                <div className="technologies_title_div">
                  <p>Programming Languages</p>
                </div>
                <div className="technologies_list_container programming_languages_div">
                  <div>
                    <ul>
                      <li>Javascript</li>
                      <li>HTML 5</li>
                      <li>CSS 3</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Java</li>
                      <li>C#</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="field__div subdiv">
                <div className="technologies_title_div">
                  <p>Platforms</p>
                </div>
                <div className="technologies_list_container">
                  <ul>
                    <li>· Web Development (Comfortable)</li>
                    <li>
                      · Desktop Application Development (Have Experience Before
                      Using Java and C#)
                    </li>
                    <li>
                      · Android Application Development (Have Experience Before
                      Using Java)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="os__div subdiv">
                <div className="technologies_title_div">
                  <p>Operating System/s</p>
                </div>
                <div className="technologies_list_container">
                  <ul>
                    <li>Windows</li>
                  </ul>
                </div>
              </div>
              <div className="others__div subdiv">
                <div className="technologies_title_div">
                  <p>Other Stuffs</p>
                </div>
                <div className="technologies_list_container">
                  <ul>
                    <li>Visual Studio Code</li>
                    <li>Github</li>
                    <li>Netbeans</li>
                    <li>Netlify</li>
                    <li>Android Studio (Java)</li>
                    <li>Visual Sutdio (C#)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default PortfolioPage;
