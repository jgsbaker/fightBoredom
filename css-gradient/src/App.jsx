import { useState } from 'react'
import './App.css'
import GradientInput from "./GradientInput"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GradientInput />
    </>
  )
}

export default App
