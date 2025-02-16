import { useState } from "react";
import TemplatesDrawer from "./TemplatesDrawer";

const BulkScheduleForm = () => {
  const [recipients, setRecipients] = useState(3);
  const [open, setOpen] = useState(false);

  const handleBulkSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-[#222F3E] mb-4">
        Recipients’ Information
      </h2>
      <form onSubmit={handleBulkSubmit}>
        {Array(recipients)
          .fill(null)
          .map((_, idx) => (
            <div className="grid grid-cols-9 gap-x-4 mb-5" key={idx}>
              <fieldset className="flex col-span-2 flex-col gap-3">
                <input
                  type="text"
                  id={`name${idx}`}
                  name={`name${idx}`}
                  placeholder="Name here"
                  className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                  required
                />
              </fieldset>
              <fieldset className="flex col-span-2 flex-col gap-3">
                <input
                  type="text"
                  id={`number${idx}`}
                  name={`number${idx}`}
                  placeholder="Phone number"
                  className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                  required
                />
              </fieldset>
              <fieldset className="flex col-span-2 flex-col gap-3">
                <input
                  type="text"
                  id={`email${idx}`}
                  name={`email${idx}`}
                  placeholder="Email here"
                  className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                  required
                />
              </fieldset>
              <fieldset className="flex flex-col gap-3">
                <input
                  type="text"
                  id={`day${idx}`}
                  name={`day${idx}`}
                  placeholder="Day"
                  className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                  required
                />
              </fieldset>
              <fieldset className="flex flex-col gap-3">
                <input
                  type="text"
                  id={`month${idx}`}
                  name={`month${idx}`}
                  placeholder="Month"
                  className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                  required
                />
              </fieldset>
              <fieldset className="flex flex-col gap-3">
                <input
                  type="text"
                  id={`year${idx}`}
                  name={`year${idx}`}
                  placeholder="Year"
                  className="w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
                  required
                />
              </fieldset>
            </div>
          ))}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setRecipients((prev) => prev + 1)}
            className="text-lg font-semibold px-8 py-4 text-white bg-primary rounded-lg mt-5"
          >
            Add more recipient +
          </button>
        </div>

        <fieldset className="flex flex-col col-span-6 gap-3 mt-4">
          <label htmlFor="message" className="text-[#717579]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write here"
            className="h-[200px] w-full px-5 py-4 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8]"
          ></textarea>
        </fieldset>
        <div className="flex gap-6">
          <button
            type="submit"
            className="text-lg font-semibold py-4 px-16 text-white bg-primary rounded-lg mt-8"
          >
            SUBMIT
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-lg font-semibold py-4 px-16 text-white bg-primary rounded-lg mt-8"
          >
            Template
          </button>
        </div>
      </form>
      <TemplatesDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default BulkScheduleForm;
