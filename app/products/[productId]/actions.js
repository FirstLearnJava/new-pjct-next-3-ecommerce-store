'use server';

import getCookie from '@/app/utils/cookies';
import parseJson from '@/app/utils/json';
import { cookies } from 'next/headers';

export default async function AddOrUpdateQuantity(id, quantity) {
  const productQuantityCookies = getCookie('productQuantities');
  const productQuantities = !productQuantityCookies
    ? []
    : parseJson(productQuantityCookies);

  const singleCookie = productQuantities.find((productQuantity) => {
    return productQuantity.id === id;
  });

  if (singleCookie) {
    if (quantity >= 0) {
      singleCookie.quantity = Number(singleCookie.quantity) + Number(quantity);
    }
  } else {
    productQuantities.push({ id: id, quantity: quantity });
  }

  cookies().set('productQuantities', JSON.stringify(productQuantities));
}
