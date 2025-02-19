import { Outlet, useLocation } from "react-router";
import Navbar from "../components/client-dashboard/Navbar";
import Sidebar from "../components/client-dashboard/Sidebar";

const PageTitle = [
  {
    pathName: "/client",
    title: "Calender",
  },
  {
    pathName: "/client/pricing",
    title: "Pricing",
  },
  {
    pathName: "/client/contact",
    title: "Contacts",
  },
  {
    pathName: "/client/support",
    title: "Support",
  },
  {
    pathName: "/client/reminder",
    title: "Reminder",
  },
  {
    pathName: "/client/update-profile",
    title: "Profile Update",
  }
];

function ClientDashboard() {
  const location = useLocation();
  const currentPage = PageTitle.find(page => page.pathName === location.pathname);
  const name = currentPage ? currentPage.title : "Dashboard";

  return (
    <div className="font-poppins">
      <div className="w-full flex ">
        <Sidebar />
        <div className="flex-1 ml-[16%] min-h-screen bg-gradient-to-b from-[#F7FAF3] to-[#FAECE3]">
          <div className="w-full fixed  bg-[#F7FAF3]  z-[99] py-[25.50px] border-b px-8">
            <Navbar name={name} />
          </div>
          {/* pages content here */}
          <div className="mt-[100px] rounded-md ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
