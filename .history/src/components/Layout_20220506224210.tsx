import Head from 'next/head'
import Header from './header';

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <di v>
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