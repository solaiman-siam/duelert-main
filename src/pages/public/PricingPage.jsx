import Pricing from "../../components/home-sections/Pricing"

import BgImage from '../../assets/images/background-gradient.png'
import Qna from "../../components/price-sections/Qna"

function PricingPage() {
  return (
    <div className="relative ">
      <Pricing/>

      <Qna/>

      <img className="w-full h-full absolute object-cover top-0 left-0 z-[-2]" src={BgImage} alt="" />
    </div>
  )
}

export default PricingPage