import { Sql } from 'postgres';
import { sql } from './../app/database/connect';

export type UserWithPasswordHash = {
  id: number;
  username: string;
  passwordHash: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE users
  (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username varchar(80) NOT NULL,
    password_hash varchar(80) NOT NULL
  )`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE users`;
}
