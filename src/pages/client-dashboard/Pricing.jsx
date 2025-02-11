import { Table } from "antd";
import PricingSection from "../../components/home-sections/PricingSection";

function Pricing() {
  const data = [
    {
      key: "1",
      invoices: "Mike",
      amount: 20,
      startDate: "Savar, Dhaka",
      endDate: "Savar, Dhaka",
      status: (
        <div className="flex items-center gap-2 ">
          <button className="px-4 py-1.5 bg-red-400 text-white font-medium rounded-lg">
            Accept
          </button>
          <button className="px-4 py-1.5 bg-red-400 text-white font-medium rounded-lg">
            Delete
          </button>
        </div>
      ),
    },
    {
      key: "1",
      invoices: "Mike",
      amount: 20,
      startDate: "Savar, Dhaka",
      endDate: "Savar, Dhaka",
      status: (
        <div className="flex items-center gap-2 ">
          <button className="px-4 py-1.5 bg-red-400 text-white font-medium rounded-lg">
            Accept
          </button>
          <button className="px-4 py-1.5 bg-red-400 text-white font-medium rounded-lg">
            Delete
          </button>
        </div>
      ),
    },
    {
      key: "1",
      invoices: "Mike",
      amount: 20,
      startDate: "Savar, Dhaka",
      endDate: "Savar, Dhaka",
      status: (
        <div className="flex items-center gap-2 ">

          <button className="px-4 py-1.5 bg-red-400 text-white font-medium rounded-lg">
            Accept
          </button>
          <button className="px-4 py-1.5 bg-red-400 text-white font-medium rounded-lg">
            Delete
          </button>
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "Invoices",
      dataIndex: "invoices",
      key: "invoices",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date Started",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Date Expired",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div className=" rounded-md">
      <div className="flex items-center gap-8 justify-center">
        <h3 className="font-medium text-lg ">
          Sign Up And GET 2 Free SMS Messages
        </h3>
        <button className="px-8 py-2.5 rounded-lg bg-primary text-white font-medium">
          Sign up now{" "}
        </button>
      </div>

      <div className="px-8">
        <PricingSection isTitle={false} />
      </div>
      <div className="pt-20">
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
}

export default Pricing;
