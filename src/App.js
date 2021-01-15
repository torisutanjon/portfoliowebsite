import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import PortfolioPage from "./Components/PortfolioPage";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path='"/portfoliowebsite/' component={LandingPage} />
          <Route path='"/portfoliowebsite/' component={PortfolioPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
