import React, { useState, useEffect } from "react";

import Footer from "components/Footer";
import Menu from "components/Menu";
import Container from "components/Container";

import styles from "./styles.module.css";
import api from "services/api";

export interface Coin {
  id: string;
  name: string;
  price: number;
  icon: string;
  twitterUrl?: string;
  websiteUrl?: string;
  exp: string[];
}

interface CoinDataAxios {
  coins: Coin[];
}

const List = () => {
  const [coins, setCoins] = useState<Coin[]>();

  useEffect(() => {
    async function getCoins() {
      const { data } = await api.get<CoinDataAxios>("");

      setCoins(data.coins);
    }

    getCoins();
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
        <h1 className={styles.title}>Principais cryptos</h1>
        <section className={styles.cards}>
          {coins?.map((coin) => (
            <div className={styles.card} key={coin.id}>
              <img src={coin.icon} alt={coin.name} />
              <h3>{coin.name}</h3>
              <h5>{formatPrice(coin.price)}</h5>
              <a href="">Ver detalhes</a>
            </div>
          ))}
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default List;
