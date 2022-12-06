import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz6_6.png";

function Quiz6_6() {
  const [data, setData] = useState({});
  const U = data?.U || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["U", "R1", "R2"]} />
        <br />
        Result: {((0.1 * U) / (0.8 * R1 + 0.9 * R2)).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz6_6;
