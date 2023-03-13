import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Cart from '@components/Cart';
import { useAppContext } from '../state';
import { useEffect } from 'react';

export default function CartPage() {
  useEffect(() => {
    window.algoliasearchNetlify({
      appId: 'W3LR4ICI9R',
      apiKey: 'e9ee06772905c23c1fb20a25d636fc16',
      siteId: '9681fec4-55dd-4232-8119-335f18d4fb5c',
      branch: 'main',
      selector: 'div#search',
    }); 
  }, [])

  return (
    <>
      <Head>
        <title>Shoperoni | Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="cart-page">
        <article className="cart-page-content">
          <h1>Your cart</h1>
          <Cart />
        </article>
      </main>
      <Footer />
    </>
  );
}
