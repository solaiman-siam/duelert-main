import { MoveRight } from "lucide-react";
import HeroImg from "../../assets/images/HeroBanner.png";

function Hero() {
  return (
    <div className="h-screen relative flex justify-center items-center w-full ">
      <div className="absolute ">
        <h1 className="text-5xl font-semibold w-7/12 leading-[60px]">Never miss your customers’ birthdays or important reminders!</h1>
        <h3 className="text-lg font-light w-4/12  pt-4 pb-10">
          Your one stop tool to set reminders and never miss an important date,
          event or task
        </h3>

        <button className="px-8  group flex items-center hover:bg-primary/80 transition-all duration-300 gap-4 py-4 rounded-md bg-primary text-white font-medium ">
          <h4>Schedule Now</h4> <MoveRight className="group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>
      <img className=" w-full h-full object-cover" src={HeroImg} alt="" />
    </div>
  );
}

export default Hero;
