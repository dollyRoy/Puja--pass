"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-[#7b1e24] text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        PujaPass
      </Link>

      {/* Links */}
      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-gray-200 transition">
          Home
        </Link>
        <Link href="/cart" className="hover:text-gray-200 transition flex items-center">
          Cart
          {cart.length > 0 && (
            <span className="ml-2 bg-yellow-400 text-black text-sm font-bold px-2 py-0.5 rounded-full">
              {cart.reduce((total, item) => total + item.quantity, 0)}
              



            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
