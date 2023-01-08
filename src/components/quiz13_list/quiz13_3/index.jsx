import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_3.png";

function Quiz13_3() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["E","R1","R2","C"]} />
        W = 0.5 * C * E ** 2 * ((R1 - R2) / (R1 + R2)) ** 2<br />
        Result: {(0.5 * C * E ** 2 * ((R1 - R2) / (R1 + R2)) ** 2).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_3;
