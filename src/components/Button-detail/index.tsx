import React from "react";

import { ArrowRight } from "react-feather";
import styles from "./styles.module.css";

const ButtonDetail = () => {
  return (
    <button className={styles.button_list}>
      Lista de moedas <ArrowRight />
    </button>
  );
};

export default ButtonDetail;
