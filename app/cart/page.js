import { Fragment } from 'react';
import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import { getProductById } from '../database/products';
import SingleProducts from './SingleProducts';
import Link from 'next/link';

export default function CartPage() {
  const cartProductsCookies = getCookie('productQuantities');
  const cartProducts = cartProductsCookies
    ? parseJson(cartProductsCookies)
    : undefined;

  return (
    <div>
      <Link href="/products">Back to products</Link>
      <SingleProducts />
      <div>Total price:</div>
    </div>
  );
}
