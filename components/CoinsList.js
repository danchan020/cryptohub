import Coin from "./Coin"
import styles from "../styles/Coin.module.css";

export default function CoinsList({filteredCoins}) {
  return (
    <div className={styles.main}>
      <div className={styles.coin_header}>
        <div className={styles.coin_header_title}>
          <p> Coin </p>
        </div>
        <div className={styles.coin_header_data}>
          <p> Price </p>
          <p> 1h </p>
          <p> 24h </p>
          <p> 7d </p>
          <p> 24h Volume </p>
          <p> Mkt Cap </p>
          <p> Last 7 Days </p>
        </div>
      </div>
        <div className={styles.coin_container}>
        {filteredCoins.map( coin => { 
            return (
                <Coin 
                key = {coin.id}
                image = {coin.image}
                name = {coin.name}
                symbol = {coin.symbol}
                price = {coin.current_price}
                onehr = {coin.price_change_percentage_1h_in_currency}
                twentyfourhr = {coin.price_change_percentage_24h_in_currency}
                sevenday = {coin.price_change_percentage_7d_in_currency}
                marketcap = {coin.market_cap}
                volume = {coin.total_volume}
                supply = {coin.circulating_supply}
                trendline = {coin.sparkline_in_7d}
                />
            )
        })}
        </div>
    </div>
  )
}
