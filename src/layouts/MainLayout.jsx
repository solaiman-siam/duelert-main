import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar"


function MainLayout() {
  return (
    <div className="font-poppins">
      <nav>
        <Navbar/>
      </nav>
        <Outlet/>
    </div>
  )
}

export default MainLayout