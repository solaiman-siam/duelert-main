import Banner from "../../components/about-us-sections/Banner"
import AboutGradient from '../../assets/images/background-gradient.png'
import TheValueWeOffer from "../../components/about-us-sections/TheValueWeOffer"
import OurMission from "../../components/about-us-sections/OurMission"
import OurNumbers from "../../components/about-us-sections/OurNumbers"
import PageTopVector from '../../assets/images/background-vector.png'
import Testimonial from "../../components/contact-sections/Testimonial"
function AboutUs() {
  return (
    <div >
        <Banner/>

        <div className="relative py-24">
            <TheValueWeOffer/>
            <OurMission/>
            <OurNumbers/>
            <Testimonial/>
            {/* <img src="" alt="" />
            <img src="" alt="" /> */}

            <img className="absolute bottom-12 left-0" src={PageTopVector} alt="" />

            <img className="w-full h-full z-[-2] object-cover top-0 left-0 absolute" src={AboutGradient} alt="" />

        </div>
        

    </div>
  )
}

export default AboutUs