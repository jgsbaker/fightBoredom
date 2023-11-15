import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import RPS from './pages/Rps'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <nav>
          <Link to="/" style={{padding: 5}}>Home</Link>
          <Link to="/rps" style={{padding:5}}>RPS Game</Link>
          <Link to="/about" style={{padding:5}}>About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="rps" element={<RPS />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
