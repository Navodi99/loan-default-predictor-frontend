/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MenuIcon, XIcon, BarChartIcon } from 'lucide-react'


const Navbar = () => {
  
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [scrolled])
    return (
      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container flex items-center justify-between px-4 mx-auto">
          <motion.div
            className="flex items-center"
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <BarChartIcon className="w-8 h-8 mr-2 text-teal-600" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              LoanSentry
            </span>
          </motion.div>
          <div className="hidden space-x-8 md:flex">
            {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-700 transition-colors hover:text-teal-600"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden px-6 py-2 text-white transition-all duration-300 rounded-md md:block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
          >
            Get Started
          </motion.button>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              <a
                href="#"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors hover:text-blue-600"
              >
                Contact
              </a>
              <button className="py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    )
}

export default Navbar
