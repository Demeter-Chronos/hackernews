import type { NextPage } from 'next';
import Head from 'next/head';
import LinkList from '../src/components/linklist';
import Header from '../src/components/header';
import styles from '../src/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackerNews</title>
      </Head>
      <Header />
      <div className="ph3 pv1 background-gray">

      </div>
    </div>
  )
}

export default Home
