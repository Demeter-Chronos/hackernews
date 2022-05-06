import '../src/styles/globals.css';
import 'tachyons';
import type { AppProps } from 'next/app';
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "../src/lib/apollo-client";
import()

const client = getApolloClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
