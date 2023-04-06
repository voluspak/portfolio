// import { useState } from 'react'
// import { useTheme } from './context/ThemeProvider'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App () {
  // const { theme, toggleTheme } = useTheme()
  // const [darkMode, setDarkMode] = useState(false)

  // const handleSwitch = () => {
  //   setDarkMode(!darkMode)
  //   toggleTheme()
  // }
  return (
    <div>
      <Header />

      <Main />

      <Footer />

    </div>
  )
}

export default App
