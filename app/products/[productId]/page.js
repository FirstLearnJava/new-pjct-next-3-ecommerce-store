import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { getProductById } from '@/app/database/products';
import ProductQuantityForm from './ProductQuantityForm';

export const dynamic = 'force-dynamic';

export default function ProductsPage({ params }) {
  const singleProduct = getProductById(Number(params.productId));

  if (!singleProduct) {
    notFound();
  }
  return (
    <Fragment>
      <Link href="/products">Go back</Link>
      <br />
      <h1>{singleProduct.name}</h1>
      <br />
      <Image
        src={`/pottery/${singleProduct.id}.png`}
        width="200"
        height="200"
        alt={singleProduct.name}
      ></Image>
      <p>price: {singleProduct.price}</p>
      <ProductQuantityForm productId={params.productId} />
      <Link href="/cart">go to cart</Link>
    </Fragment>
  );
}
