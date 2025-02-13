
import { Table } from "antd";
import { useEffect, useRef, useState } from "react";

function Reminders() {
  const buttons = ["Single Schedule", "Bulk Schedule", "Report"];
  const [active, setActive] = useState(buttons[0]);
  const containerRef = useRef(null);
  const [style, setStyle] = useState({ width: 0, left: 0 });

  // console.log(active);

  const data = {
    "Single Schedule": [
      { key: 1, contactName: "Damola Daniel Odubote", phoneNumber: "+2348100986534", emailAddress: "damoladaniel@gmail.com", scheduleDate: "08 - Aug - 2022", status: "Successful" },
      { key: 2, contactName: "John Doe", phoneNumber: "+1234567890", emailAddress: "john@example.com", scheduleDate: "10 - Aug - 2022", status: "Successful" }
    ],
    "Bulk Schedule": [
      { key: 3, contactName: "Alice Johnson", phoneNumber: "+9876543210", emailAddress: "alice@example.com", scheduleDate: "15 - Aug - 2022", status: "Pending" }
    ],
    "Report": [
      { key: 4, contactName: "Bob Smith", phoneNumber: "+1122334455", emailAddress: "bob@example.com", scheduleDate: "20 - Aug - 2022", status: "Failed" }
    ]
  };
  

  useEffect(() => {
    const activeBtn = containerRef.current?.querySelector(
      `[data-name="${active}"]`
    );
    if (activeBtn) {
      setStyle({ width: activeBtn.offsetWidth, left: activeBtn.offsetLeft });
    }
  }, [active]);

  const columns = [
    {
      title: "Contact Name",
      key: "contactName",
      dataIndex: "contactName",
    },
    {
      title: "Phone  Number",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
    },
    {
      title: "Email Address",
      key: "emailAddress",
      dataIndex: "emailAddress",
    },
    {
      title: "Schedule Date",
      key: "scheduleDate",
      dataIndex: "scheduleDate",
    },
    {
      title: "STATUS",
      key: "scheduleDate",
      render: (_, record) => {
        return (
          <>
            <button onClick={handleSuccess} className="px-4 py-2 rounded-md bg-primary font-poppins text-white">
              Successful
            </button>
          </>
        );
      },
    },
  ];

  const handleSuccess = () => {
    // console.log('abcd');
  }



  const components = {
    header: {
      cell: (props) => 
          (
            <th {...props} className="!bg-[#FFDEE3] p-4 !font-poppins !font-semibold !uppercase" >
              {props.children}
            </th>
          )
      
    }
  }

  return (
    <div className="rounded-md">
      <div
        ref={containerRef}
        className="relative inline-flex bg-[#FFDEE3] py-1 rounded-lg shadow-lg"
      >
        <div
          className="absolute top-0 h-full bg-white rounded-md transition-all duration-300"
          style={style}
        />
        {buttons.map((btn) => (
          <button
            key={btn}
            data-name={btn}
            onClick={() => setActive(btn)}
            className="relative z-10 px-6 py-2 text-sm "
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="pt-8">
        <Table
          rowClassName={(_, index) =>
            index % 2 === 0
              ? "bg-[#FFF0F2] font-poppins p-4 text-[#404D61]"
              : "text-[#404D61] font-poppins p-4"
          }
          pagination={{
            position: ["bottomCenter"],
            pageSize: 10,
            itemRender: (page, type) => {
              if(type === 'prev') {
                return <button className="px-4 bg-primary font-poppins  rounded-md !text-white">← Prev</button>
              }
              if(type === 'next') {
                return <button className="px-4 bg-primary font-poppins  rounded-md !text-white">Next →</button>
              }

              return (
                <button className="px-4 h-full flex justify-center items-center font-poppins outline-red-400 rounded">
                  {page}
                </button>
              )
            }

          }}
          components={components}
          columns={columns}
          dataSource={data[active]}
        />
      </div>
    </div>
  );
}

export default Reminders;
