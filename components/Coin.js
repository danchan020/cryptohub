import styles from "../styles/Coin.module.css";

export default function Coin({...props}) {
  return (
    <div className={styles.all_coins}>
      <div className={styles.coin_image}>
        <img className={styles.coin_image} src={props.image} ></img>
      </div>
        
        <h1>{props.name}</h1>
        <p>{props.symbol}</p>
    </div>
  )
}
