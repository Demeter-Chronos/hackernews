import '../src/styles/globals.css';
import 'tachyons';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider } from "@apollo/client";
import {getApolloClient} from "../src/lib/apollo-client";

const client = getApolloClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (<ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>);
}

export default MyApp
