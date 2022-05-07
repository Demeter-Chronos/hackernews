import type { NextPage } from 'next';
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';
import Head from 'next/head';
import LinkList from '../src/components/linklist';

const Home: NextPage = () => {
  return (
      <div className="ph3 pv1 background-gray">
        <LinkList />
      </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      user: []
    }
  }
}

export default Home
