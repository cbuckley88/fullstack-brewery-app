import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.tsx'
import Locations from './pages/Locations.tsx';
import OurBeers from './pages/OurBeers.tsx';
import About from './pages/About.tsx';
import ContactUs from './pages/ContactUs.tsx';
import Navbar from './components/Navbar.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
      <React.StrictMode>
        <Navbar />
        <div className="pt-64 px-16 bg-blue-400 h-full w-full">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/our-beers" element={<OurBeers />} />
          </Routes>
        </div>
      </React.StrictMode>
    </Router>
)
