import React from "react";
import { Link } from "react-router-dom";

import { ArrowRight } from "react-feather";
import styles from "./styles.module.css";

const ButtonDetail = () => {
  return (
    <Link to="/list">
      <button className={styles.button_list}>
        Lista de moedas <ArrowRight />
      </button>
    </Link>
  );
};

export default ButtonDetail;
