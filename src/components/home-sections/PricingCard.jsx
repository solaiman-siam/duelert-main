
import Arrow from '../../assets/images/feature-arrow.png'

function PricingCard({data}) {
  return (
    <div className="px-14 relative py-14 hover:-translate-y-2 group hover:bg-primary hover:text-white transition-all duration-300 rounded-lg bg-white">
        <div className='flex items-end pb-4'>
        <h2 className='text-5xl font-semibold'>${data?.price}</h2>
        <span className='font-medium text-description group-hover:text-white transition-all duration-300'>/{data?.billingCycle}</span>
        </div>
        <h3 className='font-semibold text-2xl  pb-4'>{data?.plan}</h3>
        <p className='text-description group-hover:text-white transition-all duration-300 pb-6'>{data?.description}</p>

        <div className="flex flex-col gap-2 ">
            {
                data?.features.map(feature => (
                    <div key={feature} className='flex items-center gap-2'>
                    <img className='group-hover:brightness-0 group-hover:invert transition-all duration-300' src={Arrow} alt="feature-icon" />
                    <h4 >{feature}</h4>
                    </div>
                ))
            }
        </div>
        <div className='pt-12'>
            <button className="w-full py-4 rounded-md group-hover:bg-white group-hover:text-gray-800  transition-all duration-300 bg-primary text-white font-medium">Choose Plan</button>
          </div>

          {data?.mostPopular &&  <h4 className='px-8 py-2 group-hover:text-primary font-medium text-white transition-all duration-300 group-hover:bg-white uppercase  rounded-full  bg-primary absolute top-8 right-8'>{'Most Popular' }</h4>}
        
    </div>
  )
}

export default PricingCard