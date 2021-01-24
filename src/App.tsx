import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { WhoWinGamePage as WhoWonGamePage } from "./pages/WhoWonGamePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/who-won" component={WhoWonGamePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
