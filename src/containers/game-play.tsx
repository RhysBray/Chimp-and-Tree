import * as React from "react";
import styles from "./game-play.module.scss";
import Branch from "../components/tree-branches/treeBranches";
import leftBranch from "../imgs/leftBranch.png";
import rightBranch from "../imgs/rightBranch.png";
import bothBranches from "../imgs/bothBranches.png";
import bottomBranch from "../imgs/bottomBranch.png";
import Monkey from "../components/monkey/monkey";
import Layout from "../components/key-pressed";
import { IStore } from "../reducers";
import { connect } from "react-redux";
import { checkKeyPressed } from "../reducers/generalReducer";
import PauseMenu from "../components/pause-menu/pause-menu";
import LayOut from "../components/key-pressed";

export interface IOwnProps {}

export interface IStateProps {
  keyPressed: any;
}

export interface IState {}

class PlayGame extends React.Component<IOwnProps & IStateProps, IState> {
  public state = {
    isFlipped: false
  };
  public branchArray = [
    leftBranch,
    rightBranch,
    bothBranches,
    bothBranches,
    rightBranch,
    leftBranch,
    rightBranch,
    bothBranches,
    bottomBranch
  ];

  public isFlipped = false;
  public branchRand() {
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1) {
      this.branchArray.push(leftBranch);
    } else if (random === 2) {
      this.branchArray.push(rightBranch);
    } else {
      this.branchArray.push(bothBranches);
    }
  }

  public render() {
    if (this.props.keyPressed === 37) {
      this.isFlipped = false;
    } else if (this.props.keyPressed === 39) {
      this.isFlipped = true;
    }

    return (
      <div className={styles.gameContainer}>
        {this.branchArray.map(index => {
          return <Branch branch={index} />;
        })}
        <Monkey isFlipped={this.isFlipped} />
        {this.props.keyPressed === 27 ? <PauseMenu /> : <div />}
        <LayOut />
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    keyPressed: state.general.keyPressed
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayGame);
