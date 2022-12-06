import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_8.png";

function Quiz7_8() {
  const [data, setData] = useState({});
  const I1 = data?.I1 || 0;
  const I2 = data?.I2 || 0;
  const U1 = data?.U1 || 0;
  const U2 = data?.U2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["I1", "I2", "U1", "U2"]} />
        G2 = (I2 * U1 - I1 * U2) / (U1 * (U2 - U1)) <br />
        Result: {((I2 * U1 - I1 * U2) / (U1 * (U2 - U1))).toFixed(4)} S
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_8;
