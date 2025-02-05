

function CommonHead({head , className}) {
  return (
    <h2 className={`text-4xl ${className} text-heading py-2 text-center font-semibold`}>
        {head}
    </h2>
  )
}

export default CommonHead