import { useEffect, useState } from 'react'
import { getItem, setItem } from '../utils/storage'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (getItem(STORAGE_KEY) as Theme) || 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove('light', 'dark')
    root.classList.add(theme)

    setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}