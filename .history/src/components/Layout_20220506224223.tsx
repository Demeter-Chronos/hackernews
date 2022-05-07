import Head from 'next/head'
import Header from './header';
import

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div >
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