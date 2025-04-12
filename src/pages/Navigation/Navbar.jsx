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
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <BarChartIcon className="h-8 w-8 text-teal-600 mr-2" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
              LoanSentry
            </span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-700 hover:text-teal-600 transition-colors"
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
            className="hidden md:block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-2 rounded-md transition-all duration-300"
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
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    )
}

export default Navbar
