import { cookies } from 'next/headers';

export default function getCookie(name) {
  return cookies().get(name)?.value;
}
