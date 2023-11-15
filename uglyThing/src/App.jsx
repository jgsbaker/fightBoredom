import { useState } from 'react'
import './App.css'
import List from "./components/List"
function App(props) {
  return (
    <List {...props} />
  )
}

export default App
