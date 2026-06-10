'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md"><div className="max-w-7xl mx-auto px-4 py-4"><Link href="/" className="text-2xl font-bold text-green-600">GroceryStore</Link></div></nav>
      <div className="max-w-md mx-auto mt-16 px-4"><div className="bg-white rounded-lg shadow-md p-8"><h1 className="text-3xl font-bold mb-6 text-center">Login</h1>{error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}<form onSubmit={handleLogin}><div className="mb-4"><label className="block text-gray-700 font-bold mb-2">Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" required /></div><div className="mb-6"><label className="block text-gray-700 font-bold mb-2">Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600" required /></div><button type="submit" disabled={loading} className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 disabled:opacity-50">{loading ? 'Logging in...' : 'Login'}</button></form><p className="text-center mt-4 text-gray-600">Don't have an account? <Link href="/register" className="text-green-600 font-bold">Register</Link></p></div></div>
    </div>
  );
}
