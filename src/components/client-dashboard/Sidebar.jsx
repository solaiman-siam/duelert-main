
import Logo from '../../assets/images/Logo.png'
import BottomVector from '../../assets/images/bottom-vector.png'

import { useState } from "react";
import { FaCalendar } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";
import { MdRequestPage } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router";
function Sidebar() {
    
  const [activeTab, setActiveTab] = useState(0);

  const navnMenu = [
    {
      name: "Calendar",
      icon: <FaCalendar size={21} />,
      path: "",
    },
    {
      name: "Pricing",
      icon: <MdRequestPage size={24} />,
      dropdown: true,
      path: "/pricing",
    },
    {
      name: "Reminder",
      icon: <BiSolidBellRing size={23} />,
      path: "/reminder",
    },
    {
      name: "Contacts",
      icon: <IoIosPeople size={25} />,
      path: "/contact",
    },
    {
      name: "Support",
      icon: <MdOutlineSupportAgent size={24} />,
      path: "/support",
    },
  ];

  const handleMenu = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-[16%] flex-col justify-between flex min-h-screen fixed bg-gradient-to-b from-[#F7FAF3]  to-[#FAECE3]">
      <div className="flex h-[100px] justify-center items-center py-5 border-b">
        <img className="w-52" src={Logo} alt="logo" />
      </div>

      <div className="flex grow py-8 border-r  h-full justify-between flex-col">
        <div className="px-12">
          <h3 className="font-medium text-[#6F6F6F] ">Main Menu</h3>
          <div>
            <div className="space-y-2 pt-8">
              {navnMenu.map((menu, index) => (
                <Link
                  to={`/client${menu.path}`}
                  onClick={() => handleMenu(index)}
                  key={menu.name}
                  className={`flex  py-3  cursor-pointer px-4   items-center gap-2 ${
                    activeTab === index ? "bg-primary/20    text-white " : ""
                  }`}
                >
                  <div className="w-2/12">
                    <span
                      className={`${
                        activeTab === index ? "text-primary " : "text-gray-600"
                      }`}
                    >
                      {menu.icon}
                    </span>
                  </div>
                  <h4
                    className={`flex-1 font-medium ${
                      activeTab === index ? "text-primary " : "text-gray-600"
                    }`}
                  >
                    {menu.name}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img src={BottomVector} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
