import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Contact from "./Contact"
import About from "./About"
import Header from "./Header"
import Home from "./Home"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/" style={{padding: 5}}>Home</Link>
        <Link to="/about" style={{padding: 5}}>About</Link>
        <Link to="/contact" style={{padding: 5}}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
