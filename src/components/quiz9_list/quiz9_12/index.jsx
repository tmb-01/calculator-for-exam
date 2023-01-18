import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_12.png";

function Quiz9_12() {
  const [data, setData] = useState({});
  const J = data?.J || 0;
  const R = data?.R || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["J","R","R1","R2"]} />
        U = J * R * ((R1 - R2) / (R + R1))<br />
        Result: {(J * R * ((R1 - R2) / (R + R1))).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_12;
