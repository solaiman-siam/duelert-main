

function ChooseUsCard({data}) {
  return (
    <div className="p-10 bg-white hover:bg-primary group hover:text-white rounded-md">
    <div className="px-4 w-fit py-4 hover:bg-primary/70 rounded-md bg-primary">
        <img className="w-8" src={data?.icon} alt="" />
    </div>
    <div className="pt-6">
        <h3 className="text-3xl font-semibold pb-2 group-hover:text-white text-description">{data?.title}</h3>
        <p>{data?.description}</p>
    </div>
</div>
  )
}

export default ChooseUsCard