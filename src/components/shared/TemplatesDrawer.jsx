import { useState } from "react";
import { Drawer } from "antd";
import { IoClose } from "react-icons/io5";

const TemplatesDrawer = ({ open, setOpen }) => {
  const handleAddMsgTemplate = (e) => {
    e.preventDefault();
    console.log(e.target.message.value, "\nAdd Message Template");
  };

  const [openDrawer2, setOpenDrawer2] = useState(false);
  return (
    <>
      <Drawer
        placement={"bottom"}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={"bottom1"}
        rootClassName="message-template-drawer"
        styles={{
          content: {
            width: "80%",
            maxWidth: "1600px",
            margin: "auto",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            boxShadow: "none",
          },
          body: {
            background: "linear-gradient(111deg, #F8F8F1 0%, #F7E9F7 85.24%)",
          },
        }}
      >
        <div className=" mb-8 flex items-center justify-between">
          <h2 className="text-[#222F3E] text-2xl font-semibold">
            Message Templates
          </h2>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
            }}
            className="text-lg font-bold border-2 border-primary hover:bg-primary hover:text-white text-primary rounded-lg p-1 transition-all duration-300"
          >
            <IoClose />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {Array(9)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#5A5C5F] bg-white rounded-lg text-[#222F3E] text-lg font-medium"
              >
                <div className="w-[90%]">
                  <p>Warm and Professional Happy Birthday, Reed Hastings.</p>
                  <br />
                  <p>
                    On your special day, we want to take a moment to thank you
                    for your hard work and dedication. Wishing you a wonderful
                    year ahead filled with health, happiness, and success!
                  </p>
                </div>
              </div>
            ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setOpenDrawer2(true);
          }}
          className="text-lg font-semibold py-4 px-16 text-white bg-primary rounded-lg mt-8"
        >
          ADD Template
        </button>
      </Drawer>

      <Drawer
        placement={"bottom"}
        closable={false}
        onClose={() => setOpenDrawer2(false)}
        open={openDrawer2}
        key={"bottom2"}
        rootClassName="message-template-drawer"
        styles={{
          content: {
            width: "80%",
            maxWidth: "1600px",
            margin: "auto",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            boxShadow: "none",
          },
          body: {
            background: "linear-gradient(111deg, #F8F8F1 0%, #F7E9F7 85.24%)",
          },
        }}
      >
        <div className="flex items-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => {
              setOpenDrawer2(false);
              setOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
            >
              <path
                d="M8.3335 0.75L10.0835 2.5625L5.646 7H20.8335V9.5H5.646L10.0835 13.9375L8.3335 15.75L0.833496 8.25L8.3335 0.75Z"
                fill="#222F3E"
              />
            </svg>
          </button>
          <h2 className="text-[#222F3E] text-2xl font-semibold">
            Message Templates
          </h2>
        </div>
        <form onSubmit={handleAddMsgTemplate}>
          <fieldset className="space-y-3">
            <label htmlFor="message" className="text-xl text-[#222F3E]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write here"
              className="w-full p-5 rounded-lg border-[0.5px] border-[#5A5C5F]/50 outline-primary bg=[#F8F8F8] font-medium h-[260px] text-lg"
            ></textarea>
          </fieldset>
          <button
            type="submit"
            onClick={() => {
              setOpen(true);
              setOpenDrawer2(false);
            }}
            className="text-lg font-semibold py-4 px-16 text-white bg-primary rounded-lg mt-8"
          >
            ADD
          </button>
        </form>
      </Drawer>
    </>
  );
};

export default TemplatesDrawer;
