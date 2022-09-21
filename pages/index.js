import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title> CryptoHub </title>
      </Head>
        <div> Hello World! :D </div>
      <SearchBar></SearchBar>
    </div>
  )
}
