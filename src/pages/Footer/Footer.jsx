import React from 'react'
import { motion } from 'framer-motion'
import {
  BarChartIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <div className="flex items-center mb-4">
                  <BarChartIcon className="h-8 w-8 text-teal-400 mr-2" />
                  <span className="text-xl font-bold">LoanSentry</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Advanced loan default prediction platform powered by AI to help
                  financial institutions make smarter lending decisions.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <TwitterIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              >
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      API Reference
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
              >
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
              >
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <MailIcon size={18} className="text-teal-400 mr-3" />
                    <a
                      href="mailto:contact@loansentry.com"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      contact@loansentry.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <PhoneIcon size={18} className="text-teal-400 mr-3" />
                    <a
                      href="tel:+18005551234"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      +1 (800) 555-1234
                    </a>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon size={18} className="text-teal-400 mr-3 mt-1" />
                    <span className="text-gray-400">
                      123 Finance Street
                      <br />
                      New York, NY 10001
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                  © 2023 LoanSentry. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-teal-400 text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-teal-400 text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-teal-400 text-sm transition-colors"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )
}

export default Footer
