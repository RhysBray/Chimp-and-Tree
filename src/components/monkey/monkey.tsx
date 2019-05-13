import * as React from "react";
import styles from "./monkey.module.scss";
import monkey from "../../imgs/monkey.png";

export interface IProps {
  isFlipped: boolean;
}

export interface IState {}

class Monkey extends React.Component<IProps, IState> {
  public render() {
    const flipped = this.props.isFlipped
      ? styles.monkeyRight
      : styles.monkeyLeft;
    return (
      <div className={styles.monkeyFrame}>
        <img className={`${styles.monkey} ${flipped}`} src={monkey} />
        {console.log(this.props.isFlipped)}
      </div>
    );
  }
}
export default Monkey;
