import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./game-play.module.scss";
import Branch from "../components/tree-branches/treeBranches";
import LeftBranch from "../imgs/leftBranch.png";
import RightBranch from "../imgs/rightBranch.png";
import BothBranches from "../imgs/bothBranches.png";
import Monkey from "../components/monkey/monkey";

export interface IProps {}

export interface IState {
  branch: string;
}

class PlayGame extends React.Component<IProps, IState> {
  public state = { branch: "" };

  public branchRand() {
    let random = Math.floor(Math.random() * 3 + 1);

    // switch (random) {
    //   case 1:
    //     this.state.branch = LeftBranch;
    //     return;
    //   case 2:
    //     this.state.branch = RightBranch;
    //     return;
    //   case 3:
    //     this.state.branch = BothBranches;
    //     return;
    // }

    if (random === 1) {
      this.state.branch = LeftBranch;
    } else if (random === 2) {
      this.state.branch = RightBranch;
    } else {
      this.state.branch = BothBranches;
    }
  }

  public render() {
    let branchArray = ["branch", "branch"];
    return (
      <div className={styles.gameContainer}>
        {this.branchRand()}
        <Branch branch={this.state.branch} />
        {this.branchRand()}
        <Branch branch={this.state.branch} />
        {this.branchRand()}
        <Branch branch={this.state.branch} />
        {this.branchRand()}
        <Branch branch={this.state.branch} />
        {this.branchRand()}
        <Branch branch={this.state.branch} />
        {this.branchRand()}
        <Branch branch={this.state.branch} />
        <Monkey />
      </div>
    );
  }
}

export default PlayGame;
