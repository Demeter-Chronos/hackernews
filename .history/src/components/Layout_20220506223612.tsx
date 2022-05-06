import Head from 'next/head'
import Header from './header';
import styles from '../src/styles/Home.module.css';

interface LayoutProps {
    children:React.ReactNode
}

export default function Layout({children}:LayoutProps) {
    return (
        <div className={styles.container}>
            <Head>
            <title>HackerNews</title>
            <meta name="description" content="HackerNews Cloned Website" />
            </Head>
            <Hea />
            <main>
            {children}
            </main>
            <Footer />
            <style jsx>{`
                main {
                    min-height: 70vh;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                  }
            `}</style>
        </div>
    )
}