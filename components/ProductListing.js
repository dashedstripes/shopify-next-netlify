import Link from 'next/link';

export default function ProductListing({ product }) {
  let image = null;

  if(product.images.edges[0]) {
    image = product.images.edges[0].node;
  }

  return (
    <li className="product-card">
      {image && (
        <div className="product-card-frame">
          <img className="prodimg" src={image.src} alt={image.altText} />
        </div>
      )}
      <div className="product-card-text">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-description">
          {product.description.substring(0, 60)}...
        </p>
      </div>
      <Link href={`/product/${product.handle}`}>
        <button>View Item {`>`} </button>
      </Link>
    </li>
  );
}
