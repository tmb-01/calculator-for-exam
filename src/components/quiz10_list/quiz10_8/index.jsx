import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_8.png";

function Quiz10_8() {
  const [data, setData] = useState({});
  const E = data?.E || 0;

  return (
    <PartWrapper>
      <Half>
        Calculate increment of the capacitor voltage: U-Uo, sign and value in V,
        after closing the switch. E-42,8V, R=5kn, C=5µF.
        <br />
        <Form data={data} setData={setData} inputs={["E"]} />
        deltaU = E / 6 <br />
        Result: {(E / 6).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_8;
