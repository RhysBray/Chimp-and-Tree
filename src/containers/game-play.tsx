import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./game-play.module.scss";
import Branch from "../components/tree-branches/treeBranches";
import leftBranch from "../imgs/leftBranch.png";
import rightBranch from "../imgs/rightBranch.png";
import bothBranches from "../imgs/bothBranches.png";
import bottomBranch from "../imgs/bottomBranch.png";
import Monkey from "../components/monkey/monkey";
import Layout from "../components/key-pressed";

export interface IProps {}

export interface IState {
  branch: string;
  branchArray: string[];
}

class PlayGame extends React.Component<IProps, IState> {
  public state = { branch: "", branchArray: [""] };
  public branchArray = [leftBranch, rightBranch, bothBranches, bottomBranch];

  // public branchRand() {
  //   let random = Math.floor(Math.random() * 3 + 1);
  //   if (random === 1) {
  //     this.state.branch = leftBranch;
  //   } else if (random === 2) {
  //     this.state.branch = rightBranch;
  //   } else {
  //     this.state.branch = bothBranches;
  //   }
  // }

  public render() {
    return (
      <div className={styles.gameContainer}>
        {this.branchArray.map(index => {
          return <Branch branch={index} />;
        })}
        <Monkey />
        <Layout />
      </div>
    );
  }
}

export default PlayGame;
