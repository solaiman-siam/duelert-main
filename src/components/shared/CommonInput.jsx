

function CommonInput({type, placeholder, name, id, className}) {
  return (
    <div>
        <input className={`px-4 py-3.5 w-full focus:outline-primary rounded-md border ${className}`} type={type} placeholder={placeholder} name={name} id={id} />
    </div>
  )
}

export default CommonInput