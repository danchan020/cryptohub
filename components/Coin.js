import styles from "../styles/Coin.module.css";

export default function Coin({...props}) {
  return (
    <div className={styles.coin_row}>
      <div className={styles.coin_image}>
        <img className={styles.coin_image} src={props.image} ></img>
      </div>
      <div>
        <h1>{props.name}</h1>
        <p>{props.symbol.toUpperCase()}</p>
        <p>${props.price}</p>
        <div>
          <p>{props.onehr.toFixed(2)}</p>
          <p>{props.twentyfourhr.toFixed(2)}</p>
          <p>{props.sevenday.toFixed(2)}</p>
        </div>
        <p>${props.volume.toLocaleString()}</p>
        <p>${props.marketcap.toLocaleString()}</p>
        <p>${props.supply.toLocaleString()}</p>
      </div>
    </div>
  )
}
//sparkline chart.js 
