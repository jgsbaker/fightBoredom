import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UglyContextProvider } from './components/UglyContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <UglyContextProvider>
    <App />
  </UglyContextProvider>,
)
