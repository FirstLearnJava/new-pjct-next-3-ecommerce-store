'use client';

import React, { useState } from 'react';

export default function RegisterPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function register() {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          username:
          <input
            onChange={(e) => {
              setUserName(e.currentTarget.value);
            }}
          ></input>
        </label>

        <label>
          password:
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          ></input>
        </label>

        <button
          onClick={async () => {
            await register();
          }}
        >
          Register
        </button>
      </form>
    </>
  );
}
