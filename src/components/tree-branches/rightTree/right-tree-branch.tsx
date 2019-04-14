import * as React from "react";
import rightBranch from "../../../imgs/rightBranch.png";
import styles from "./rightTree.module.scss";

export interface IProps {}

export interface IState {}

class RightTreeBranch extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles.branchContainer}>
        <img className={styles.branch} src={rightBranch} />
      </div>
    );
  }
}

export default RightTreeBranch;
