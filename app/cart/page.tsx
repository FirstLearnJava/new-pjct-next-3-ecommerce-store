import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import SingleProducts from './SingleProducts';
import Link from 'next/link';
import TotalPrice from './TotalPrice';
import CreateSessions from './CreateSessions';
import { getSingleProductsById } from '../database/products';
import { stripeClient } from '../utils/stripe';

export default async function CartPage() {
  const cartProductsCookies = getCookie('productQuantities');
  const cartProducts = cartProductsCookies
    ? parseJson(cartProductsCookies)
    : undefined;

  const body = [];

  /*  async function getDefaultPrice(apiId) {
      await stripeClient.products.retrieve(`${apiId}`);
    } */

  const asyncCartProducts = await Promise.all(
    cartProducts.map(async (cartProduct) => {
      const singleProduct = await getSingleProductsById(cartProduct.id);
      //const cupesAndPlatesSet = await getDefaultPrice(singleProduct.apiId);
      const retrievedItems = await stripeClient.products.retrieve(
        singleProduct.apiId!,
        {
          expand: ['default_price'],
        },
      );
      const bodyProduct = {
        price: retrievedItems.default_price.id,
        quantity: cartProduct.quantity,
      };
      body.push(bodyProduct);
    }),
  );

  type CartProduct = { id: number; quantity: number };
  return (
    <div>
      <Link href="/products">Back to products</Link>
      <SingleProducts />
      <TotalPrice cartProducts={cartProducts} />
      <CreateSessions cartProducts={cartProducts} body={body} />
    </div>
  );
}
