"use client";

import { useRouter } from "next/navigation"; // Next.js router

export default function PaymentPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#7b1e24]">
        Payment Options
      </h1>

      <div className="max-w-md mx-auto space-y-6">
        {/* UPI Payment */}
        <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition">
          Pay with UPI
        </button>

        {/* Debit/Credit Card */}
        <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition">
          Pay with Debit/Credit Card
        </button>

        {/* Net Banking */}
        <button className="w-full bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition">
          Pay with Net Banking
        </button>

        {/* Cancel Button */}
        <button
          onClick={() => router.back()} // Go to previous page
          className="w-full bg-gray-400 text-white px-4 py-3 rounded-lg hover:bg-gray-500 transition"
        >
          Cancel
        </button>
      </div>
    </main>
  );
}
