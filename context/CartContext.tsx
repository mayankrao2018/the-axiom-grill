'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

const CartContext = createContext<any>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Ensure localStorage is only accessed on the client
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cart')
      if (saved) setCart(JSON.parse(saved))
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, isMounted])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
