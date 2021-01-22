import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import PortfolioPage from "./Components/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/portfoliopage" component={PortfolioPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
