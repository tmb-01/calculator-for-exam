import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_2.png";

function Quiz5_2() {
  const [data, setData] = useState({});
  const U1 = data?.U1 || 0;
  const R21 = data?.R21 || 0;
  const R11 = data?.R11 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["U1", "R21", "R11"]} />
        [V] = U1 - R21 * (U1 / R11)
        <br />
        Result: {(U1 - R21 * (U1 / R11)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_2;
