import { getProductById } from '../database/products';

export default async function TotalPrice(props) {
  const totalPriceArray = props.cartProducts?.map((cartProduct) => {
    const dataBaseProduct = getProductById(cartProduct.id);
    const individualTotalPrice = cartProduct.quantity * dataBaseProduct.price;
    return individualTotalPrice;
  });
  const totalPriceSum = totalPriceArray
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);
  if (totalPriceSum) {
    return (
      <div>
        <br />
        Subtotal: ${totalPriceSum}
      </div>
    );
  }
}
