import type { NextPage } from 'next';
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';
import Head from 'next/head';
import LinkList from '../src/components/linklist';
import Header from '../src/components/header';
import styles from '../src/styles/Home.module.css';

const httpLink = 

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackerNews</title>
      </Head>
      <Header />
      <div className="ph3 pv1 background-gray">
        <LinkList />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      user: []
    }
  }
}

export default function Home ()