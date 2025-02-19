

import AboutBanner from '../../assets/images/about-us-banner.png'
import AboutGradient from '../../assets/images/about-gradient.png'

function Banner() {
  return (
    <div className="flex items-center  relative justify-center h-[7 40px] overflow-hidden ">
        <h1 className="text-6xl absolute z-[8] font-bold text-white">About Us</h1>
        <img className='absolute top-0 z-[4] left-0 w-full h-full object-cover' src={AboutGradient} alt="" />
        <img className="w-full absolute z-[2] h-full top-0 left-0 object-cover " src={AboutBanner} alt="" />
    </div>
  )
}

export default Banner