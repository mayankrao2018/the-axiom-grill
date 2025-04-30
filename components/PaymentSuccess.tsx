'use client'
import { generateOrderId } from '@/utils/generateOrderId'
import { useEffect, useState } from 'react'

export default function PaymentSuccess() {
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    setOrderId(generateOrderId())
  }, [])

  return (
    <div className="mt-6">
      <p className="text-green-600 text-xl font-bold">🎉 Order Placed!</p>
      <p className="text-lg mt-2">Your ID is <span className="font-mono text-primary">#{orderId}</span></p>
    </div>
  )
}
