


function KeyHighlightCard({data}) {
  return (
    <div className="rounded-lg group hover:-translate-y-2 transition-all duration-300 overflow-hidden w-full">
        <div className="w-full h-[200px]  overflow-hidden">
            <img className="w-full transition-all duration-300 group-hover:scale-110 h-full object-cover" src={data?.image} alt="" />
        </div>

        <div className="flex p-8 h-full transition-all duration-300 group-hover:bg-primary group-hover:text-white bg-white w-full">
            <div className="w-2/12 ">
              <div className="w-14 h-14 bg-primary group-hover:bg-[#F74C65] flex justify-center items-center rounded-full p-2 ">
              <img  className="w-6" src={data?.icon} alt="" />
              </div>
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-semibold pb-4">{data?.title}</h3>
                <p className="font-light transition-all duration-300 group-hover:text-white text-description">{data?.description}</p>
            </div> 
        </div>
    </div>
  )
}

export default KeyHighlightCard