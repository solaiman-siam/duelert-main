

function ChooseUsCard({data}) {
  return (
    <div className="p-10 hover:-translate-y-2 hover:shadow-lg bg-white/50 hover:bg-primary group transition-all duration-300 hover:text-white rounded-md">
    <div className="px-4 w-fit py-4 group-hover:bg-[#F74C65] transition-all duration-300 rounded-md bg-primary">
        <img className="w-8" src={data?.icon} alt="" />
    </div>
    <div className="pt-8">
        <h3 className="text-3xl text-primary font-semibold pb-4 transition-all duration-300 group-hover:text-white">{data?.title}</h3>
        <p>{data?.description}</p>
    </div>
</div>
  )
}

export default ChooseUsCard