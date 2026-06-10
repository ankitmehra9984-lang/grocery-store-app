'use client';
import Link from 'next/link';
export default function Shop() {
  return <div className="min-h-screen bg-gray-50"><nav className="bg-white shadow-md"><div className="max-w-7xl mx-auto px-4 py-4 flex justify-between"><Link href="/" className="text-2xl font-bold text-green-600">GroceryStore</Link><div className="flex space-x-4"><Link href="/shop" className="text-green-600 font-bold">Shop</Link><Link href="/cart">Cart</Link></div></div></nav><div className="max-w-7xl mx-auto py-8 px-4"><h1 className="text-4xl font-bold mb-8">Shop</h1><p>Shop page coming soon</p></div></div>;
}
