import React from "react";
import { Link } from "react-router-dom";

import Logo from "components/Logo";

import styles from "./styles.module.css";

const Menu = () => {
  return (
    <div className={styles.background_menu}>
      <div className={styles.menu}>
        <Logo />
        <nav>
          <ul className={styles.menu_list}>
            <li className={styles.menu_list_item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.menu_list_item}>
              <Link to="/list">Lista</Link>
            </li>
            <li className={styles.menu_list_item}>Login</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
