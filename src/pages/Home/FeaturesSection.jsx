import React, { Children } from 'react'
import { motion } from 'framer-motion'
import {
    BrainIcon,
    BarChart4Icon,
    ShieldIcon,
    ClockIcon,
    UsersIcon,
    DatabaseIcon,
} from 'lucide-react'

const FeaturesSection = () => {
    const features = [
        {
            icon: <BrainIcon size={32} className="text-teal-500" />,
            title: 'AI-Powered Analysis',
            description:
                'Advanced machine learning algorithms analyze thousands of data points to predict loan default risk with high accuracy.',
            gradient: 'from-teal-500/10 to-cyan-500/10',
            border: 'border-teal-500/20',
        },
        {
            icon: <BarChart4Icon size={32} className="text-cyan-500" />,
            title: 'Real-time Analytics',
            description:
                'Monitor portfolio performance and risk metrics in real-time with interactive dashboards and visualizations.',
            gradient: 'from-cyan-500/10 to-teal-500/10',
            border: 'border-cyan-500/20',
        },
        {
            icon: <ShieldIcon size={32} className="text-emerald-500" />,
            title: 'Secure & Compliant',
            description:
                'Bank-grade security with SOC 2 compliance and encrypted data storage to protect sensitive financial information.',
            gradient: 'from-emerald-500/10 to-teal-500/10',
            border: 'border-emerald-500/20',
        },
        {
            icon: <ClockIcon size={32} className="text-teal-500" />,
            title: 'Fast Decision Support',
            description:
                'Get risk assessments in seconds, not days, accelerating your loan approval process while maintaining accuracy.',
            gradient: 'from-teal-500/10 to-emerald-500/10',
            border: 'border-teal-500/20',
        },
        {
            icon: <UsersIcon size={32} className="text-cyan-500" />,
            title: 'Customer Insights',
            description:
                'Gain deeper understanding of borrower behavior and identify factors that contribute to default risk.',
            gradient: 'from-cyan-500/10 to-teal-500/10',
            border: 'border-cyan-500/20',
        },
        {
            icon: <DatabaseIcon size={32} className="text-emerald-500" />,
            title: 'Integration Ready',
            description:
                'Seamlessly connects with your existing banking systems through secure APIs and data connectors.',
            gradient: 'from-emerald-500/10 to-cyan-500/10',
            border: 'border-emerald-500/20',
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
                        Features
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Advanced Features for
                        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
                            {' '}
                            Modern Banking
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Our platform combines advanced AI technology with financial
                        expertise to deliver accurate loan default predictions and
                        actionable insights.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
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
                                className={`h-full p-6 rounded-2xl bg-gradient-to-b ${feature.gradient} backdrop-blur-xl border ${feature.border}`}
                            >
                                <div className="bg-gray-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default FeaturesSection
