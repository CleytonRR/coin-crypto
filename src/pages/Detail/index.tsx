import React, { useState, useEffect } from "react";

import Footer from "components/Footer";
import Menu from "components/Menu";
import { ArrowLeft, Twitter, Globe } from "react-feather";

import styles from "./styles.module.css";
import Container from "components/Container";
import api from "services/api";
import { Coin, CoinDataAxios } from "pages/List";
import { Link } from "react-router-dom";

const Detail = () => {
  const [coin, setCoin] = useState<Coin>();

  useEffect(() => {
    async function getCoin() {
      const { data } = await api.get<CoinDataAxios>("");

      const selectedCoin = data.coins.find(({ name }) => name === "Bitcoin");
      setCoin(selectedCoin);
    }

    getCoin();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <>
      <Menu />
      <Container>
        <h1 className={styles.title}>
          <Link to="/list">
            <ArrowLeft />
          </Link>
          Bitcoin
        </h1>

        {coin ? (
          <section className={styles.detail_section}>
            <div>
              <h4>{coin.name}</h4>
              <h5>{formatPrice(coin.price)}</h5>
              <p>Redes sociais</p>
              <div className={styles.social_media}>
                {coin.websiteUrl && (
                  <a href={coin.websiteUrl}>
                    <Globe />
                    Site
                  </a>
                )}
                {coin.twitterUrl && (
                  <a href={coin.twitterUrl}>
                    <Twitter />
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </section>
        ) : (
          <p>Carregando</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Detail;
