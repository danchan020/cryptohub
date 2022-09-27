import styles from "../styles/Coin.module.css";

export default function Coin({...props}) {
  return (
    <div className={styles.all_coins}>
        <h1>{props.name}</h1>
    </div>
  )
}
