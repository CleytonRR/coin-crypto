import React from "react";

import Menu from "components/Menu";
import Banner from "components/banner";
import Container from "components/Container";

import BitcoinLogo from "assets/bitcoin_logo.png";

import styles from "./styles.module.css";

function Home() {
  return (
    <>
      <Menu />
      <Banner />
      <section className={styles.section}>
        <Container>
          <div className={styles.contents}>
            <div className={styles.section_texts}>
              <h2 className={styles.title}>Origem</h2>
              <p className={styles.text}>
                A primeira criptomoeda descentralizada, o Bitcoin, foi criado em
                2009 por Satoshi Nakamoto. Foi usada a SHA-256, uma função hash
                criptográfica, como esquema de prova de trabalho. Porém, nos
                dias atuais existe uma infinidade de moedas digitais.
              </p>
            </div>
            <img src={BitcoinLogo} alt="Bitcoin logo" />
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
