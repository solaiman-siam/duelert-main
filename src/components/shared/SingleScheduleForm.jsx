import { ConfigProvider } from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const SingleScheduleForm = () => {
  const handleSingleSchedule = (e) => {
    e.preventDefault();
    console.log("Single Schedule");
  };

  return (
    <form onSubmit={handleSingleSchedule}>
      <div className="grid grid-cols-6 gap-8">
        <fieldset className="flex col-span-2 flex-col gap-2.5">
          <label htmlFor="invoiceTitle" className="text-[#717579]">
            Invoice Title
          </label>
          <input
            type="text"
            id="invoiceTitle"
            name="invoiceTitle"
            placeholder="Name here"
            className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
            required
          />
        </fieldset>
        <fieldset className="flex col-span-2 flex-col gap-2.5">
          <label htmlFor="amount" className="text-[#717579]">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Amount"
            className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
            required
          />
        </fieldset>
        <fieldset className="flex col-span-2 flex-col gap-2.5">
          <label htmlFor="invoiceNumber" className="text-[#717579]">
            Invoice Number
          </label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            placeholder="Invoice Number"
            className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
            required
          />
        </fieldset>
        <fieldset className="flex col-span-3 flex-col gap-2.5">
          <label htmlFor="recipientName" className="text-[#717579]">
            Recipient Name
          </label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            placeholder="Name here"
            className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
            required
          />
        </fieldset>
        <fieldset className="flex col-span-3 flex-col gap-2.5">
          <label htmlFor="email" className="text-[#717579]">
            Recipient Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email here"
            className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
            required
          />
        </fieldset>
        <fieldset className="flex col-span-3 flex-col gap-2.5">
          <label htmlFor="phoneNumber" className="text-[#717579]">
            Customer’s Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
            required
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2.5">
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
        <fieldset className="flex flex-col gap-2.5">
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
        <fieldset className="flex flex-col gap-2.5">
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
                      label: <span className="font-poppins">Daily</span>,
                      value: "Daily",
                    },
                    {
                      label: <span className="font-poppins">Weekly</span>,
                      value: "Weekly",
                    },
                    {
                      label: <span className="font-poppins">Monthly</span>,
                      value: "Monthly",
                    },
                    {
                      label: <span className="font-poppins">Yearly</span>,
                      value: "Yearly",
                    },
                  ],
                },
              ]}
            />
          </ConfigProvider>
        </fieldset>
        <fieldset className="flex flex-col col-span-6 gap-2.5 mt-1">
          <label htmlFor="senderMessage" className="text-[#717579]">
            Sender Message
          </label>
          <textarea
            id="senderMessage"
            name="senderMessage"
            placeholder="Write here"
            className="h-[200px] w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
          ></textarea>
        </fieldset>
      </div>
      <button
        type="submit"
        className="text-lg font-semibold py-4 px-16 text-white bg-primary rounded-lg mt-8"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default SingleScheduleForm;
