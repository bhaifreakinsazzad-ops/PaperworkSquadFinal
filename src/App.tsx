import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustStrip from './components/sections/TrustStrip'
import WhyItMatters from './components/sections/WhyItMatters'
import WhatWeCheck from './components/sections/WhatWeCheck'
import HowItWorks from './components/sections/HowItWorks'
import Outcomes from './components/sections/Outcomes'
import WhyTrustCGW from './components/sections/WhyTrustCGW'
import MainCTA from './components/sections/MainCTA'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhyItMatters />
        <WhatWeCheck />
        <HowItWorks />
        <Outcomes />
        <WhyTrustCGW />
        <MainCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
