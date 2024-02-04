import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import { getProductById } from '../database/products';
import RemoveButton from './RemoveButton';
import Image from 'next/image';

export default function SingleProducts() {
  const cartProductsCookies = getCookie('productQuantities');
  const cartProducts = cartProductsCookies
    ? parseJson(cartProductsCookies)
    : undefined;

  if (!cartProducts) {
    return <div>Your cart is empty. Please add a product.</div>;
  }

  return (
    <div>
      {cartProducts?.map((cartProduct) => {
        const databaseProduct = getProductById(cartProduct.id);
        return (
          <div key={`cartProduct-${cartProduct.id}`}>
            <br />
            <div>product: {databaseProduct.name}</div>
            <Image
              src={`/pottery/${cartProduct.id}.png`}
              width="100"
              height="100"
              alt={cartProduct.name}
            ></Image>
            <div>price: ${databaseProduct.price}</div>
            <div>quantity: {cartProduct.quantity} piece(s)</div>
            <RemoveButton id={cartProduct.id} />
          </div>
        );
      })}
    </div>
  );
}
