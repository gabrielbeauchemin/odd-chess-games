import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { WhoWinGamePage as WhoWonGamePage } from "./pages/WhoWinGamePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/who-wins" component={WhoWonGamePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
