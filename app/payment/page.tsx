'use client'
import { useState } from 'react'

export default function PaymentPage() {
  const [paid, setPaid] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [method, setMethod] = useState('')

  const handlePay = () => {
    if (!method) {
      alert('Please select a payment method.')
      return
    }

    setPaid(true)
    setOrderId(Math.floor(100 + Math.random() * 900).toString())
    localStorage.removeItem('cart')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Secure Payment</h2>

        {!paid ? (
          <>
            <div className="mb-6 text-left space-y-3">
              <p className="text-lg font-medium text-gray-800 dark:text-white">Choose Payment Method</p>
              {['UPI', 'Credit/Debit Card', 'Net Banking', 'QR Code'].map((option) => (
                <label
                  key={option}
                  className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition ${
                    method === option
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white border-transparent'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={option}
                    checked={method === option}
                    onChange={(e) => setMethod(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="font-medium">{option}</span>
                </label>
              ))}
            </div>

            <button
              onClick={handlePay}
              className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 dark:from-yellow-500 dark:to-pink-500 text-white text-lg font-semibold rounded-full shadow hover:scale-105 transition"
            >
              Pay Now
            </button>
          </>
        ) : (
          <div className="mt-6">
            <p className="text-green-500 text-2xl font-bold">🎉 Order Placed!</p>
            <p className="text-lg mt-2 text-gray-800 dark:text-white">
              Your ID is <span className="font-mono text-primary">{orderId}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
