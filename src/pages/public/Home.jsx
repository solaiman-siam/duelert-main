import Hero from "../../components/home-sections/Hero"
import WhyChooseUs from "../../components/home-sections/WhyChooseUs"


function Home() {
  return (
    <div className="">
      <Hero/>
      <div className=" bg-gradient-to-tr from-[#FAFCF6] to-[#FAEDFA]">
      <WhyChooseUs/>
      </div>
    </div>
  )
}

export default Home