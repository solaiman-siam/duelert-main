import { Segmented } from "antd";
import { useState } from "react";
import SingleScheduleForm from "../../components/shared/SingleScheduleForm";
import BulkScheduleForm from "../../components/shared/BulkScheduleForm";

function Bulk() {
  const [alignValue, setAlignValue] = useState("Single Schedule");


  return (
    <div className="birthday-reminder">
      <Segmented
        value={alignValue}
        style={{
          marginBottom: "25px",
          color: "#717579",
          background: "#FFDEE3",
          gap: "2px",
        }}
        onChange={setAlignValue}
        options={["Single Schedule", "Bulk Schedule", "Report"]}
      />
      {alignValue === "Single Schedule" && <SingleScheduleForm />}
      {alignValue === "Bulk Schedule" && <BulkScheduleForm />}
    </div>
  );
}

export default Bulk;
