import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import PortfolioPage from "./Components/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/portfoliopage" component={PortfolioPage} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
