import { MoveRight } from "lucide-react";
import Banner from "../../assets/images/subscribe-banner.png";

function SubscribeBanner() {
  return (
    <div className="relative flex justify-center items-center w-full h-[500px] bg-transparent">
      <div className="absolute w-full h-full flex justify-center items-center flex-col z-[8]">
        <h3 className="text-white text-3xl font-semibold text-center ">You can now make your <br /> customers feel on top of the world</h3>
        <p className="text-white font-light  pt-4 text-center">
          Join over 1,000+ businesses never missing important dates in their
          users <br /> lives.
        </p>

        <div className="pt-8 flex  items-center gap-4">
          <button className="px-8 group py-3 rounded-md hover:bg-primary/85 bg-primary text-whtie flex items-center gap-3 text-white"><h4>Schedule Now</h4>{" "}
          <MoveRight className="group-hover:translate-x-1 transition-all duration-300" /></button>
        </div>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Banner}
        alt=""
      />
    </div>
  );
}

export default SubscribeBanner;
