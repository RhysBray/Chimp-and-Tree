import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import PlayGame from "./containers/game-play";
import Menu from "./components/menu/menu";
import PageNotFound from "./containers/not-found";
import { Provider } from "react-redux";
import store from "./store";
import PauseMenu from "./components/pause-menu/pause-menu";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <section>
          <Switch>
            <Route path="/page-not-found" component={PageNotFound} />
            <Route path="/(menu|)" component={Menu} />
            <Route path="/play" component={PlayGame} />
            <Route path="/pause" component={PauseMenu} />
            <Redirect to="/page-not-found" />
          </Switch>
        </section>
      </Provider>
    );
  }
}

export default App;
