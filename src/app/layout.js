import "./globals.css";
import Navbar from "../components/Navbar";

import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "PujaPass",
  description: "Buy Durga Puja Prasadam Coupons Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}




