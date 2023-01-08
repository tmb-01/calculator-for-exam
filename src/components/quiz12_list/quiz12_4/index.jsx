import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz12_4.png";

function Quiz12_4() {
  const [data, setData] = useState({});
  const C = data?.C || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const R3 = data?.R3 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["C", "R1", "R2", "R3"]} />
        t = 5 * C * (R1 + (R2 * R3) / (R2 + R3))<br />
        Result: {(5 * C * (R1 + (R2 * R3) / (R2 + R3))).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz12_4;
