import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/Link';
import Header from '../src/components/header';
import styles from '../src/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackerNews</title>
      </Head>
      <Header />
    
    </div>
  )
}

export default Home
