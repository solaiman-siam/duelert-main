import { Minus, PlusIcon } from "lucide-react";
import CommonHead from "../shared/CommonHead";
import CommonSubHead from "../shared/CommonSubHead";
import Container from "../shared/Container";
import { Collapse, Typography } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { qnaData } from "../../lib/staticData";
import { useState } from "react";
const text = `
 The AreaInsight platform aggregates and analyzes data from a variety of trusted and authoritative sources to provide comprehensive, up-to-date, and reliable neighborhood insights.
`;

function Qna() {
  const onChange = (key) => {
    console.log(key);
    setActiveKey(key);
  };

  const [activeKey, setActiveKey] = useState(1);

  const items = [
    {
      key: "1",
      label: "What data sources are used?",
      children: <p>{text}</p>,
      showArrow: true,
    },
    {
      key: "2",
      label: "How current is the data?",
      children: <p>{text}</p>,
      showArrow: true,
    },
  ];

  return (
    <div className="">
      <Container>
        <div>
          <CommonSubHead subhead={"FAQ"} />
          <CommonHead head={"Frequently Asked Question"} />
          {/* Accordion */}
          <div className="py-8">
            <Collapse
              destroyInactivePanel={true}
              expandIconPosition="right"
              expandIcon={({ isActive }) => {
                return isActive ? (
                  <div className="border border-primary translate-y-1/2 bg-primary  rounded-full p-px">
                    <Minus rotate={90} color="white" />
                  </div>
                ) : (
                  <div className="border border-black translate-y-1/2 text-black rounded-full p-px">
                    <PlusIcon rotate={180} color="#000" />
                  </div>
                );
              }}
              accordion={true}
              activeKey={activeKey}
              onChange={onChange}
            >
              {qnaData.map((qna, index) => (
                <CollapsePanel
                  key={qna.id}
                  header={
                    <h2
                      className={`font-semibold font-inter text-xl py-4 px-2`}
                    >{`${index + 1}.${qna?.question}`}</h2>
                  }
                  className={`${qna.id == activeKey ? "bg-white" : "bg-transparent"} transition-all duration-300`}
                >
                  <Typography.Text>
                    <div className="px-2 font-inter">
                      <p className="font-medium  text-base">{qna?.answer}</p>
                    </div>
                  </Typography.Text>
                </CollapsePanel>
              ))}
            </Collapse>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Qna;
