import { useCart } from "@/context/CartContext";

type MenuCardProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
};

export default function MenuCard({
  id,
  image,
  name,
  price,
  description,
}: MenuCardProps) {
  const { cart, setCart } = useCart();

  const existingItem = cart.find((item: any) => item.id === id);

  const handleAddToCart = () => {
    if (existingItem) {
      const updatedCart = cart.map((item: any) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { id, img: image, title: name, price, qty: 1 }]);
    }
  };

  const handleSubtractFromCart = () => {
    if (!existingItem) return;

    if (existingItem.qty === 1) {
      setCart(cart.filter((item: any) => item.id !== id));
    } else {
      const updatedCart = cart.map((item: any) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  return (
    <div className="p-3 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:scale-105 transition-all duration-300 flex flex-col justify-between text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-28 object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold text-base">{name}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        Rs.{typeof price === "number" ? price.toFixed(2) : "0.00"}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
        {description}
      </p>

      {existingItem ? (
        <div className="mt-3 flex items-center justify-center space-x-3">
          <button
            onClick={handleSubtractFromCart}
            className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            –
          </button>
          <span className="font-semibold">{existingItem.qty}</span>
          <button
            onClick={handleAddToCart}
            className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold shadow-lg hover:brightness-110 transition duration-300"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
