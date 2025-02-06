import Banner from "../../components/about-us-sections/Banner"
import AboutGradient from '../../assets/images/background-gradient.png'
import TheValueWeOffer from "../../components/about-us-sections/TheValueWeOffer"
import OurMission from "../../components/about-us-sections/OurMission"
import OurNumbers from "../../components/about-us-sections/OurNumbers"

function AboutUs() {
  return (
    <div >
        <Banner/>

        <div className="relative py-24">
            <TheValueWeOffer/>
            <OurMission/>
            <OurNumbers/>

            



            {/* <img src="" alt="" />
            <img src="" alt="" /> */}

            <img className="w-full h-full z-[-2] object-cover top-0 left-0 absolute" src={AboutGradient} alt="" />

        </div>
        

    </div>
  )
}

export default AboutUs