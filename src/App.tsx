import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import PlayGame from "./containers/game-play";
import Menu from "./components/menu/menu";
import PageNotFound from "./containers/not-found";

class App extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path="/page-not-found" component={PageNotFound} />
          <Route path="/(menu|)" component={Menu} />
          <Route path="/play" component={PlayGame} />
          <Redirect to="/page-not-found" />
        </Switch>
      </section>
    );
  }
}

export default App;
