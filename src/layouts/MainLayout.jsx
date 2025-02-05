import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"


function MainLayout() {
  return (
    <div className="font-poppins ">
      <nav>
        <Navbar/>
      </nav>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout