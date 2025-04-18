// import { Segmented } from "antd";
import { useEffect, useRef, useState } from "react";
import SingleScheduleForm from "../../components/shared/SingleScheduleForm";
import BulkScheduleForm from "../../components/shared/BulkScheduleForm";
import RemainderReport from "../../components/shared/RemainderReport";

function Reminder() {
  const buttons = ["Single Schedule", "Bulk Schedule", "Report"];
  const containerRef = useRef(null);
  const [style, setStyle] = useState({ width: 0, left: 0 });
  const [active, setActive] = useState(buttons[0]);

  // const [alignValue, setAlignValue] = useState("Single Schedule");

  useEffect(() => {
    const handleResize = () => {
      const activeBtn = containerRef.current?.querySelector(
        `[data-name="${active}"]`
      );
      if (activeBtn) {
        setStyle({ width: activeBtn.offsetWidth, left: activeBtn.offsetLeft });
      }
    };
  
    // Run the function on mount and when the active button changes
    handleResize();
  
    // Use window.onload or requestAnimationFrame to ensure element is fully loaded
    window.onload = handleResize;
  
    // Optionally, add a resize event listener if the window is resized
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [active]);

  console.log(active);
  return (
    <div className="birthday-reminder p-8">
      {/* <Segmented
        value={alignValue}
        style={{
          marginBottom: "25px",
          color: "#717579",
          background: "#FFDEE3",
          gap: "2px",
        }}
        onChange={setAlignValue}
        options={["Single Schedule", "Bulk Schedule", "Report"]}
      /> */}
      <div
        ref={containerRef}
        className="relative inline-flex bg-[#FFDEE3] py-1 rounded-lg shadow-lg mb-7"
      >
        <div className="">
          <div
            className="absolute top-0 h-full bg-white rounded-md transition-all duration-300"
            style={style}
          />
          {buttons.map((btn) => (
            <button
              key={btn}
              data-name={btn}
              onClick={() => setActive(btn)}
              className="relative z-10 px-6 py-2 text-sm"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      {active === "Single Schedule" && <SingleScheduleForm />}
      {active === "Bulk Schedule" && <BulkScheduleForm />}
      {active === "Report" && <RemainderReport />}
    </div>
  );
}

export default Reminder;
