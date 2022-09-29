import styles from "../styles/Coin.module.css";

export default function Coin({...props}) {
  return (
    <div className={styles.all_coins}>
      <div className={styles.coin_image}>
        <img className={styles.coin_image} src={props.image} ></img>
      </div>
      <div>
        <h1>{props.name}</h1>
        <p>{props.symbol}</p>
        <p>{props.price}</p>
        <p>{props.onehr}</p>
        <p>{props.twentyfourhr}</p>
        <p>{props.sevenday}</p>
        <p>{props.marketcap}</p>
        <p>{props.volume}</p>
        <p>{props.supply}</p>
      
      </div>
    </div>
  )
}
