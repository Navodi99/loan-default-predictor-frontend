import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BarChartIcon } from 'lucide-react'
 const Header=()=> {
  const location = useLocation()
  return (
    <header className="w-full bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <BarChartIcon className="w-8 h-8 text-teal-400" />
          <span className="text-2xl font-bold text-white">LoanSentry</span>
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link
            to="/"
            className={`${location.pathname === '/' ? 'text-teal-400' : 'text-gray-300 hover:text-white'}`}
          >
            Home
          </Link>
          <Link to="/" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link to="/" className="text-gray-300 hover:text-white">
            Pricing
          </Link>
          <Link to="/" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </nav>
        <Link
          to="/Login"
          className="px-4 py-2 font-medium text-white transition-colors bg-teal-500 rounded-md hover:bg-teal-600"
        >
          Get Started
        </Link>
      </div>
      {(location.pathname === '/PredictorForm' ||
        location.pathname === '/PredictionResults') && (
        <div className="py-2 text-center bg-gray-800">
          <h1 className="text-xl font-bold tracking-wide uppercase">
            LOAN DEFAULT PREDICTOR
          </h1>
        </div>
      )}
    </header>
  )
}
export default Header;