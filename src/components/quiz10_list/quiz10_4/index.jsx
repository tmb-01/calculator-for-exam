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
        A switch openes at t=0. Calculate increment of the coil current: Al=l-lo
        (sign and value, in A). E₁=13V; E2-14V, R1=302; R2=402; L=1mH.
        <br />
        <Form data={data} setData={setData} inputs={["E1", "E2", "R1", "R2"]} />
        deltaI = (E2 - E1) / (R1 + R2) - E2 / R2
        <br />
        Result: {((E2 - E1) / (R1 + R2) - E2 / R2).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_4;
