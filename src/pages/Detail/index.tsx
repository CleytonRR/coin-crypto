import React from "react";

import Footer from "components/Footer";
import Menu from "components/Menu";
import { ArrowLeft } from "react-feather";

import styles from "./styles.module.css";
import Container from "components/Container";

const Detail = () => {
  return (
    <>
      <Menu />
      <Container>
        <h1 className={styles.title}>
          <ArrowLeft /> Bitcoin
        </h1>
      </Container>
      <Footer />
    </>
  );
};

export default Detail;
