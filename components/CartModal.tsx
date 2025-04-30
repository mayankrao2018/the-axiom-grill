import Link from 'next/link';

export default function CartModal({ cart, setCart }: any) {
  if (cart.length === 0) return null;

  const total = cart.reduce((sum: number, item: any) => sum + item.price * item.qty, 0);

  const increment = (title: string) => {
    setCart(
      cart.map((item: any) =>
        item.title === title ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrement = (title: string) => {
    const item = cart.find((i: any) => i.title === title);
    if (!item) return;

    if (item.qty === 1) {
      setCart(cart.filter((i: any) => i.title !== title));
    } else {
      setCart(
        cart.map((i: any) =>
          i.title === title ? { ...i, qty: item.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 z-50 transition-all duration-300">
      <h4 className="font-bold text-lg mb-3">Cart</h4>
      <ul className="space-y-3 max-h-64 overflow-y-auto pr-1">
        {cart.map((item: any) => (
          <li
            key={item.title}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Rs.{item.price.toFixed(2)} × {item.qty}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decrement(item.title)}
                className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full text-lg font-bold"
              >
                –
              </button>
              <span className="font-semibold">{item.qty}</span>
              <button
                onClick={() => increment(item.title)}
                className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded-full text-lg font-bold"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between items-center text-lg font-semibold">
        <span>Total:</span>
        <span>Rs.{total.toFixed(2)}</span>
      </div>

      <Link href="/cart" className="block">
        <button className="mt-4 w-full py-2 rounded-full text-white font-bold bg-gradient-to-r from-red-500 to-orange-500 dark:from-yellow-500 dark:to-pink-500 hover:brightness-110 transition">
          Go to Checkout
        </button>
      </Link>
    </div>
  );
}
