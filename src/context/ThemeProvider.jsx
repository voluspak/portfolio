import { createContext, useContext, useState } from 'react'
import style from '../styles/styles.module.css'

const ThemeContext = createContext()

const themeStyles = {
  dark: style.dark,
  light: style.light
}

export function ThemeProvider (props) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark')
  const value = { theme: themeStyles[theme], toggleTheme }

  return <ThemeContext.Provider value={value} {...props} />
}

export const useTheme = () => useContext(ThemeContext)
