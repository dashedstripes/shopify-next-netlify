import { AppWrapper } from '../state.js'; // import based on where you put it
import '@styles/globals.css';
import Head from "next/head";
import Script from 'next/script';

export function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
        <script src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js" />
      </Head>
      <Script
        id="init-algolia">
        {`
          window.algoliasearchNetlify = algoliasearchNetlify;
        `}
      </Script>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default Application;
