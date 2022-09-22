import Head from 'next/head'
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
      <SearchBar></SearchBar>
    </div>
  )
}
