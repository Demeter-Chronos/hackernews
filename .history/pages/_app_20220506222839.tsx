import '../src/styles/globals.css';
import 'tachyons';
import type { AppProps } from 'next/app';
import {
  ApolloProvider,
  } from "@apollo/client";
  import {getApolloClient} from "../lib/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
