import Container from "components/Container";
import React from "react";

import styles from "./styles.module.css";

const Banner = () => {
  return (
    <header className={styles.container}>
      <Container>
        <div className={styles.div_contents}>
          <h1 className={styles.main_title}>
            As criptomoedas são o futuro do dinheiro
          </h1>

          <h3 className={styles.secondary_title}>E Esse futuro começa agora</h3>

          <button className={styles.button_list}>Lista de moedas {"->"}</button>
        </div>
      </Container>
    </header>
  );
};

export default Banner;
