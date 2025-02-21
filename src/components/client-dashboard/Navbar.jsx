import { IoNotifications } from "react-icons/io5";
import { Link, useLocation } from "react-router";
import { Button, Dropdown, Space } from "antd";


const dropdownContent = (
  <div className="w-60 bg-white shadow-md rounded-md p-3">
    <h3 className="text-lg font-semibold mb-2">Notifications</h3>
    <ul className="space-y-2">
      <li className="p-2 hover:bg-gray-100 rounded">
        📢 New message from John!
      </li>
      <li className="p-2 hover:bg-gray-100 rounded">
        ✅ Task "UI Update" is completed.
      </li>
      <li className="p-2 hover:bg-gray-100 rounded">
        🔔 System maintenance scheduled for tonight.
      </li>
    </ul>
    <button className="w-full mt-3 bg-primary text-white p-2 rounded-md">
      View All
    </button>
  </div>
);


function Navbar({ name }) {
  return (
    <div className="flex w-full  items-center">
      <div>
        <h3 className="text-4xl font-medium">{name}</h3>
      </div>
      <div className="flex-1 flex justify-end items-center  mr-[300px] gap-12">
        <Space direction="vertical">
            <Dropdown
            
            dropdownRender={() => (
              <div className="w-72 bg-white shadow-md rounded-md p-3">
                <h3 className="text-base font-medium mb-2">Notifications</h3>
                <ul className="space-y-2">
                  <li className="p-2 hover:bg-gray-100 rounded">
                    📢 New message from John!
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded">
                    ✅ Task UI Update is completed.
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded">
                    🔔 System maintenance scheduled for tonight.
                  </li>
                </ul>
                <button className="w-full mt-3 bg-primary text-white p-2 rounded-md">
                  View All
                </button>
              </div>
            )}
              trigger={["click"]}
              placement="bottomRight"
              rootClassName="notification-dropdown"
            >
              <div className="cursor-pointer relative translate-y-1">
                <IoNotifications size={26} />
                <div className="absolute bottom-full left-full translate-y-1/2 -translate-x-1/2 bg-primary rounded-full size-5 flex justify-center items-center outline outline-3 outline-white">
                  <p className="text-white font-semibold text-sm">12</p>
                </div>
              </div>
            </Dropdown>
        </Space>
        <Link
          to="/client/update-profile"
          className="flex items-center cursor-pointer gap-2"
        >
          <div className="flex flex-col ">
            <h3 className="font-semibold ">Connie Springer</h3>
            <h4 className="text-sm font-light">example@mail.com</h4>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
