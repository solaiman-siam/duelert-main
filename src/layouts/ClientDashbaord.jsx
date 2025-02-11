import { Outlet } from "react-router";
import Navbar from "../components/client-dashboard/Navbar";
import Sidebar from "../components/client-dashboard/Sidebar";



function ClientDashboard() {
  return (
    <div className="font-poppins scrollbar-hide">
      <div className="w-full flex scrollbar-hide">
        <Sidebar/>
        <div className="flex-1 ml-[16%] min-h-screen bg-gradient-to-b from-[#F7FAF3]  to-[#FAECE3]">
          <div className="w-full  py-[25.50px] border-b px-8">
              <Navbar name={'Dashboard'}/>
          </div>

          
          {/* pages content here */}
          <div className="p-8 rounded-md scrollbar-hide">
          <Outlet />
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default ClientDashboard;
