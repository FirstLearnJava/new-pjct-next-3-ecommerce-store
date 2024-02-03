import Link from 'next/link';
import { Fragment } from 'react';
import { products } from '../database/products';

export default function ProductsPage() {
  return (
    <Fragment>
      <Link href="/">Go back</Link>
      <br />
      <h1>pottery</h1>
      <ul>
        <li>
          <Link href="/products/1">{products[0].name}</Link>
        </li>
        <li>
          <Link href="/products/2">{products[1].name}</Link>
        </li>
        <li>
          <Link href="/products/3">{products[2].name}</Link>
        </li>
        <li>
          <Link href="/products/4">{products[3].name}</Link>
        </li>
        <li>
          <Link href="/products/5">{products[4].name}</Link>
        </li>
      </ul>
      <br />
      <h1>fashion</h1>
      <ul>
        <li>
          <Link href="/products/6">{products[5].name}</Link>
        </li>
        <li>
          <Link href="/products/7">{products[6].name}</Link>
        </li>
        <li>
          <Link href="/products/8">{products[7].name}</Link>
        </li>
        <li>
          <Link href="/products/9">{products[8].name}</Link>
        </li>
        <li>
          <Link href="/products/10">{products[9].name}</Link>
        </li>
      </ul>
    </Fragment>
  );
}
