import * as React from "react";
import styles from "./pause-menu.module.scss";
import { NavLink } from "react-router-dom";

export interface IProps {}

export interface IState {}

class PauseMenu extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles.pauseFrame}>
        <div className={styles.pauseMenu}>
          <h2 className={styles.pauseTitle}>PAUSED</h2>
          <div className={styles.menuButtonFrame}>
            <NavLink to="/">
              <button className={styles.menuButton}>Back to menu</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default PauseMenu;
