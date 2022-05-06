import type { NextPage } from 'next'
import Head from 'next/head';
import styles from '../src/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackerNews</title>
      </Head>
      <div>Welcome to </div>
    </div>
  )
}

export default Home
