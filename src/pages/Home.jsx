import React from 'react'
import Herosection from '../components/Herosection'
import WhyFalverra from '../components/WhyFalverra'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import HomeSubscription from '../components/HomeSubscription'
import Feedback from '../components/Feedback'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='font-yourfont'>
      <Herosection/>
      <WhyFalverra/>
      <Services/>
      <HowItWorks/>
      <HomeSubscription/>
      <Feedback/>
      <CtaBanner/>
      <Footer/>
    </div>
  )
}

export default Home