'use client';

import { useState } from 'react';
import AddOrUpdateQuantity from './actions';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState(1);
  function handleChange(event) {
    setQuantity(event.currentTarget.value);
  }
  return (
    <form>
      <label for="quantityInput">
        quantity:
        <input
          id="quantityInput"
          value={quantity}
          onChange={handleChange}
          type="number"
          style={{ width: '50px' }}
        ></input>
      </label>
      <br />
      <button
        formAction={async () =>
          await AddOrUpdateQuantity(props.productId, quantity)
        }
      >
        add to cart
      </button>
    </form>
  );
}
