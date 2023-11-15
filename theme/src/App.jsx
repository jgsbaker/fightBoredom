import { useState, useContext } from 'react'
import './App.css'
import Button from "./Button"
import { ThemeContext } from './ThemeContext'
function App() {
  const {color} = useContext(ThemeContext)
  return (
    <div className={`${color}Theme`}>
      <h1>Click button to toggle theme</h1>
      <Button />
    </div>
  )
}

export default App
