import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import PortfolioPage from "./Components/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />

        <Route path="/portfoliopage" component={PortfolioPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
