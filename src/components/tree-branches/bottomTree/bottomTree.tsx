import * as React from "react";
import leftBranch from "../../../imgs/bottomBranch.png";
import styles from "./bottomTree.module.scss";

export interface IProps {}

export interface IState {}

class BottomTreeBranch extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles.branchContainer}>
        <img className={styles.branch} src={leftBranch} />
      </div>
    );
  }
}

export default BottomTreeBranch;
