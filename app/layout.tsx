import './globals.css';
import ThemeToggle from '../components/ThemeToggle';
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/CartContext'; // ✅ Import CartProvider

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300">
        <CartProvider> {/* ✅ Wrap everything inside CartProvider */}
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          <div className="flex">
            <main className="flex-1">
              <Navbar />
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
