import Head from "next/head";
import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";
import algoliasearch from 'algoliasearch/lite';
import Script from 'next/script'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Cheese and Meat Shop</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
        <script src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"/>
      </Head>

      <Header />
      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />

      <Script 
      id="init-algolia"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: `
        algoliasearchNetlify({
          appId: 'W3LR4ICI9R',
          apiKey: 'e9ee06772905c23c1fb20a25d636fc16',
          siteId: '9681fec4-55dd-4232-8119-335f18d4fb5c',
          branch: 'main',
          selector: 'div#search',
        });
      `}}/>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
