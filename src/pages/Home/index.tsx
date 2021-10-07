import React, { useState, useEffect, useRef } from "react";

import Menu from "components/Menu";
import Banner from "components/banner";
import Container from "components/Container";

import BitcoinLogo from "assets/bitcoin_logo.png";

import styles from "./styles.module.css";
import ButtonDetail from "components/Button-detail";
import Footer from "components/Footer";

function Home() {
  const [showHistoryBitcoinContainer, setShowHistoryBitcoinContainer] =
    useState(false);

  const [showHighlight, setShowHighLight] = useState(false);
  const containerRef = useRef(null);
  const highlightRef = useRef(null);

  const callbackFunction = ([entries]: IntersectionObserverEntry[]) => {
    if (entries.intersectionRatio > 0.25866666666666666) {
      setShowHistoryBitcoinContainer(true);
    }
  };

  const observerHighlightCb = ([entries]: IntersectionObserverEntry[]) => {
    if (entries.isIntersecting) {
      setShowHighLight(true);
    }
  };

  useEffect(() => {
    let observerRefValue: HTMLElement | null = null;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = highlightRef.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [containerRef]);

  useEffect(() => {
    let observerRefValue: HTMLElement | null = null;
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(observerHighlightCb, options);

    if (highlightRef.current) {
      observer.observe(highlightRef.current);
      observerRefValue = highlightRef.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [highlightRef]);

  return (
    <>
      <Menu />
      <Banner />
      <section className={styles.section}>
        <Container>
          <div className={styles.contents} ref={containerRef}>
            {showHistoryBitcoinContainer && (
              <>
                <div className={styles.section_texts}>
                  <h2 className={styles.title}>Origem</h2>
                  <p className={styles.text}>
                    A primeira criptomoeda descentralizada, o Bitcoin, foi
                    criado em 2009 por Satoshi Nakamoto. Foi usada a SHA-256,
                    uma função hash criptográfica, como esquema de prova de
                    trabalho. Porém, nos dias atuais existe uma infinidade de
                    moedas digitais.
                  </p>
                </div>
                <img
                  src={BitcoinLogo}
                  alt="Bitcoin logo"
                  className={styles.img_animation}
                />
              </>
            )}
          </div>
        </Container>
      </section>
      <section className={styles.highlight} ref={highlightRef}>
        {showHighlight && (
          <div>
            <h2>Conheça mais moedas</h2>
            <ButtonDetail />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Home;
