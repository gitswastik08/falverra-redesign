import React from 'react'
import PricingHero from "./components/PricingHero";
import PlanChart from './components/PlanChart';
import WhySubscribe from './components/WhySubscribe';
import Faq from '../../components/Faq';
import CtaBanner from "../../components/CtaBanner";
import Footer from "../../components/Footer";
const PricingPage = () => {
  return (
    <div className='font-yourfont '>
        <PricingHero/>
        <PlanChart/>
        <WhySubscribe/>
        <Faq/>
         <CtaBanner
        childrenText={
          <>
            Bold Block With
            <br className="hidden sm:block" />
            contrast
          </>
        } childrenButton={'Start With Pro'}
      />
      <Footer/>
    </div>
  )
}

export default PricingPage