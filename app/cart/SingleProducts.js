import getCookie from '../utils/cookies';
import parseJson from '../utils/json';
import { getProductById } from '../database/products';
import RemoveButton from './RemoveButton';

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
          <div>
            product: {databaseProduct.name} <br />
            price: ${databaseProduct.price}
            <div>quantity: {cartProduct.quantity} piece(s)</div>
            <RemoveButton id={cartProduct.id} />
          </div>
        );
      })}
    </div>
  );
}
