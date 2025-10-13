
"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart , message } = useCart();

  // calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-[#7b1e24] mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Add some coupons!</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600">
                  ₹{item.price} × {item.quantity} ={" "}
                  <b>₹{item.price * item.quantity}</b>
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Total */}
<div className="mt-6 text-xl font-bold text-gray-700">
  Total: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
</div>




          {/* Buy Now button */}
          <div className="mt-4">
            <button
              className="bg-[#7b1e24] text-white px-6 py-3 rounded-lg text-lg hover:bg-red-900 transition"
              onClick={() => (window.location.href = "/checkout")}
            >
              Buy Now
            </button>
          </div>
        </div>

        
      )}

{/* Toast Message */}
{message && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#fff]/90 backdrop-blur-md text-white px-6 py-3 rounded-lg shadow-lg text-sm animate-fadeInOut">
    {message}
  </div>
)}


    </main>
  );
}
