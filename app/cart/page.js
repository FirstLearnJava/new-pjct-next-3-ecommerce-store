import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import SingleProducts from './SingleProducts';
import Link from 'next/link';
import TotalPrice from './TotalPrice';

export default function CartPage() {
  const cartProductsCookies = getCookie('productQuantities');
  const cartProducts = cartProductsCookies
    ? parseJson(cartProductsCookies)
    : undefined;

  return (
    <div>
      <Link href="/products">Back to products</Link>
      <SingleProducts />
      <TotalPrice cartProducts={cartProducts} />
      <Link href="/checkout">
        <button>Buy products</button>
      </Link>
    </div>
  );
}
