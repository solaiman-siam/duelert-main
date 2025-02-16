import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router";

function Navbar({name}) {
  return (
    <div className="flex w-full  items-center">
      <div><h3 className="text-4xl font-medium">{name}</h3></div>
      <div className="flex-1 flex justify-end mr-[300px] items-center gap-8">
        <div className="cursor-pointer">
        <IoNotifications size={26} />
        </div>
        <Link to="/client/update-profile" className="flex items-center cursor-pointer gap-2">
          <div className="flex flex-col ">
            <h3 className="font-semibold ">Connie Springer</h3>
            <h4 className="text-sm font-light">example@mail.com</h4>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden ">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar