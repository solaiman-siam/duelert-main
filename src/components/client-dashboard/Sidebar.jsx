import Calender from "../../assets/images/calender-icons.png";
import Support from "../../assets/images/customer.png";
import Reminder from "../../assets/images/reminder-icons.png";
import People from "../../assets/images/people.png";
import Pricing from "../../assets/images/pricing.png";
import { useState } from "react";
import { FaCalendar } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";
import { MdRequestPage } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
function Sidebar() {

  const [activeTab, setActiveTab] = useState(0);

  const navnMenu = [
    {
      name: "Calendar",
      icon: <FaCalendar size={21}/>,
    },
    {
      name: "Pricing",
      icon: <MdRequestPage size={24} />,
      dropdown: true,
    },
    {
      name: "Reminder",
      icon: <BiSolidBellRing size={23} />,
    },
    {
      name: "Contacts",
      icon: <IoIosPeople size={24} />,
    },
    {
      name: "Support",
      icon: <MdOutlineSupportAgent size={24} /> ,
    },
  ];

  const handleMenu = (index) => {
    setActiveTab(index)
  };

  return (
    <div className="space-y-2 pt-8">
      {navnMenu.map((menu, index) => (
        <div
          onClick={() => handleMenu(index)}
          key={menu.name}
          className={`flex  py-3  cursor-pointer px-4   items-center gap-2 ${activeTab === index ? 'bg-primary/30    text-white ': ''}`}
        >
          <div className="w-2/12">
            <span className={`${activeTab === index ? 'text-primary ': 'text-gray-600'}`}>{menu.icon}</span>
          </div>
          <h4 className={`flex-1 ${activeTab === index ? 'text-primary ': 'text-gray-600'}`}>{menu.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
