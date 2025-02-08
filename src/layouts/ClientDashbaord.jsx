import { Outlet } from "react-router";
import Logo from '../assets/images/Logo.png'
import BottomVector from '../assets/images/bottom-vector.png'
import Sidebar from "../components/client-dashboard/Sidebar";
import Navbar from "../components/client-dashboard/Navbar";
function ClientDashbaord() {
  return (
    <div className="font-poppins">
      <div className="w-full flex ">
        <div className="w-[16%] flex-col justify-between flex min-h-screen fixed bg-gradient-to-b from-[#F7FAF3]  to-[#FAECE3]">
          <div className="flex h-[100px] justify-center items-center py-5 border-b">
            <img className="w-52" src={Logo} alt="logo" />
          </div>

          <div className="flex grow py-8 border-r  h-full justify-between flex-col">
            <div className="px-12">
              <h3 className="font-medium text-[#6F6F6F] ">Main Menu</h3>
              <div>
                <Sidebar/>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <img src={BottomVector} alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1 ml-[16%] min-h-screen bg-gradient-to-b from-[#F7FAF3]  to-[#FAECE3]">
          <div className="w-full  py-[25.50px] border-b px-8">
              <Navbar name={'Dashboard'}/>
          </div>
          {/* main content here */}
          <div className=" p-4 rounded-md ">
             <div className="rounded-lg bg-white p-6">
             <h3 className="text-5xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, molestias et adipisci quisquam dicta placeat eius ad fuga modi nemo fugit maiores illum inventore, nihil hic totam, id expedita animi. Nam, expedita debitis. Saepe nemo doloribus dolor quibusdam libero. Eum possimus animi minima odio deleniti ea maiores vel laborum omnis architecto, debitis corporis! Officia, quod. Possimus, accusantium velit quis reiciendis earum atque incidunt at corrupti voluptatem. Nihil magnam repellat, eligendi officiis </h3>
             </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default ClientDashbaord;
