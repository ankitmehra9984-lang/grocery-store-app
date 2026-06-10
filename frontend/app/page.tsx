'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  vendor: string;
  stock: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        setProducts(response.data.data || []);
      } catch (err) {
        console.log('Demo mode active');
        setProducts([
          { _id: '1', name: 'Fresh Apples', description: 'Crisp and juicy', price: 4.99, image: 'https://via.placeholder.com/300x200?text=Apples', category: 'Fruits', vendor: 'Demo', stock: 50 },
          { _id: '2', name: 'Organic Carrots', description: 'Fresh organic', price: 2.99, image: 'https://via.placeholder.com/300x200?text=Carrots', category: 'Vegetables', vendor: 'Demo', stock: 30 },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-600">GroceryStore</Link>
          <div className="flex space-x-4"><Link href="/shop" className="text-gray-700 hover:text-green-600">Shop</Link><Link href="/cart" className="text-gray-700 hover:text-green-600">Cart</Link></div>
        </div>
      </nav>
      <section className="bg-green-600 text-white py-20"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-5xl font-bold mb-4">Fresh Groceries</h1><Link href="/shop" className="px-8 py-3 bg-white text-green-600 font-bold rounded inline-block">Shop Now</Link></div></section>
      <section className="py-16 px-4"><div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold mb-8">Featured Products</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(p => <div key={p._id} className="bg-white rounded shadow p-4"><div className="h-40 bg-gray-200 mb-4"></div><h3 className="font-bold">{p.name}</h3><p className="text-green-600 font-bold">${p.price}</p><button className="mt-4 w-full bg-green-600 text-white py-2 rounded">Add</button></div>)}</div></div></section>
    </div>
  );
}
