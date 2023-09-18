import Link from 'next/link';
import { useAppContext } from 'state';
import { useEffect } from 'react';

export default function Header() {
  const { cartId, setCartId, setCartItems, cartItems } = useAppContext();

  useEffect(() => {
    async function fetchCart() {
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
    }

    fetchCart()
  }, [cartId]);

  return (
    <header className="app-header">
      <h1>
        <Link href="/">
            <img src='/logo.svg'/>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              All Products
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
            <Link href="/cart" className="cart cartLink">
              Cart ({cartItems})
            </Link>
          </li>
        </ul>
        <div className="main-nav-item" id="search"></div>
      </nav>
    </header>
  );
}
