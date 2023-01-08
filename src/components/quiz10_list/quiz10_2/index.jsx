import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_2.png";

function Quiz10_2() {
  const [data, setData] = useState({});
  const C = data?.C || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["C", "R1", "R2"]} />
        t = (10 * C * R1 * R2) / (R1 + R2)<br />
        Result: {((10 * C * R1 * R2) / (R1 + R2)).toFixed(4)} ms
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_2;
