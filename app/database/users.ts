import { cache } from 'react';
import { sql } from './connect';
import { UserWithPasswordHash } from '../../migrations/1715157338-createUsers';

type UserWithoutPasswordHash = {
  id: number;
  username: string;
};

export const getUsers = cache(async () => {
  const users = await sql<UserWithPasswordHash[]>`
  SELECT * FROM users
  `;
  return users;
});
