import React from "react";

import Container from "components/Container";
import Logo from "components/Logo";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.container_footer}>
      <Container>
        <h5>Maratonas Academy - Programa Frontend Expert</h5>
        <Logo />
      </Container>
    </footer>
  );
};

export default Footer;
