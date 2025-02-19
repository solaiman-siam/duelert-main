import Hero from "../../components/home-sections/Hero"
import WhyChooseUs from "../../components/home-sections/WhyChooseUs"
import BackgroundGradientImg from '../../assets/images/Background_Gradient.png'
import KeyHighlights from '../../components/home-sections/KeyHighlights'
import CalenderBanner from "../../components/home-sections/CalenderBanner"

import SubscribeBanner from "../../components/home-sections/SubscribeBanner"
import PricingSection from "../../components/home-sections/PricingSection"
import Navbar from "../../components/shared/Navbar"
function Home() {
  return (
    <div className="">
      <Navbar bg={"bg-transparent"} />
      <Hero/>
      <div className=" relative ">
      <WhyChooseUs/>
      <KeyHighlights/>
      <CalenderBanner/>
      <PricingSection className={'py-24'} isTitle={true}/>
       <img className="w-full h-full absolute top-0 left-0 z-[-1]" src={BackgroundGradientImg} alt="" />
      </div>
      <SubscribeBanner/>
    </div>
  )
}

export default Home