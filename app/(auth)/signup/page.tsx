// app/page.tsx
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    // Placeholder for sign-up logic
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Password:', password);
  };

  return (
    
    <div className="flex items-center justify-center flex-col min-h-screen bg-red-100  text-red-800">
      <div className=" md:w-[68px] h-[40px] md:h-[55px] h:[45px] flex items-center justify-center mb-8 shadow-xl hover:shadow-red-900 rounded-[50%]
         p-3 text-2xl hover:pt-2 bg-transparent hover:border-l-4 border-red-900"><h1 className="flex justify-center font-bold">FJ<FaLeaf /></h1></div>
      
    
      <form
      onSubmit={handleSubmit}
        
        className="border-red-900 p-8 rounded-lg shadow-xl w-[250px] md:w-[400px] max-w-lg hover:shadow-red-900 hover:pt-2 hover:border-l-4 md:text-2xl text-xl cursor-pointer"
      >
        <h2 className="text-3xl font-bold">Sign Up</h2><h6 className='text-lg mb-6'>Create an account or <span className='text-teal-700 hover:font-bold hover:text-2xl underline' ><Link href="/login">  Sign Up</Link></span></h6>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="">
          <label htmlFor="email" className="block font-medium mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='abc@gmail.com'
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="">
          <label htmlFor="text" className="block font-medium mb-2">
            User Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="CodewithFairy"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="">
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='********'
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="">
          <label htmlFor="confirmPassword" className="block font-medium mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder='********'
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className='flex gap-2 mb-4'>
        <input type="checkbox"  /><h6 className='text-sm mt-1 '>i dont want to receive emails with advertising, news, suggestions or marketing promotions</h6>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-700 text-white py-3 rounded-lg hover:bg-pink-900"
          
        >
          Sign Up
        </button>
        <div className='text-sm mt-2 text-center'> By signing up to an account, You are accepting our terms  of service and policy</div>
      </form>
    </div>
    
    
  );
}
