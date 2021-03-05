import React from "react";
import "./Styles/LandingPageStyles.css";
import MediaQuery from "react-responsive";
import leftArrowHead from "./Images/left-arrow-head.png";
import rightArrowHead from "./Images/right-arrow-head.png";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "<More About Me/>",
      phoneViewBgColor: "rgb(196, 196, 196, 0.16)",
      phoneViewColor: "white",
      phoneViewWidth: "20px",
      phoneViewDisplay: "none",
      phoneViewArrow: leftArrowHead,
    };
  }

  scrollEventHandler = () => {
    if (window.scrollY === 0) {
      this.setState({ phoneViewBgColor: "rgb(196, 196, 196, 0.16)" });
      this.setState({ phoneViewColor: "white" });
    } else {
      this.setState({ phoneViewBgColor: "White" });
      this.setState({ phoneViewColor: "#6B6B6B" });
    }
  };

  hiddenButtonHandler = () => {
    if (this.state.phoneViewWidth === "20px") {
      this.setState({
        phoneViewWidth: "90px",
        phoneViewDisplay: "flex",
        phoneViewArrow: rightArrowHead,
      });
    } else if (this.state.phoneViewWidth === "90px") {
      this.setState({
        phoneViewWidth: "20px",
        phoneViewDisplay: "none",
        phoneViewArrow: leftArrowHead,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEventHandler);
  }

  render() {
    return (
      <div className="landingpage-div">
        <div
          className="landingpage-topnav-container"
          style={{
            background: this.state.phoneViewBgColor,
          }}
        >
          <div className="landingpage-topnav">
            <MediaQuery minWidth={1280}>
              <div>
                <a className="topnav__atag" href="/">
                  Tristan John Girao
                </a>
              </div>
              <div>
                <a className="topnav__atag" href="/portfoliopage">
                  My Portfolio
                </a>
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={1280}>
              <div>
                <a
                  className="topnav__atag"
                  href="/"
                  style={{ fontWeight: 500, color: this.state.phoneViewColor }}
                >
                  Tristan John Girao
                </a>
              </div>
              <div>
                <a
                  className="topnav__atag"
                  href="/portfoliopage"
                  style={{ color: this.state.phoneViewColor }}
                >
                  My Portfolio
                </a>
              </div>
            </MediaQuery>
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
            <MediaQuery minWidth={1280}>
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
            </MediaQuery>
            <MediaQuery maxWidth={1280}>
              <div
                className="mylinks__container"
                style={{ width: this.state.phoneViewWidth }}
              >
                <button
                  className="hidden-btn"
                  type="button"
                  onClick={this.hiddenButtonHandler}
                  style={{
                    background: `url(${this.state.phoneViewArrow})`,
                    backgroundSize: this.state.phoneViewBGSize,
                    backgroundPosition: this.state.phoneViewBGPosition,
                    backgroundRepeat: this.state.phoneViewBGRepeat,
                  }}
                ></button>
                <div
                  className="landingpage-mylinks"
                  style={{ display: this.state.phoneViewDisplay }}
                >
                  <div
                    className="mylinks fb"
                    onClick={() =>
                      window.open("https://web.facebook.com/tristanjohn.girao")
                    }
                  ></div>
                  <div
                    className="mylinks twitter"
                    onClick={() =>
                      window.open("https://twitter.com/GiraoJ4nj4n")
                    }
                  ></div>
                  <div
                    className="mylinks instagram"
                    onClick={() =>
                      window.open("https://www.instagram.com/j4nj4n6403/")
                    }
                  ></div>
                  <div
                    className="mylinks github"
                    onClick={() =>
                      window.open("https://github.com/torisutanjon")
                    }
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
            </MediaQuery>
          </div>
          <div className="landingpage-footer">
            <div className="footer-learnmore">
              <p onClick={() => (window.location = "#section2")}>Learn More</p>
            </div>
          </div>
        </section>
        <section id="section2">
          <div className="landingpage-section2-bodydiv">
            <div className="aboutme__container">
              <div className="more-about-me-div">{this.state.text}</div>
              <div className="more-about-me-content-div">
                I view writing code and thinking what to code as a good past
                time and a good fuel to my liking in problem solving. I may not
                be good at it, but it still gives me an interesting feeling when
                I make mistakes and learning new things. Even it makes me feel
                bored sometimes on sometimes that I just have no idea on the
                problem but that’s what makes solving it feels better. Been
                doing some small projects for practice and hoping to have a real
                experience in industry, which I think will make me face things
                and situations that I’ve never been into and make me realise it.
              </div>
            </div>
            <div className="landingpage-section2-footer">
              <div className="top-div">
                <p>You can reach me at :</p>
              </div>
              <div className="mid-div">
                <div
                  className="footerlink fb"
                  onClick={() =>
                    window.open("https://web.facebook.com/tristanjohn.girao")
                  }
                ></div>
                <div
                  className="footerlink twitter"
                  onClick={() => window.open("https://twitter.com/GiraoJ4nj4n")}
                ></div>
                <div
                  className="footerlink instagram"
                  onClick={() =>
                    window.open("https://www.instagram.com/j4nj4n6403/")
                  }
                ></div>
                <div
                  className="footerlink github"
                  onClick={() => window.open("https://github.com/torisutanjon")}
                ></div>
                <div
                  className="footerlink linkedin"
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
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
