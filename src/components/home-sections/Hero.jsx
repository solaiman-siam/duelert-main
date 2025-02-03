
import HeroImg from '../../assets/images/HeroBanner.png'

function Hero() {
  return (
    <div className='h-screen w-full '>
        <img className=' w-full h-full object-cover' src={HeroImg} alt="" />
    </div>
  )
}

export default Hero