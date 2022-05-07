import Head from 'next/head'
import Header from './header';
import styles from ';

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>HackerNews</title>
                <meta name="description" content="HackerNews Cloned Website" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}