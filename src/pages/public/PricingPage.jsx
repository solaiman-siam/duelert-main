
import BgImage from "../../assets/images/background-gradient.png";
import Qna from "../../components/price-sections/Qna";
import PricingSection from "../../components/home-sections/PricingSection"

function PricingPage() {
  return (
    <div className="relative ">
      <PricingSection isTitle={true} className={'py-24'}/>
      <div className="pb-24">
      <Qna/>
      </div>
      <img
        className="w-full h-full absolute object-cover top-0 left-0 z-[-2]"
        src={BgImage}
        alt=""
      />
    </div>
  );
}

export default PricingPage;
