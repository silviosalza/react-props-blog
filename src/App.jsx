import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/TheHeader"
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TheHeader/>
      
      <TheFooter/>
    </>
  )
}

export default App
