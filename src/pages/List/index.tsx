import React from "react";

import Footer from "components/Footer";
import Menu from "components/Menu";
import Container from "components/Container";

import bitcoin from "assets/bitcoin.png";

import styles from "./styles.module.css";

const List = () => {
  return (
    <>
      <Menu />
      <Container>
        <h1 className={styles.title}>Principais cryptos</h1>
        <section className={styles.cards}>
          <div className={styles.card}>
            <img src={bitcoin} alt="Bitcoin logo" />
            <h3>Bitcoin</h3>
            <h5>USD 45215.00</h5>
            <a href="">Ver detalhes</a>
          </div>
          <div className={styles.card}>
            <img src={bitcoin} alt="Bitcoin logo" />
            <h3>Bitcoin</h3>
            <h5>USD 45215.00</h5>
            <a href="">Ver detalhes</a>
          </div>
          <div className={styles.card}>
            <img src={bitcoin} alt="Bitcoin logo" />
            <h3>Bitcoin</h3>
            <h5>USD 45215.00</h5>
            <a href="">Ver detalhes</a>
          </div>
          <div className={styles.card}>
            <img src={bitcoin} alt="Bitcoin logo" />
            <h3>Bitcoin</h3>
            <h5>USD 45215.00</h5>
            <a href="">Ver detalhes</a>
          </div>
          <div className={styles.card}>
            <img src={bitcoin} alt="Bitcoin logo" />
            <h3>Bitcoin</h3>
            <h5>USD 45215.00</h5>
            <a href="">Ver detalhes</a>
          </div>
          <div className={styles.card}>
            <img src={bitcoin} alt="Bitcoin logo" />
            <h3>Bitcoin</h3>
            <h5>USD 45215.00</h5>
            <a href="">Ver detalhes</a>
          </div>
          <div className={styles.card}>
            <img src={bitcoin} alt="Bitcoin logo" />
            <h3>Bitcoin</h3>
            <h5>USD 45215.00</h5>
            <a href="">Ver detalhes</a>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default List;
