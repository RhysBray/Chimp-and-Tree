import React, { Component } from "react";
import "./App.css";
import LeftTree from "./components/tree-branches/leftTree/left-tree-branch";
import RighTree from "./components/tree-branches/rightTree/right-tree-branch";
import BothTree from "./components/tree-branches/bothTree/both-tree-branches";
import BottomTree from "./components/tree-branches/bottomTree/bottomTree";

class App extends Component {
  render() {
    return (
      <section>
        <LeftTree />
        <RighTree />
        <BothTree />
        <BottomTree />
      </section>
    );
  }
}

export default App;
