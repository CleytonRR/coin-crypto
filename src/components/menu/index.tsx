import React from "react";

import styles from "./styles.module.css";

const Menu = () => {
  return (
    <div className={styles.background_menu}>
      <div className={styles.menu}>
        <h6>Coin Crypto</h6>
        <nav>
          <ul className={styles.menu_list}>
            <li className={styles.menu_list_item}>Home</li>
            <li className={styles.menu_list_item}>Lista</li>
            <li className={styles.menu_list_item}>Login</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
