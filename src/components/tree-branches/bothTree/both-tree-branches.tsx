import * as React from "react";
import bothBranches from "../../../imgs/bothBranches.png";
import styles from "./bothTree.module.scss";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

export interface IProps {}

export interface IState {}

class BothTreeBranches extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles.branchContainer}>
        <img className={styles.branch} src={bothBranches} />
      </div>
    );
  }
}

export default BothTreeBranches;
