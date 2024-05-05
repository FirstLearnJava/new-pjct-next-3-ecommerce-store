'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { stripeClient } from '../utils/stripe';
import { getSingleProductsById } from '../database/products';
import CreatePostBody from './CreatePostBody';

type body = { id: number; quantity: number };
interface CreateSessionsProps {
  cartProducts: body[] | undefined;
}

export default function CreateSessions(props: CreateSessionsProps) {
  const router = useRouter();

  const inserts = props.body;

  async function CreateSessionsAndRedirect() {
    const response = await fetch('/api/sessions', {
      method: 'POST',
      body: JSON.stringify({ products: props.body }),
    });

    const data = await response.json();

    router.push(data.sessions.url);
  }
  return (
    <button onClick={() => CreateSessionsAndRedirect()}>Buy products</button>
  );
}

/* const response = await fetch('/api/sessions', {
  method: 'POST',
  body: JSON.stringify({
    price,
    quantity: productQuantity,
  }),
}); */
