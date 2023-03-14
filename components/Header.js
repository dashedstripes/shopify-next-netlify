import Link from 'next/link';
import { useAppContext } from 'state';
import { useEffect } from 'react';

export default function Header() {
  const { cartId, setCartId, setCartItems, cartItems } = useAppContext();

  useEffect(async () => {
    if(cartId) {
      const response = await fetch("/.netlify/functions/get-cart", {
        method: "post",
        body: JSON.stringify({
          cartId,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json(); 
      const numOfItems = json.cart.lines.edges?.reduce((prev, curr) => {
        return prev + curr?.node?.quantity || 0
      }, 0);

      setCartItems(numOfItems || 0)
    }
  }, [cartId]);

  return (
    <header className="app-header">
      <h1>
        <Link href="/">
          <a>Shoperoni</a>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>All Products</a>
            </Link>
          </li>
          {/* <li className="main-nav-item">
            <Link href="/cheeses"><a>Cheeses</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/meats"><a>Meats</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/boards"><a>Boards</a></Link>
          </li> */}
          <li className="main-nav-item">
            <Link href="/cart">
              <a className="cart cartLink">Cart ({cartItems})</a>
            </Link>
          </li>
        </ul>
        <div className="main-nav-item" id="search"></div>
      </nav>
    </header>
  );
}
