import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar"


function MainLayout() {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
        <Outlet/>
    </div>
  )
}

export default MainLayout