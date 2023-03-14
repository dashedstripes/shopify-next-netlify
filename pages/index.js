import Head from "next/head";
import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";
import { useEffect } from "react";

export default function Home({ products }) {

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
        <title>LifeFitness</title>
        <link rel="icon" href="/favicon.ico" />
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
