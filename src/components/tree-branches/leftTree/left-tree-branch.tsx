import * as React from "react";
import leftBranch from "../../../imgs/leftBranch.png";
import styles from "./left-tree.module.scss";

export interface IProps {}

export interface IState {}

class LeftTreeBranch extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles.branchContainer}>
        <img className={styles.branch} src={leftBranch} />
      </div>
    );
  }
}

export default LeftTreeBranch;
