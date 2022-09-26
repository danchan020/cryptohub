import Head from 'next/head'
import CoinsList from '../components/CoinsList'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'


export default function Home({filteredCoins}) {
  return (
    <div className={styles.page}>
      <Head>
        <title> CryptoHub </title>
      </Head>
        <div className={styles.header}>
          <h1 className={styles.title}> CryptoHub </h1> 
        </div>
        <div>
          <SearchBar/>
        </div>
        <div>
          <CoinsList filteredCoins={filteredCoins}/>
        </div>
    </div>
  )
}
export async function getServerSideProps(){

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
  const filteredCoins = await res.json()
    return {
      props: {filteredCoins}
    }
}
