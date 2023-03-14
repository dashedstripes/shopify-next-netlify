import Head from "next/head";
import ProductPageContent from "@components/ProductPageContent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";
import { useEffect } from 'react';

export default function ProductPage({ product }) {


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
    <div className="container">
      <Head>
        <title>LifeFitness | Buy {product.node.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="product-page">
        <article>
          <ProductPageContent product={product.node} />
        </article>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getProductList();
  let routes = products.map((p) => {
    const params = `/product/${p.node.handle}`;
    return params;
  });

  return { paths: routes, fallback: false };
}

export async function getStaticProps({ params }) {
  let products = await getProductList();

  let product = products.find((p) => {
    return p.node.handle === params.product;
  });

  return {
    props: {
      product,
    },
  };
}
