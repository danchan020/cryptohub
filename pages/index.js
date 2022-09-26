import Head from 'next/head'
import CoinsList from '../components/CoinsList'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'


export default function Home() {
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
          <CoinsList/>
        </div>
    </div>
  )
}
export const getServerSideProps = async () => {
  const res = await fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&price_change_percentage=1h%2C%2024h%2C%207d&page=1&sparkline=true&per_page=10&order=market_cap_desc')
  const filteredCoins = await res.json()
    return {
      props: {
        filteredCoins
      }
    }
}
