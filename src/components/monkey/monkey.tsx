import * as React from "react";
import styles from "./monkey.module.scss";
import monkey from "../../imgs/monkey.png";

export interface IProps {}

export interface IState {
  flippedMonkey: any;
  isFlipped: boolean;
}

class Monkey extends React.Component<IProps, IState> {
  public state = { flippedMonkey: styles.monkeyLeft, isFlipped: false };

  public render() {
    return (
      <div className={styles.monkeyFrame}>
        <img
          className={`${styles.monkey} ${this.state.flippedMonkey}`}
          src={monkey}
        />
      </div>
    );
  }
}
export default Monkey;
