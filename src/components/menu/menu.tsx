import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";
import heading from "../../imgs/Heading.png";
import monkey from "../../imgs/monkey.gif";

export interface IProps {}

export interface IState {}

class Menu extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <section className={styles.menuFrame}>
        <div className={styles.titleFrame}>
          <img className={styles.chimpAndTree} src={heading} />
        </div>

        <div className={styles.playButtonFrame}>
          <NavLink to="/play">
            <button className={styles.playButton}>Play</button>
          </NavLink>
        </div>
        <img src={monkey} className={styles.gif} />
      </section>
    );
  }
}

export default Menu;
