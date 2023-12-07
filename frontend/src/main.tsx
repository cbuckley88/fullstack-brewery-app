import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <div className="pt-64 px-16 bg-blue-400 h-full w-full">
      <App />
    </div>
  </React.StrictMode>,
)
