import { IoNotifications } from "react-icons/io5";
import { Link, useLocation } from "react-router";
import { Button, Dropdown, Space } from "antd";
const items = [
  {
    key: "1",
    label: (
      <Link
        to="/client/reminder"
      >
        MD. NoOnes Birthday in this week
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to="/client/reminder"
      >
        MD. NoOnes Birthday in this week
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        to="/client/reminder"
      >
        MD. NoOnes Birthday in this week
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link
        to="/client/reminder"
      >
        MD. NoOnes Birthday in this week
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link
        to="/client/reminder"
      >
        MD. NoOnes Birthday in this week
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link
        to="/client/reminder"
      >
        MD. NoOnes Birthday in this week
      </Link>
    ),
  },
];

function Navbar({ name }) {
  return (
    <div className="flex w-full  items-center">
      <div>
        <h3 className="text-4xl font-medium">{name}</h3>
      </div>
      <div className="flex-1 flex justify-end items-center  mr-[300px] gap-12">
        <Space direction="vertical">
            <Dropdown
              menu={{
                items,
              }}
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
