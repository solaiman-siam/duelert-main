import { Segmented } from "antd";
import { useState } from "react";

function Reminders() {
  const [alignValue, setAlignValue] = useState("Single Schedule");

  const handleSingleSchedule = (e) => {
    e.preventDefault();
    console.log("Single Schedule");
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
            <fieldset className="flex col-span-3 flex-col col-span-[1.5] gap-3">
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
            <fieldset className="flex col-span-3 flex-col col-span-[1.5] gap-3">
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
          </div>
          <button
            type="submit"
            className="text-lg font-semibold py-4 px-16 text-white bg-primary rounded-lg mt-14"
          >
            SUBMIT
          </button>
        </form>
      )}
    </div>
  );
}

export default Reminders;
