import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import WhoWinsGamePage from "./pages/WhoWinGamePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IsItDrawGamePage from "./pages/IsItDrawGamePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/who-wins" component={WhoWinsGamePage} />
        <Route exact path="/is-it-draw" component={IsItDrawGamePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
