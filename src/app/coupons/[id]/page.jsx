"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "../../../context/CartContext";

const coupons = [
  { 
    id: 1, 
    title: "Single Blessings", 
    price: 99, 
    description: "One prasadam coupon.", 
    img: "/single.jpg", 
    detailedDescription: "Enjoy a delightful prasadam experience with our Single Blessings coupon, perfect for one person."
  },
  { 
    id: 2, 
    title: "Couple’s Compassion", 
    price: 350, 
    description: "Special pack for 2.", 
    img: "/couple.jpg", 
    detailedDescription: "Share a special moment with our Couple’s Compassion coupon, designed for two to enjoy together."
  },
  { 
    id: 3, 
    title: "Family Feast", 
    price: 950, 
    description: "Family pack for 6.", 
    img: "/family.jpg", 
    detailedDescription: "Bring the whole family together with our Family Feast coupon, ideal for six people to savor a memorable meal."
  },
];

export default function CouponDetails() {
  const params = useParams();
  const { addToCart } = useCart();

  const coupon = coupons.find((c) => c.id.toString() === params.id);

  if (!coupon) {
    return <div className="p-10 text-center text-red-600">Coupon not found.</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6">
        {/* Left Side - Image & Description */}
        <div>
          <Image
            src={coupon.img}
            alt={coupon.title}
            width={600}
            height={400}
            className="w-full h-72 object-cover rounded-xl"
          />
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-[#7b1e24] mb-3">{coupon.title}</h2>
            <p className="text-gray-700 text-lg mb-4">{coupon.detailedDescription}</p>
            <p className="text-gray-600">
              Experience the spiritual joy of Durga Puja with prasadam prepared 
              with love and devotion. Perfect for your family’s celebration. 
            </p>
          </div>
        </div>

        {/* Right Side - Price & Buy Section */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <h3 className="text-xl text-gray-500 font-semibold mb-2">{coupon.title}</h3>
          <p className="text-2xl font-bold text-[#7b1e24]">₹{coupon.price}</p>

          {/* Quantity */}
          <div className="mt-4">
            <label className="block text-gray-800 font-semibold mb-1">Quantity</label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-20 border rounded-lg p-2  text-gray-800"
            />
          </div>

          {/* Date Picker */}
          <div className="mt-4">
            <label className="block text-gray-800 font-semibold mb-1">Choose Date</label>
            <input
              type="date"
              className="w-full border rounded-lg p-2  text-gray-800"
            />
          </div>

          {/* Buttons */}
          <button
            onClick={() => addToCart(coupon)}
            className="w-full bg-[#7b1e24] text-white px-6 py-3 mt-6 rounded-lg hover:bg-red-900 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-200 text-gray-700 px-6  py-3 mt-3 rounded-lg hover:bg-gray-300 transition"
          >
            Back
          </button>
        </div>
      </div>

      {/* Extra Section - Info + QR */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-lg font-semibold text-[#7b1e24] mb-2">About this Coupon</h4>
        <p className="text-gray-600 mb-4">
          This prasadam coupon ensures you receive authentic blessings 
          directly from the Durga Puja pandal, prepared with devotion and tradition.
        </p>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Scan the QR code at the pandal to collect your prasadam.
          </p>
          <Image
            src="/qrcode.png"
            alt="QR Code"
            width={100}
            height={100}
            className="rounded-lg border"
          />
        </div>
      </div>
    </main>
  );
}
