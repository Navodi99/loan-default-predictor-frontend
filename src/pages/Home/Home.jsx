import React from 'react'
import Navbar from '../Navigation/Navbar'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import StatsSection from './StatsSection'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
    <Navbar />
    <main className="flex-grow">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </main>
    <Footer />
  </div>
  )
}

export default Home
