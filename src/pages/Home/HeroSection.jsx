import React from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRightIcon,
  TrendingUpIcon,
  ShieldIcon,
  BarChart2Icon,
} from 'lucide-react'
import { useNavigate} from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate(); 
    return (
        <section className="relative pb-20 overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-28">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 blur-3xl"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 blur-3xl"></div>
          </div>
          <div className="container relative px-4 mx-auto">
            <div className="flex flex-col items-center gap-12 md:flex-row">
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
                    className="inline-block px-4 py-1 mb-6 border rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-teal-500/20"
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
                    <span className="font-medium text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">
                      AI-Powered Risk Assessment
                    </span>
                  </motion.div>
                  <motion.h1
                    className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
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
                    <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">
                      {' '}
                      Machine Learning
                    </span>
                  </motion.h1>
                  <motion.p
                    className="max-w-lg mb-8 text-lg text-gray-300"
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
                    className="flex flex-col gap-4 sm:flex-row"
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
                    onClick={() => navigate("/Login")} 
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="relative flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white rounded-lg group bg-gradient-to-r from-teal-500 to-cyan-500"
                    >
                      <span className="relative z-10 flex items-center">
                        Try now
                        <ChevronRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-teal-600 to-cyan-600 group-hover:opacity-100" />
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="px-8 py-4 font-medium text-white transition-colors border rounded-lg border-teal-500/30 hover:bg-teal-500/10"
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
                    className="relative z-10 p-8 border border-gray-700 shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl"
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
                      <span className="px-3 py-1 text-sm text-teal-400 border rounded-full bg-teal-500/10 border-teal-500/20">
                        Live Data
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 border border-gray-700 bg-gray-800/50 rounded-xl">
                        <div className="flex items-center mb-2">
                          <TrendingUpIcon
                            className="mr-2 text-teal-400"
                            size={20}
                          />
                          <span className="text-sm font-medium text-gray-300">
                            Risk Score
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">87.4%</div>
                      </div>
                      <div className="p-4 border border-gray-700 bg-gray-800/50 rounded-xl">
                        <div className="flex items-center mb-2">
                          <ShieldIcon className="mr-2 text-cyan-400" size={20} />
                          <span className="text-sm font-medium text-gray-300">
                            Confidence
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">94.2%</div>
                      </div>
                    </div>
                    <div className="p-4 mb-6 border border-gray-700 bg-gray-800/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">
                          Default Probability
                        </span>
                        <span className="text-sm font-medium text-red-400">
                          High Risk
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-red-500 to-red-600"
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
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <div>Analyzed factors: 24</div>
                        <div>Last updated: 2 mins ago</div>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute w-20 h-20 opacity-50 -top-8 -right-8 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 blur-lg"
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
                    className="absolute w-20 h-20 rounded-full opacity-50 -bottom-8 -left-8 bg-gradient-to-br from-cyan-500 to-teal-500 blur-lg"
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
