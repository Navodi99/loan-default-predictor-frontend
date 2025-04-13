import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BarChartIcon } from 'lucide-react'
 const Header=()=> {
  const location = useLocation()
  return (
    <header className="w-full bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BarChartIcon className="h-8 w-8 text-teal-400" />
          <span className="text-2xl font-bold text-white">LoanSentry</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
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
          to="/form"
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-md transition-colors"
        >
          Get Started
        </Link>
      </div>
      {(location.pathname === '/PredictorForm' ||
        location.pathname === '/prediction') && (
        <div className="bg-gray-800 py-2 text-center">
          <h1 className="text-xl font-bold tracking-wide uppercase">
            LOAN DEFAULT PREDICTOR
          </h1>
        </div>
      )}
    </header>
  )
}
export default Header;