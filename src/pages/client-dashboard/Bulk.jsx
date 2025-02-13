import { ConfigProvider, Segmented } from "antd";
import { useState } from "react";
import { DatePicker } from "antd";
import { Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function Bulk() {
  const [alignValue, setAlignValue] = useState("Single Schedule");
  const [recipients, setRecipients] = useState(3);

  const handleSingleSchedule = (e) => {
    e.preventDefault();
    console.log("Single Schedule");
  };


  const handleBulkSubmit = (e) => {
    e.preventDefault();
    console.log("Bulk Schedule");
  };

  return (
    <div className="birthday-reminder">
      <Segmented
        value={alignValue}
        style={{
          marginBottom: "40px",
          color: "#717579",
          background: "#FFDEE3",
          gap: "2px",
        }}
        onChange={setAlignValue}
        options={["Single Schedule", "Bulk Schedule", "Report"]}
      />
      {alignValue === "Single Schedule" && (
        <form onSubmit={handleSingleSchedule}>
          <div className="grid grid-cols-6 gap-x-8 gap-y-10">
            <fieldset className="flex col-span-2 flex-col gap-3">
              <label htmlFor="invoiceTitle" className="text-[#717579]">
                Invoice Title
              </label>
              <input
                type="text"
                id="invoiceTitle"
                name="invoiceTitle"
                placeholder="Name here"
                className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                required
              />
            </fieldset>
            <fieldset className="flex col-span-2 flex-col gap-3">
              <label htmlFor="amount" className="text-[#717579]">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="Amount"
                className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                required
              />
            </fieldset>
            <fieldset className="flex col-span-2 flex-col gap-3">
              <label htmlFor="invoiceNumber" className="text-[#717579]">
                Invoice Number
              </label>
              <input
                type="text"
                id="invoiceNumber"
                name="invoiceNumber"
                placeholder="Invoice Number"
                className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                required
              />
            </fieldset>
            <fieldset className="flex col-span-3 flex-col gap-3">
              <label htmlFor="recipientName" className="text-[#717579]">
                Recipient Name
              </label>
              <input
                type="text"
                id="recipientName"
                name="recipientName"
                placeholder="Name here"
                className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                required
              />
            </fieldset>
            <fieldset className="flex col-span-3 flex-col gap-3">
              <label htmlFor="email" className="text-[#717579]">
                Recipient Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email here"
                className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                required
              />
            </fieldset>
            <fieldset className="flex col-span-3 flex-col gap-3">
              <label htmlFor="phoneNumber" className="text-[#717579]">
                Customer’s Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col gap-3">
              <label htmlFor="startDate" className="text-[#717579]">
                Start Date of Invoice
              </label>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#ff4d4f",
                  },
                }}
              >
                <DatePicker
                  className="h-full w-full px-5 text-xl border-[0.5px] border-[#5A5C5F]/50"
                  onChange={onChange}
                  format={"DD/MM/YYYY"}
                />
              </ConfigProvider>
            </fieldset>
            <fieldset className="flex flex-col gap-3">
              <label htmlFor="duetDate" className="text-[#717579]">
                Due Date of Invoice
              </label>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#ff4d4f",
                  },
                }}
              >
                <DatePicker
                  className="h-full w-full px-5 text-xl border-[0.5px] border-[#5A5C5F]/50"
                  onChange={onChange}
                  format={"DD/MM/YYYY"}
                />
              </ConfigProvider>
            </fieldset>
            <fieldset className="flex flex-col gap-3">
              <label htmlFor="repeat" className="text-[#717579]">
                Repeat
              </label>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#ff4d4f",
                  },
                }}
              >
                <Select
                  defaultValue="Yearly"
                  className="h-full w-full text-xl"
                  onChange={handleChange}
                  options={[
                    {
                      label: <span className="">Select</span>,
                      title: "manager",
                      options: [
                        {
                          label: <span>Daily</span>,
                          value: "Daily",
                        },
                        {
                          label: <span>Weekly</span>,
                          value: "Weekly",
                        },
                        {
                          label: <span>Monthly</span>,
                          value: "Monthly",
                        },
                        {
                          label: <span>Yearly</span>,
                          value: "Yearly",
                        },
                      ],
                    },
                  ]}
                />
              </ConfigProvider>
            </fieldset>
            <fieldset className="flex flex-col col-span-6 gap-3">
              <label htmlFor="senderMessage" className="text-[#717579]">
                Sender Message
              </label>
              <textarea
                id="senderMessage"
                name="senderMessage"
                placeholder="Write here"
                className="h-[220px] w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
              ></textarea>
            </fieldset>
          </div>
          <button
            type="submit"
            className="text-lg font-semibold py-4 px-16 text-white bg-primary rounded-lg mt-14"
          >
            SUBMIT
          </button>
        </form>
      )}

      {alignValue === "Bulk Schedule" && (
        <>
          <h2 className="text-xl font-semibold text-[#222F3E] mb-5">
            Recipients’ Information
          </h2>
          <form onSubmit={handleBulkSubmit}>
            {Array(recipients)
              .fill(null)
              .map((_, idx) => (
                <div className="grid grid-cols-9 gap-x-5 mb-7" key={idx}>
                  <fieldset className="flex col-span-2 flex-col gap-3">
                    <input
                      type="text"
                      id={`name${idx}`}
                      name={`name${idx}`}
                      placeholder="Name here"
                      className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                      required
                    />
                  </fieldset>
                  <fieldset className="flex col-span-2 flex-col gap-3">
                    <input
                      type="text"
                      id={`number${idx}`}
                      name={`number${idx}`}
                      placeholder="Phone number"
                      className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                      required
                    />
                  </fieldset>
                  <fieldset className="flex col-span-2 flex-col gap-3">
                    <input
                      type="text"
                      id={`email${idx}`}
                      name={`email${idx}`}
                      placeholder="Email here"
                      className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                      required
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-3">
                    <input
                      type="text"
                      id={`day${idx}`}
                      name={`day${idx}`}
                      placeholder="Day"
                      className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                      required
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-3">
                    <input
                      type="text"
                      id={`month${idx}`}
                      name={`month${idx}`}
                      placeholder="Month"
                      className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                      required
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-3">
                    <input
                      type="text"
                      id={`year${idx}`}
                      name={`year${idx}`}
                      placeholder="Year"
                      className="w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                      required
                    />
                  </fieldset>
                </div>
              ))}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setRecipients((prev) => prev + 1)}
                className="text-lg font-semibold px-8 py-4 text-white bg-primary rounded-lg mt-8"
              >
                SUBMITAdd more recipient +
              </button>
            </div>

            <fieldset className="flex flex-col col-span-6 gap-3 mt-8">
              <label htmlFor="message" className="text-[#717579]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write here"
                className="h-[220px] w-full px-5 py-[18px] rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
              ></textarea>
            </fieldset>
            <button
              type="submit"
              className="text-lg font-semibold py-4 px-16 text-white bg-primary rounded-lg mt-14"
            >
              SUBMIT
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Bulk;
