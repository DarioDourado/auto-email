// components/Login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import FormInput from '@/components/forms/FormInput';
import { LoginProps } from './interface';



const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: { target: { value: string; }; }) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: string; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
    router.push('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-20 shadow-md p-8 rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
