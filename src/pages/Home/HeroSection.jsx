import React from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRightIcon,
  TrendingUpIcon,
  ShieldIcon,
  BarChart2Icon,
} from 'lucide-react'

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 blur-3xl"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 blur-3xl"></div>
          </div>
          <div className="container relative mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 md:pr-8">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  <motion.div
                    className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 mb-6"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                  >
                    <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text font-medium">
                      AI-Powered Risk Assessment
                    </span>
                  </motion.div>
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                  >
                    Predict Loan Defaults with
                    <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
                      {' '}
                      Machine Learning
                    </span>
                  </motion.h1>
                  <motion.p
                    className="text-lg text-gray-300 mb-8 max-w-lg"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                  >
                    Empower your financial institution with advanced analytics and
                    real-time risk assessment powered by cutting-edge AI technology.
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.6,
                    }}
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="relative group px-8 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium flex items-center justify-center overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Request Demo
                        <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="px-8 py-4 rounded-lg border border-teal-500/30 hover:bg-teal-500/10 text-white font-medium transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                  }}
                  className="relative"
                >
                  <motion.div
                    className="relative z-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl"
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-white">
                        Risk Assessment Dashboard
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm">
                        Live Data
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="flex items-center mb-2">
                          <TrendingUpIcon
                            className="text-teal-400 mr-2"
                            size={20}
                          />
                          <span className="text-sm font-medium text-gray-300">
                            Risk Score
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">87.4%</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                        <div className="flex items-center mb-2">
                          <ShieldIcon className="text-cyan-400 mr-2" size={20} />
                          <span className="text-sm font-medium text-gray-300">
                            Confidence
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">94.2%</div>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">
                          Default Probability
                        </span>
                        <span className="text-sm font-medium text-red-400">
                          High Risk
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: '78%',
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.5,
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-400">
                        <div>Analyzed factors: 24</div>
                        <div>Last updated: 2 mins ago</div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 blur-lg opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 blur-lg opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )
}

export default HeroSection
