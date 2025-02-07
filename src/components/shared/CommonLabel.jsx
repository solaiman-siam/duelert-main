

function CommonLabel({htmlFor, labelName , className}) {
  return (
    <label className={`${className} w-full`} htmlFor={htmlFor}>{labelName}</label>
  )
}

export default CommonLabel