import { pricingData } from "../../lib/staticData";
import CommonHead from "../shared/CommonHead";
import Container from "../shared/Container";
import PricingCard from "./PricingCard";

function PricingSection({isTitle, className}) {
  return (
    <div className={` ${className}`}>
      <Container>
        <div className="w-full">
          {isTitle && <div className="flex w-full items-center justify-center flex-col gap-2">
            <CommonHead head={"Pricing"} />
            <p className="text-description w-5/12 text-center">Choose best plan what works for you</p>
          </div>}
          

          <div className="grid grid-cols-3 gap-14 pt-14">
            {
                pricingData.map(item => <PricingCard key={item.id} data={item}/>)
            }
          </div>

         
        </div>
      </Container>
    </div>
  );
}

export default PricingSection;
