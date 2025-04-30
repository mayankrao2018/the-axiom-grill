'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ThemeToggle() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.add(initialTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  // Safe conditional return
  if (pathname !== '/menu') return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 dark:from-indigo-600 dark:to-purple-700 shadow-lg text-xl transition duration-300 hover:scale-110"
      title="Toggle Theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
