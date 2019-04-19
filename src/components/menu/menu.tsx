import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";
import heading from "../../imgs/Heading.png";

export interface IProps {}

export interface IState {}

class Menu extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <section className={styles.menu}>
        <img className={styles.chimpAndTree} src={heading} />

        <div className={styles.playButtonFrame}>
          <NavLink to="/play">
            <button className={styles.playButton}>Play</button>
          </NavLink>
        </div>
        <iframe
          src="https://giphy.com/embed/ZB7aRByErN115YPgSO"
          className={styles.gif}
          allowFullScreen
        />
      </section>
    );
  }
}

export default Menu;
