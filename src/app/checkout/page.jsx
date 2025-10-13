"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleProceedToPay = () => {
    localStorage.setItem("totalAmount", totalPrice);
    router.push("/payment");
  };

  const handleCancel = () => {
    router.push("/"); // go to home page
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-[#7b1e24] mb-6 text-center">
        🛒 Checkout
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="font-semibold text-gray-900">₹{item.price}</p>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="flex justify-between items-center text-xl font-bold text-gray-700 mt-4 border-t pt-4">
            <p>Total</p>
            <p>₹{totalPrice}</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={handleProceedToPay}
              className="bg-[#7b1e24] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-900 transition"
            >
              Proceed to Pay
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-400 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
