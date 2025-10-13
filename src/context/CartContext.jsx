"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // start empty
  const [message, setMessage] = useState("");
  const [hydrated, setHydrated] = useState(false); // ✅ new state to avoid hydration mismatch

  // Load cart only after the component mounts (client-side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) setCart(JSON.parse(saved));
      setHydrated(true); // ✅ now hydration is complete
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, hydrated]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2000);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      showMessage("Added to Cart ✅");

      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id
            ? { ...i, quantity: Math.min(i.quantity + 1, 5) }
            : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
    showMessage("Removed from Cart 🗑️");
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    showMessage("Cart Cleared 🧹");
  };

  // ✅ Render children only after hydration is done
  if (!hydrated) {
    return null; // or return a small loader if you prefer
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, message }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
