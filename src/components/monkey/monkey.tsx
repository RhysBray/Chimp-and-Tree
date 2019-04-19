import * as React from "react";
import styles from "./monkey.module.scss";
import monkey from "../../imgs/monkey.png";

export interface IProps {}

export interface IState {}

class Monkey extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles.monkeyFrame}>
        <img className={styles.monkey} src={monkey} />
      </div>
    );
  }
}

export default Monkey;
