// app/page.tsx

"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage or context
        localStorage.setItem('token', data.token);
        console.log('Logged in successfully:', data.message);
        // Redirect user or update state as needed
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError(`Something went wrong. Please try again. ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-red-100 text-red-800">
      <div className="w-[48px] h-[45px] md:w-[68px] md:h-[55px] flex items-center justify-center mb-8 shadow-xl hover:shadow-red-900 rounded-[50%] p-3 md:text-2xl text-xl hover:pt-2 bg-transparent hover:border-l-4 border-red-900">
        <h1 className="flex justify-center font-bold">FJ<FaLeaf /></h1>
      </div>
      
      <form
        onSubmit={handleSubmit}
        className="border-red-900 p-8 rounded-lg shadow-xl w-[250px] md:w-full max-w-md hover:shadow-red-900 hover:pt-2 hover:border-l-4 text-2xl cursor-pointer"
      >
        <h2 className="text-3xl font-bold mt-8 mb-8 text-center">Log in</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email 
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='abc@gmail.com'
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='*********'
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-700 text-white py-3 rounded-lg hover:bg-pink-900"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className='text-center mt-6 text-lg'>
          Don&#39;t have an account?  
          <span className='text-teal-700 underline hover:font-bold hover:text-2xl'>
            <Link href="/signup">  Sign Up</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
