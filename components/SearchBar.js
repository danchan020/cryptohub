import styles from "../styles/Search.module.css";

export default function SearchBar() {
  return (
    <div className={styles.coin_search}>
        <input className={styles.coin_input} placeholder="search for a coin...">
        </input>
        <button className={styles.coin_button}>
            Search
        </button>
    </div>
  )
}
