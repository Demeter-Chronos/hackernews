import type { NextPage } from 'next'
import Head from 'next/head';
import styles from '../src/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackerNews</title>
      </Head>
      <header>
        <div className="flex pa1 justify-between nowrap orange">
          <div className="flex flex-fixed black">
            <Link href="/" className="no-underline black">
              <div className="fw7 mr1">Hacker News</div>
            </Link>
            <Link to="/" className="ml1 no-underline black">
              new
            </Link>
            <div className="ml1">|</div>
            <Link to="/top" className="ml1 no-underline black">
              top
            </Link>
            <div className="ml1">|</div>
            <Link
              to="/search"
              className="ml1 no-underline black"
            >
              search
            </Link>
            {authToken && (
              <div className="flex">
                <div className="ml1">|</div>
                <Link
                  to="/create"
                  className="ml1 no-underline black"
                >
                  submit
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
