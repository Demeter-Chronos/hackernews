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
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/new/1" />}
          />
          <Route
            path="/create"
            element={<CreateLink />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/top" element={<LinkList />} />
          <Route
            path="/new/:page"
            element={<LinkList />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default Home
