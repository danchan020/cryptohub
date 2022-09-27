import styles from "../styles/Coin.module.css";

export default function Coin({...props}) {
  return (
    <div className={styles.all_coins}>
        <img src={props.image}></img>
        <h1>{props.name}</h1>
        <p>{props.symbol}</p>
    </div>
  )
}
