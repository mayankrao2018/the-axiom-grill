'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) {
      const parsed = JSON.parse(saved)
      setCart(Array.isArray(parsed) ? parsed : [])
    }
  }, [])

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0
    const qty = parseInt(item.qty) || 0
    return sum + price * qty
  }, 0)

  const goToPayment = () => {
    router.push('/payment')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">No items in cart.</p>
      ) : (
        <>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {cart.map(item => {
              const price = parseFloat(item.price) || 0
              const qty = parseInt(item.qty) || 0
              const title = item.title || item.name || 'Unnamed Item'

              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-[1.01] transition"
                >
                  <span className="font-medium text-gray-800 dark:text-white">{title} × {qty}</span>
                  <span className="text-gray-700 dark:text-gray-300">Rs.{(price * qty).toFixed(2)}</span>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 text-center">
            <p className="text-xl font-bold text-gray-800 dark:text-white mb-4">Total: Rs.{total.toFixed(2)}</p>
            <button
              onClick={goToPayment}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 dark:from-yellow-500 dark:to-pink-500 text-white font-semibold rounded-full shadow hover:scale-105 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}
