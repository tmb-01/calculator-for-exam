import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_4.png";

function Quiz10_4() {
  const [data, setData] = useState({});
  const E1 = data?.E1 || 0;
  const E2 = data?.E2 || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E1", "E2", "R1", "R2"]} />
        deltaI = (E2 - E1) / (R1 + R2) - E2 / R2<br />
        Result: {((E2 - E1) / (R1 + R2) - E2 / R2).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_4;
