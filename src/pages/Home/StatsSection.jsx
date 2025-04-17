import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
  TrendingUpIcon,
  CheckCircleIcon,
  ClockIcon,
  DatabaseIcon,
} from 'lucide-react'

const StatsSection = () => {
    const stats = [
        {
          icon: <TrendingUpIcon size={32} className="text-teal-500" />,
          value: 95,
          suffix: '%',
          label: 'Prediction Accuracy',
          gradient: 'from-teal-500/10 to-cyan-500/10',
          border: 'border-teal-500/20',
        },
        {
          icon: <CheckCircleIcon size={32} className="text-cyan-500" />,
          value: 3.5,
          suffix: 'M+',
          label: 'Loans Analyzed',
          gradient: 'from-cyan-500/10 to-teal-500/10',
          border: 'border-cyan-500/20',
        },
        {
          icon: <ClockIcon size={32} className="text-emerald-500" />,
          value: 60,
          suffix: '%',
          label: 'Faster Decision Time',
          gradient: 'from-emerald-500/10 to-cyan-500/10',
          border: 'border-emerald-500/20',
        },
        {
          icon: <DatabaseIcon size={32} className="text-cyan-500" />,
          value: 200,
          suffix: '+',
          label: 'Banking Partners',
          gradient: 'from-cyan-500/10 to-emerald-500/10',
          border: 'border-cyan-500/20',
        },
      ]
      return (
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
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
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
                Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
                  {' '}
                  Industry Leaders
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                Our platform delivers measurable results for banks and lending
                institutions worldwide.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
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
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className={`p-6 rounded-2xl bg-gradient-to-b ${stat.gradient} backdrop-blur-xl border ${stat.border}`}
                  >
                    <div className="bg-gray-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      {stat.icon}
                    </div>
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      className="text-4xl font-bold text-white mb-2"
                    />
                    <p className="text-gray-400">{stat.label}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )
    }
    const CountUp = ({ end, suffix = '', className }) => {
      const [count, setCount] = useState(0)
      useEffect(() => {
        let start = 0
        const duration = 2000
        const increment = end / (duration / 16)
        const isDecimal = !Number.isInteger(end)
        const decimalPlaces = isDecimal ? String(end).split('.')[1].length : 0
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(
              isDecimal
                ? parseFloat(start.toFixed(decimalPlaces))
                : Math.floor(start),
            )
          }
        }, 16)
        return () => clearInterval(timer)
      }, [end])
      return (
        <div className={className}>
          {count}
          {suffix}
        </div>
      )
}

export default StatsSection
