import * as React from "react";
import styles from "./treeBranch.module.scss";

export interface IProps {
  branch: string;
}

export interface IState {}

class Branch extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles.branchContainer}>
        <img className={styles.branch} src={this.props.branch} />
        {console.log(this.props.branch)}
      </div>
    );
  }
}

export default Branch;
