import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";
import monkey from "../../imgs/chimp.gif";

export interface IProps {}

export interface IState {}

class Menu extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <section className={styles.menuFrame}>
        <h1 className={styles.heading}>Chimp-And-Tree</h1>

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
