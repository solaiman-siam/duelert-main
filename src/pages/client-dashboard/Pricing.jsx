import { Table } from "antd";
import PricingSection from "../../components/home-sections/PricingSection";
import { Check } from "lucide-react";

function Pricing() {
  const data = [
    {
      key: "1",
      invoices: "Basic Plan",
      amount: "15$",
      startDate: "10-25-25",
      endDate: "10-25-25",
    },
    {
      key: "1",
      invoices: "Basic Plan",
      amount: "15$",
      startDate: "10-25-25",
      endDate: "10-25-25",
    },
    {
      key: "1",
      invoices: "Basic Plan",
      amount: "15$",
      startDate: "10-25-25",
      endDate: "10-25-25",
    },
    {
      key: "1",
      invoices: "Basic Plan",
      amount: "15$",
      startDate: "10-25-25",
      endDate: "10-25-25",
    },
    {
      key: "1",
      invoices: "Basic Plan",
      amount: "15$",
      startDate: "10-25-25",
      endDate: "10-25-25",
    },
    {
      key: "1",
      invoices: "Basic Plan",
      amount: "15$",
      startDate: "10-25-25",
      endDate: "10-25-25",
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
      render: (_, record) => {
        return (
          <>
            <button className="flex font-poppins bg-primary text-white font-medium px-4 py-2 rounded-md items-center gap-2">
              <span>Paid</span> <Check size={20} />
            </button>
          </>
        );
      },
    },
  ];

  const components = {
    header: {
      cell: (props) => (
        <th
          {...props}
          className="!bg-[#FFDEE3] p-4 font-poppins font-semibold uppercase"
        >
          {props.children}
        </th>
      ),
    },
  };

  return (
    <div className=" rounded-md">
      <div className="flex items-center gap-8 justify-center">
        <h3 className="font-medium text-lg ">
          Sign Up And GET 2 Free SMS Messages
        </h3>
        <button className="px-8 py-2.5 rounded-lg bg-primary text-white font-medium">
          Sign up now
        </button>
      </div>
      <div className="px-8">
        <PricingSection isTitle={false} />
      </div>
      <div className="pt-20 px-8">
        <Table
          pagination={{
            pageSize: 5,
            position: ["bottomCenter"],
            itemRender: (page, type) => {
              if (type === "prev") {
                return <button className="px-4 bg-primary font-poppins  rounded-md !text-white">← Prev</button>;
              }
              if (type === "next") {
                return <button className="px-4 bg-primary !text-white font-poppins rounded-md ">Next →</button>;
              }
              return (
                <button className="px-4 h-full flex justify-center items-center font-poppins outline-red-400 rounded">
                  {page}
                </button>
              );
            },
          }}

          components={components}
          rowClassName={(record, index) =>
            index % 2 === 0
              ? " p-4  bg-white font-poppins text-[#404D61]"
              : " text-[#404D61] bg-[#FFF0F2]  font-poppins"
          }
          dataSource={data}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default Pricing;
