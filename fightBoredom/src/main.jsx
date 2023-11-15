import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BoredomContextProvider } from './pages/components/BoredomContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BoredomContextProvider>
    <App />
  </BoredomContextProvider>,
)
